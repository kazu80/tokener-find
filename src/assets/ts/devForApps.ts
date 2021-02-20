export const getCreatorInfo = async (address) => {
    const query_params = new URLSearchParams({
        address: address,
    });

    const response = await fetch("https://dev-for-apps.azureedge.net/accounts?" + query_params, {
        method: "GET"
    });

    const info = await response.json();

    if (!Array.isArray(info)) {
        throw new Error('not array');
    }

    if (!info[0] || !info[0].hasOwnProperty('portrait') || !info[0].portrait) {
        return
    }

    return info[0];
}