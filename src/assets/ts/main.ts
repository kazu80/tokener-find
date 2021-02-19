import {clickAccountButton} from "./wallet";

window.addEventListener("load",() => {
    const accountButton = document.getElementById("account-button")

    accountButton.addEventListener('click', clickAccountButton);

});