// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deployed contracts using the address:",deployer.address);

  const weiAmount = (await deployer.getBalance()).toString();
  const etherAmount = await ethers.utils.formatEther(weiAmount);

  console.log("Account balance:",etherAmount);

  const Token = await ethers.getContractFactory("HappyToken");
  const token = await Token.deploy();

  console.log("Token Address:",token.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
