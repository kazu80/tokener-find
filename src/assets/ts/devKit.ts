import Web3 from "web3/dist/web3.min";
import {addresses, contractFactory} from "@devprotocol/dev-kit";

async function getClient() {
    const { ethereum } = window;
    const provider     = new Web3(ethereum)
    return contractFactory(provider.currentProvider)
}

export const stakeDev = async (propertyAddress: string, amount: string) => {
    const clientDev = await getClient()

    const registryContract = clientDev.registry(addresses.eth.main.registry)
    const address = await registryContract.token()

    // TODO https://github.com/dev-protocol/dev-kit-js/blob/main/lib/dev/index.ts
    return clientDev.dev(address).deposit(propertyAddress, amount)
}