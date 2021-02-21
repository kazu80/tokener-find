import {
    getBorderElement,
    getProfileElement,
    getProfileElementStringForTokensPage,
    getTokenElement
} from "./htmlElementTemplate";
import {getAllCreatorInfo, getTokens} from "./dataViewer";
import {getCreatorInfo, getPropertiesInfo} from "./devForApps";

export const renderCreators = async (creatorsHTMLElement: HTMLDivElement) => {
    for ( const info of await getAllCreatorInfo()) {
        try {
            const creatorInfoElement = await getCreatorInfoTemplate(info.author);

            if (!creatorInfoElement) {
                continue
            }

            creatorsHTMLElement.appendChild(creatorInfoElement);

            const borderElement = getBorderElement();

            creatorsHTMLElement.appendChild(borderElement);
        } catch (e) {
            console.error(e);
        }
    }
}

export const renderCreator = async (creatorHTMLElement: HTMLDivElement, creatorAddress) => {
    const creatorInfo = await getCreatorInfo(creatorAddress);

    const profileElementString = getProfileElementStringForTokensPage(
        creatorInfo.portrait.url,
        creatorInfo.name
    );

    creatorHTMLElement.innerHTML = profileElementString;
}

export const renderCreatorTokens = async (tokensHTMLElement: HTMLElement, creatorAddress) => {
    const tokens = await getTokens(creatorAddress);

    for ( const token of tokens) {
        const tokenInfo = await getPropertiesInfo(token.property)

        if (!tokenInfo) {
            continue
        }

        const image = tokenInfo.cover_image ? tokenInfo.cover_image.url : "https://fakeimg.pl/128x96/?text=no image"

        const tokenElement = getTokenElement(image, token.name)

        tokensHTMLElement.appendChild(tokenElement)

        const borderElement = getBorderElement();

        tokensHTMLElement.appendChild(borderElement)
    }
}

const getCreatorInfoTemplate = async (address) : Promise<HTMLElement> => {
    const creatorInfo = await getCreatorInfo(address);

    if (!creatorInfo) {
        return
    }

    return getProfileElement(
        address,
        creatorInfo.portrait.url,
        creatorInfo.name
    );
}

