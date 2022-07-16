// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "../node_modules/@openzeppelin/contracts/token/ERC20/extensions/draft-ERC20Permit.sol";

import "../node_modules/hardhat/console.sol";

contract GamerERC20 is ERC20Permit {

    constructor (address mintAddr) ERC20Permit("Gamer Brain") ERC20("Gamer Brain", "GB") {
        // console.log(address(this), ": ", balanceOf(mintAddr));
        _mint(mintAddr, 100);
        // console.log(address(this), ": ", balanceOf(mintAddr));
    }

    function publicMint (address mintAddr) public {
        _mint(mintAddr, 100);

        // console.log(address(this), ": ", balanceOf(mintAddr));
    }

    /* ========== KILL FUNCTIONS ========== */
    function kill() public {
        selfdestruct(payable(address(this)));
    }
}