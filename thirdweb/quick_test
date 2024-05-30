import { createThirdwebClient, getContract } from "thirdweb";
import { defineChain } from "thirdweb/chains";

// create the client with your clientId, or secretKey if in a server environment
const client = createThirdwebClient({ 
  clientId: "b3c1dc3331b8c5df5d51eae1c059cdf3"
 });

// connect to your contract
const contract = getContract({ 
  client, 
  chain: defineChain(31), 
  address: "0x16848eF5f2208D5a3E8723CE79a08f6d1902C0b3"
});


import { readContract, resolveMethod } from "thirdweb";

const data = await readContract({ 
  contract, 
  method: resolveMethod("contractType"), 
  params: [] 
})

console.log(data);