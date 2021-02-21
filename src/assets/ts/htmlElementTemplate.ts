export const getBorderElement = (): HTMLElement => {
    const div = document.createElement('div');

    div.innerHTML = `<div class="border-top border-dark"></div>`;

    return div.firstElementChild as HTMLElement;
}

export const getProfileElement = (address, image, name): HTMLElement => {
    const div = document.createElement('div');

    div.innerHTML = `
        <article class="row mt-4 mb-3">
            <div class="col-10 d-flex align-items-center">
                <img class="rounded-circle me-3" src="${image}" alt="creator image" width="60" height="60">
                <p class="fs-6">${name}</p>
            </div>
            <a href="/tokens.html?creator=${address}" class="col-2 d-flex align-items-center justify-content-center btn btn-primary">TOKEN</a>
        </article>
    `;

    return div.firstElementChild as HTMLElement;
};

export const getProfileElementStringForTokensPage = (image, name) => {
    return `
    <img class="mb-4 rounded-circle border border-3 border-dark" src="${image}" alt="creator image" width="168" height="168">
    <p class="mb-0 fs-5">${name}</p>
    `;
}