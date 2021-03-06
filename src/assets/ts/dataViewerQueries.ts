export function tokensQuery (address) {
    return `
        query Properties {
            property_meta(where: {author: {_eq: "${address}"}}) {
                property
                author
                name
            }
        }
        `;
}

export function allAuthorQuery () {
    return `
        query Properties {
            property_meta(distinct_on: author) {
                author
            }
        }
        `;
}