import {clickLoginButton} from "./wallet";
import {renderCreator, renderCreators, renderCreatorTokens} from "./creators";
import {getTokens} from "./dataViewer";

window.addEventListener("load",async () => {
    if (document.getElementById("page-index")) {
        const creatorsHTMLElement = document.getElementById("creators") as HTMLDivElement;
        await renderCreators(creatorsHTMLElement)
    }

    if (document.getElementById("page-tokens")) {
        const urlParams = new URLSearchParams(window.location.search);
        const creator   = urlParams.get('creator')

        if (!creator) {
            window.location.href = '/'
        }

        const loginButton = document.getElementById("login-button")
        loginButton.addEventListener('click', clickLoginButton);

        const creatorHTMLElement = document.getElementById("creator") as HTMLDivElement;
        await renderCreator(creatorHTMLElement, creator);

        const tokensHTMLElement = document.getElementById("tokens") as HTMLDivElement;
        await renderCreatorTokens(tokensHTMLElement, creator)

    }
});