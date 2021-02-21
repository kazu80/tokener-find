import {allAuthorQuery, tokensQuery} from "./dataViewerQueries";

export const getAllCreatorInfo = async () => {
    const response = await fetch("https://api.devprtcl.com/v1/graphql", fetchOptions(allAuthorQuery()));
    const json = await response.json();

    return json.data.property_meta;
};

export const getTokens = async (creator) => {
    const response = await fetch("https://api.devprtcl.com/v1/graphql", fetchOptions(tokensQuery(creator)));
    const json = await response.json();

    return json.data.property_meta;
};

const fetchOptions = (query): RequestInit => {
    return  {
        method: "POST",
        headers: {
            "X-Requested-With": "xhr",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            query,
        }),
    };
};

