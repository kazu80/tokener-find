import {getBorderElement, getProfileElement, getProfileElementStringForTokensPage} from "./htmlElementTemplate";
import {getAllCreatorInfo} from "./dataViewer";
import {getCreatorInfo} from "./devForApps";

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

