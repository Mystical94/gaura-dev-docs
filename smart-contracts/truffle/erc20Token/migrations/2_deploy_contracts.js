const Happy = artifacts.require("../contracts/HappyToken");

module.exports = async function(deployer) {
	await deployer.deploy(Happy);
    const happy = await Happy.deployed();
    console.log("deployed at", happy.address);
};