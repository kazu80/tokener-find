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
                <img class="rounded-circle me-3" src="${image}" alt="creator image" width="60" height="60" style="object-fit: contain">
                <p class="fs-6">${name}</p>
            </div>
            <a href="tokens.html?creator=${address}" class="col-2 d-flex align-items-center justify-content-center btn btn-primary">TOKEN</a>
        </article>
    `;

    return div.firstElementChild as HTMLElement;
};

export const getProfileElementStringForTokensPage = (image, name) => {
    return `
    <img class="mb-4 rounded-circle border border-3 border-dark" src="${image}" alt="creator image" width="168" height="168" style="object-fit: contain">
    <p class="mb-0 fs-5">${name}</p>
    `;
}

export const getTokenElement = (address, image, name) => {
    const div = document.createElement('div');

    div.innerHTML = `
            <article class="mt-4 mb-3 d-flex">
                <img class="me-3" src="${image}" alt="token image" width="128" height="96" style="object-fit: contain">
                <div class="d-flex flex-column justify-content-between">
                    <p class="fs-6">${name}</p>
                    <div class="d-flex">
                        <button type="button" class="me-3 btn btn-lg btn-primary" address="${address}" amount="1">1 DEV</button>
                        <button type="button" class="me-3 btn btn-lg btn-success" address="${address}" amount="1">5 DEV</button>
                        <button type="button" class="btn btn-lg btn-danger" address="${address}" amount="1">10 DEV</button>
                    </div>
                </div>
            </article>
    `;

    return div.firstElementChild as HTMLElement;
}