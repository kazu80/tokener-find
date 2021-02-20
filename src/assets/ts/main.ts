import {clickAccountButton} from "./wallet";
import {renderCreators} from "./creators";

window.addEventListener("load",async () => {
    const accountButton = document.getElementById("account-button")
    if (accountButton) {
        accountButton.addEventListener('click', clickAccountButton);
    }

    const creators = document.getElementById("creators") as HTMLDivElement;
    if (creators) {
        await renderCreators(creators)
    }
});