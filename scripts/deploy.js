async function main() {
    // We get the contract to deploy
    const GameItem = await ethers.getContractFactory("GameItem");
    const gameItem = await GameItem.deploy();
  }