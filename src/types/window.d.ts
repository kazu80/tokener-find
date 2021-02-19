export interface Ethereum {
    enable: () => Promise<void>
    selectedAddress: string | null
    isConnected: () => boolean
    request: (any) => any
    isMetaMask: () => boolean
    chainId: string
    on: any
    currentProvider: (any) => any
}

declare global {
    interface Window {
        ethereum?: Ethereum
    }
}
