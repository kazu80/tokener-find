export function tokensQuery (address) {
    return `
        query Properties {
            property_meta(where: {author: {_eq: "${address}"}}) {
                property
                author
                name
                symbol
            }
        }
        `;
}

export function allAuthorQuery () {
    return `
        query Properties {
            property_meta(distinct_on: author) {
                property
                author
            }
        }
        `;
}