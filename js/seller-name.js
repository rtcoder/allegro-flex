 async function overwriteSellerNameWithLink() {
    const settings = await getStorageValues(['overwriteSellerNameWithLink']);

    if (!settings.overwriteSellerNameWithLink) {
        return;
    }


    const textDiv = getSellerInfoTextSection();
    const sellerNameDiv = getSellerNameDiv();
    const textDivNodes = [...textDiv.childNodes];
    const last = textDivNodes.at(-1);
    last.remove();

    const sellerName = getSellerName();
    const sellerUrl = getSellerUrl();
    textDiv.appendChild(await makeSellerLink(sellerName, sellerUrl));
    sellerNameDiv.innerHTML = '';
    sellerNameDiv.appendChild(await makeSellerLink(sellerName, sellerUrl));
}

function getSellerInfoTextSection() {
    const sellerInfoHeader = document.querySelector('[data-box-name="showoffer.sellerInfoHeader"]');
    const appContainer = sellerInfoHeader?.querySelector('[data-role="app-container"]');
    const textDiv = appContainer.querySelector('div')
        .querySelector('div')
        .querySelector('div')
        .querySelector('div');

    return textDiv;
}

function getSellerNameDiv() {
    return document.querySelector('[data-analytics-view-label="nonFulfilment"]')
        ?.querySelector('div')
        ?.querySelector('div')
        ?.querySelector('div');
}

function getSellerName() {
    return getSellerNameDiv()?.innerText || '';
}

function getSellerUrl() {
    const linkSellerProfile = document.querySelector('[data-analytics-interaction-label="allSellersItemsLink"]');
    return linkSellerProfile.getAttribute('href');
}

async function makeSellerLink(text, url) {
    const settings = await getStorageValues(['sellerLinkColor', 'openSellerLinkInNewTab']);
    const newElement = document.createElement('a');
    newElement.textContent = text;
    newElement.href = url;
    newElement.style.color = settings.sellerLinkColor;
    newElement.style.textDecoration = 'none';
    if (settings.openSellerLinkInNewTab) {
        newElement.target = '_blank';
    }
    return newElement;
}
