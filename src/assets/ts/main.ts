import {clickAccountButton} from "./wallet";
import {renderCreator, renderCreators} from "./creators";

window.addEventListener("load",async () => {
    if (document.getElementById("page-index")) {
        const creatorsHTMLElement = document.getElementById("creators") as HTMLDivElement;
        await renderCreators(creatorsHTMLElement)
    }

    if (document.getElementById("page-tokens")) {
        const accountButton = document.getElementById("account-button")
        accountButton.addEventListener('click', clickAccountButton);

        const urlParams = new URLSearchParams(window.location.search);
        const creator   = urlParams.get('creator')

        if (!creator) {
            window.location.href = '/'
        }

        const creatorHTMLElement = document.getElementById("creator") as HTMLDivElement;
        await renderCreator(creatorHTMLElement, creator);
    }
});