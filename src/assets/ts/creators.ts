import {getBorderElement, getProfileElement} from "./htmlElementTemplate";
import {getAllCreatorInfo} from "./dataViewer";
import {getCreatorInfo} from "./devForApps";

export const renderCreators = async (creators: HTMLDivElement) => {
    for ( const info of await getAllCreatorInfo()) {
        try {
            const creatorInfoElement = await getCreatorInfoTemplate(info.author);

            if (!creatorInfoElement) {
                continue
            }

            creators.appendChild(creatorInfoElement);

            const borderElement = getBorderElement();

            creators.appendChild(borderElement);
        } catch (e) {
            console.error(e);
        }
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

