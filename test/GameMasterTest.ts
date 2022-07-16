import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";

import { signERC2612Permit } from 'eth-permit';

describe.only("GameMaster Test", function () {
    async function deployAndMint() {
        // Contracts are deployed using the first signer/account by default
        const [owner, addr1, addr2] = await ethers.getSigners();

        const GamerERC20 = await ethers.getContractFactory("GamerERC20");
        const gamerERC20 = await GamerERC20.deploy(owner.address);
        await gamerERC20.deployed();

        const GameMaster = await ethers.getContractFactory("GameMaster");
        const gameMaster = await GameMaster.deploy(gamerERC20.address);
        await gameMaster.deployed();

        gamerERC20.publicMint(addr1.address);
        gamerERC20.publicMint(addr2.address);

        // console.log(addr1.address);
        // console.log(await (gamerERC20.balanceOf(addr1.address)));

        return { gamerERC20, gameMaster, owner, addr1, addr2 };
    }

    describe("Test Mint Balance", function () {
        it("Should have 100 coins", async function () {
            const { gamerERC20, gameMaster, owner, addr1, addr2 } = await loadFixture(deployAndMint);
            
            // await console.log(gamerERC20.balanceOf(owner.address));
            expect((await (gamerERC20.balanceOf(owner.address)))).to.equal(100);
            expect((await (gamerERC20.balanceOf(addr1.address)))).to.equal(100);
            expect((await (gamerERC20.balanceOf(addr2.address)))).to.equal(100);
        });
    });

    describe("Test GameMaser", function () {
        it("Should join game take correct token amount", async function () {
            const { gamerERC20, gameMaster, owner, addr1, addr2 } = await loadFixture(deployAndMint);
            
            const addr1Result = await signERC2612Permit(addr1.provider, gamerERC20.address, addr1.address, gameMaster.address, Number(await gameMaster.ENTRY_FEE())); 

            await gameMaster.connect(addr1).joinGame(100, addr1Result.deadline, addr1Result.v, addr1Result.r, addr1Result.s);

            expect((await (gamerERC20.balanceOf(gameMaster.address)))).to.equal(100);
            expect((await (gamerERC20.balanceOf(owner.address)))).to.equal(100);
            expect((await (gamerERC20.balanceOf(addr1.address)))).to.equal(0);
            expect((await (gamerERC20.balanceOf(addr2.address)))).to.equal(100);
        });

        it("Should end game and Reward Winner", async function () {
            const { gamerERC20, gameMaster, owner, addr1, addr2 } = await loadFixture(deployAndMint);

            const addr1Result = await signERC2612Permit(addr1.provider, gamerERC20.address, addr1.address, gameMaster.address, Number(await gameMaster.ENTRY_FEE())); 
            const addr2Result = await signERC2612Permit(addr2.provider, gamerERC20.address, addr2.address, gameMaster.address, Number(await gameMaster.ENTRY_FEE())); 

            await gameMaster.connect(addr1).joinGame(100, addr1Result.deadline, addr1Result.v, addr1Result.r, addr1Result.s);
            await gameMaster.connect(addr2).joinGame(100, addr2Result.deadline, addr2Result.v, addr2Result.r, addr2Result.s);

            expect((await (gamerERC20.balanceOf(gameMaster.address)))).to.equal(200);
            expect((await (gamerERC20.balanceOf(owner.address)))).to.equal(100);
            expect((await (gamerERC20.balanceOf(addr1.address)))).to.equal(0);
            expect((await (gamerERC20.balanceOf(addr2.address)))).to.equal(0);

            // End the game
            await gameMaster.connect(owner).endGame(addr2.address);

            gameMaster.on("RoleRevoked", (role, account, msgSender) => {console.log(role, account, msgSender)});

            expect((await (gamerERC20.balanceOf(gameMaster.address)))).to.equal(0);
            expect((await (gamerERC20.balanceOf(owner.address)))).to.equal(100);
            expect((await (gamerERC20.balanceOf(addr1.address)))).to.equal(0);
            expect((await (gamerERC20.balanceOf(addr2.address)))).to.equal(200);


        })
    });
});