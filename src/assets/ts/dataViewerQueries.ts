export type PropertyMeta = {
    author: string,
    property: string,
    name?: string,
    symbol?: string
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

export function propertiesAuthor (author) {
    return `
        query Properties {
            property_meta(where: {author: {_eq: "${author}"}}) {
                property
                author
                name
                symbol
            }
        }
        `;
}