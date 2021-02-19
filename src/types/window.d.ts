// https://eips.ethereum.org/EIPS/eip-1193
// https://github.com/MetaMask/inpage-provider
export interface RequestArguments {
    readonly method: string,
    readonly params?: unknown[] | object
}

export interface Ethereum {
    request: (args: RequestArguments) => Promise<unknown>
    isMetaMask: boolean
    chainId: string | undefined
}

declare global {
    interface Window {
        ethereum?: Ethereum
    }
}
