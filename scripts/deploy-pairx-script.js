
const hre = require("hardhat")
const ethers = require('ethers') 
const { formatEther } = ethers.utils  

async function main() {

  const emergencyRecipient = '0x83d0126fBd8D221175C9c7F442B35B0A915c4deC'
  const rewardsToken = '0x83d0126fBd8D221175C9c7F442B35B0A915c4deC'  // PAIR token address 
  const stakingToken = '0x83d0126fBd8D221175C9c7F442B35B0A915c4deC'  // Liquidity address 
  const rewardsDistribution = '0x83d0126fBd8D221175C9c7F442B35B0A915c4deC' //分配奖励权限
  const rewardsDuration = 1000  // 奖励持续时间 

  const PairXStaking = await hre.ethers.getContractFactory("PairXStaking");
  const staking = await PairXStaking.deploy( 
    emergencyRecipient , 
    rewardsDistribution , 
    rewardsToken ,
    stakingToken ,
    rewardsDuration );

  await staking.deployed();

  console.log(`Deployed address at ${staking.address}`)

}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
