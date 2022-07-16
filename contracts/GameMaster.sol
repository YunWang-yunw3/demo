// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "../node_modules/@openzeppelin/contracts/access/AccessControl.sol";
import "../node_modules/@openzeppelin/contracts/access/AccessControlEnumerable.sol";
import "../node_modules/@openzeppelin/contracts/token/ERC20/extensions/draft-ERC20Permit.sol";
import "../node_modules/@openzeppelin/contracts/utils/Strings.sol";

import "../node_modules/hardhat/console.sol";

// We should have a Game contract that has many GameMaster contracts
// We can also have a Lobby contract

contract GameMaster is AccessControlEnumerable {
    /* ========== STATE VARIABLES ========== */
    ERC20Permit public immutable entryToken;
    uint256 public constant ENTRY_FEE = 100;

    // GAMER_ROLE(s) are given when player sent entry fees
    bytes32 public constant GAMER_ROLE = keccak256("GAMER_ROLE");

    /* ========== CONSTRUCTOR ========== */
    constructor(address entryTokenAddress) {
        require(entryTokenAddress != address(0), "Zero address: entryTokenAddress");
        entryToken = ERC20Permit(entryTokenAddress);

        // Grant the contract deployer the default admin role: it will be able to grant and revoke any roles
        _setupRole(DEFAULT_ADMIN_ROLE, msg.sender);
    }

    /* ========== OTHER FUNCTIONS ========== */
    // called by user
    // function joinGame(uint256 amount, uint256 deadline, uint8 v, bytes32 r, bytes32 s) public onlyRole(DEFAULT_ADMIN_ROLE) {
    function joinGame(uint256 amount, uint256 deadline, uint8 v, bytes32 r, bytes32 s) public {
        // permit contract to spend tokens; transfer them; add msg.sender to GAMER_ROLE
        entryToken.permit(msg.sender, address(this), amount, deadline, v, r, s);
        entryToken.transferFrom(msg.sender, address(this), ENTRY_FEE);

        _setupRole(GAMER_ROLE, msg.sender);
    }

    // called by game ADMIN
    // function endGame(address winnerAddress, uint256 amount, uint256 deadline, uint8 v, bytes32 r, bytes32 s) public onlyRole(DEFAULT_ADMIN_ROLE) {
    function endGame(address winnerAddress) public onlyRole(DEFAULT_ADMIN_ROLE) {
        require(hasRole(GAMER_ROLE, winnerAddress), "Address is not a Gamer!");

        uint256 gamerCount = getRoleMemberCount(GAMER_ROLE);
        require(gamerCount == 2, "Gamer Count Not Matching");

        uint256 curBal = entryToken.balanceOf(address(this));
        uint256 rewards = gamerCount * ENTRY_FEE;
        entryToken.transfer(winnerAddress, rewards);
        require(entryToken.balanceOf(address(this)) == (curBal - rewards), "Reward Not Transfered");

        // In EnumerableSet.sol; if the index is not the last index
        // the value for that index will be swapped to the last position then pop();
        // thus, it may be faster and cheaper. We should test tho.
        for (uint256 i = (gamerCount - 1); i > 0; i--) { //  Seems to be faster
        // while (getRoleMemberCount(GAMER_ROLE) != 0) {
            revokeRole(GAMER_ROLE, getRoleMember(GAMER_ROLE, 0));
        }
    }

    /* ========== KILL FUNCTIONS ========== */
    function kill() public onlyRole(DEFAULT_ADMIN_ROLE) {
        selfdestruct(payable(getRoleMember(DEFAULT_ADMIN_ROLE, 0)));
    }
}