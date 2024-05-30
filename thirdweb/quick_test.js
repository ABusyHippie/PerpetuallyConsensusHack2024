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
  address: "0x2c962b86727445A321E0D48E616D73c862947C6C"
});


import { readContract, resolveMethod } from "thirdweb";

const data = await readContract({ 
  contract, 
  method: resolveMethod("contractType"), 
  params: [] 
})

console.log(data);