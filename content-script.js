const SETTINGS = {};

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        init();
    });
} else {
    init();
}

function init() {
    getStorageValues(() => {
        overwriteSellerNameWithLink();
    });
}

function getStorageValues(callback) {
    chrome.storage.sync.get(null, (result) => {
        if (chrome.runtime.lastError) {
            return reject(chrome.runtime.lastError);
        }
        Object.assign(SETTINGS, result);

        callback();
    });
}

function overwriteSellerNameWithLink() {
    if (!SETTINGS.overwriteSellerNameWithLink) {
        return;
    }


    const textDiv = getSellerInfoTextSection();
    const sellerNameDiv = getSellerNameDiv();
    const textDivNodes = [...textDiv.childNodes];
    const last = textDivNodes.at(-1);
    last.remove();

    const sellerName = getSellerName();
    const sellerUrl = getSellerUrl();
    textDiv.appendChild(makeSellerLink(sellerName, sellerUrl));
    sellerNameDiv.innerHTML = '';
    sellerNameDiv.appendChild(makeSellerLink(sellerName, sellerUrl));
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

function makeSellerLink(text, url) {
    const newElement = document.createElement('a');
    newElement.textContent = text;
    newElement.href = url;
    newElement.style.color = SETTINGS.sellerLinkColor;
    newElement.style.textDecoration = 'none';
    if (SETTINGS.openSellerLinkInNewTab) {
        newElement.target = '_blank';
    }
    return newElement;
}
