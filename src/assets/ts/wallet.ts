const account = new Map();

const NETWORK = {
    MAIN: 1,
    ROPSTEN: 3
}

export const clickLoginButton = async function () {
    if (!isMetamask()) {
        alert("MetaMaskをインストールしてください")
        return
    }

    if (! await isLogin()) {
        alert("MetaMaskからログインしてください")
        return
    }

    if (!isMainNet()) {
        alert("メインネットに切り替えてください")
        return
    }

    alert("MetaMaskにログインしました.")

    loggedInStyle(this)
}

function loggedInStyle(button: HTMLButtonElement) {
    button.classList.replace("btn-outline-warning", "btn-outline-success")
    button.classList.add("disabled");
    button.textContent = "LOGGED IN"
}

function isMainNet() {
    return parseInt(window.ethereum.chainId) === NETWORK.MAIN
}

function isMetamask (): boolean {
    return !! window.ethereum && !! window.ethereum.isMetaMask
}

async function getAccount() {
    if (account.has("account") && account.get("account")) {
        return account.get("account")
    }

    account.set("account", null);

    const accounts = await window.ethereum.request({method: 'eth_accounts'}) as string[]

    if (accounts.length > 0) {
        account.set("account", accounts[0]);
    }

    return account.get("account")
}

async function isLogin(): Promise<boolean> {
    return !! await getAccount();
}