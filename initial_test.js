const { expect } = require("chai");
const { ethers } = require("hardhat");


describe("Multisig smart contract testing", function(){
    let token;
    let accounts;
    let confirmations;
    const amount = ethers.utils.parseEther("1");// this line will take input in string format 
    //and convert to ethers/wei format

    before(async() => {
        const contract = await ethers.getContractFactory("MultiSigWallet");
        //const [owner] = await ethers.getSigners();
        const[owner, addr1, addr2] = await ethers.getSigners();
        const wallet1 = await addr1.address;
        const wallet2 = await addr2.address;
        confirmations = 1;
        token = await contract.deploy([wallet1, wallet2], confirmations);
        accounts = await ethers.getSigners();
        
        
        await token.deployed();
        
       
    });

    it("Only Owner submits transaction", async function(){
        const wallet3 = await token.connect(accounts[3]);
        expect(wallet3.submitTransaction(await token.connect(accounts[4]),10000,0xab)).to.be.reverted;      
    });

    it("Only owner confirms transaction", async function (){
        const wallet2 = await token.connect(accounts[1]);
        const wallet3 = await token.connect(accounts[3]);
        const transaction =wallet2.submitTransaction(await token.connect(accounts[4], 10000,0xab));
        expect(wallet3.confirmTransaction(await token.connect(accounts[3]), transaction)).to.be.reverted;   


    });

    it("Confirmed transaction cannot be reconfirmed by same owner", async function (){
        const wallet2 = await token.connect(accounts[1]);
       // const wallet3 = await token.connect(accounts[3]);
        const transaction =wallet2.submitTransaction(await token.connect(accounts[4], 10000,0xab));
        const conftrans = wallet2.confirmTransaction(await token.connect(accounts[1]), transaction)
        expect(wallet2.confirmTransaction(await token.connect(accounts[1]), transaction)).to.be.reverted;   


    });


    it("deposit ether", async function(){
        const wallet = await token.connect(accounts[1]);
        const option = {value:amount};   
        const before_deposit = await accounts[1].getBalance();
        await wallet.DepositETH(option);
        const after_deposit = await accounts[0].getBalance();
        expect(before_deposit.gt(after_deposit)).to.equal(true);
       
    });

    it("Anyone can deposit ether", async function(){
        const wallet = await token.connect(accounts[3]);
        const option = {value:amount};   
        const before_deposit = await accounts[3].getBalance();
        await wallet.DepositETH(option);
        const after_deposit = await accounts[3].getBalance();
        expect(before_deposit.gt(after_deposit)).to.equal(true);
       
    });

    
    it("Only owner executes transaction", async function (){
        const wallet2 = await token.connect(accounts[2]);
        const wallet3 = await token.connect(accounts[3]);
        const transaction =wallet2.submitTransaction(await token.connect(accounts[4], 10000,0xab));
        const transtosubmit = wallet2.confirmTransaction(await token.connect(accounts[2]), transaction )
        expect(wallet3.executeTransaction(await token.connect(accounts[3]), transtosubmit)).to.be.reverted;   


    });

    it("Only owner can revoke confirmation", async function(){
        const wallet2 = await token.connect(accounts[1]);
        const wallet3 = await token.connect(accounts[3]);
        const transaction =wallet2.submitTransaction(await token.connect(accounts[4], 10000,0xab));
        expect(wallet3.revokeConfirmation(await token.connect(accounts[3]), transaction)).to.be.reverted; 

    });

    it("Confirmation once revoked cannot be reconfirmed by same owner", async function(){
        const wallet2 = await token.connect(accounts[1]);
        const transaction =wallet2.submitTransaction(await token.connect(accounts[4], 10000,0xab));
        const revtrans = wallet2.revokeConfirmation(await token.connect(accounts[1]), transaction)
        expect(wallet2.confirmTransaction(await token.connect(accounts[1]), transaction)).to.be.reverted; 

    });

    it("Transaction once confirmed cannot be revoked once confirmed by same owner", async function(){
        const wallet2 = await token.connect(accounts[1]);
        const transaction =wallet2.submitTransaction(await token.connect(accounts[4], 10000,0xab));
        const revtrans = wallet2.confirmTransaction(await token.connect(accounts[1]), transaction)
        expect(wallet2.revokeConfirmation(await token.connect(accounts[1]), transaction)).to.be.reverted; 

    });

    it("Executed transaction cannot be reexecuted unless resubmitted", async function (){
        const wallet2 = await token.connect(accounts[2]);
        const transaction =wallet2.submitTransaction(await token.connect(accounts[4], 10000,0xab));
        const transtosubmit = wallet2.confirmTransaction(await token.connect(accounts[2]), transaction );
        const transexecuted = wallet2.executeTransaction(await token.connect(accounts[2]), transtosubmit)
        expect(wallet2.executeTransaction(await token.connect(accounts[2]), transtosubmit)).to.be.reverted; 
    });  

});
