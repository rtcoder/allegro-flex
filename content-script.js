// Przykładowy skrypt modyfikujący interfejs Allegro
document.addEventListener('DOMContentLoaded', () => {
    const sellerInfoHeader = document.querySelector('[data-box-name="showoffer.sellerInfoHeader"]');
    const appContainer = sellerInfoHeader?.querySelector('[data-role="app-container"]');
    const textDiv = appContainer.querySelector('div')
        .querySelector('div')
        .querySelector('div')
        .querySelector('div');

    if (!appContainer) {
        return;
    }

    const linkSellerProfile = document.querySelector('[data-analytics-interaction-label="allSellersItemsLink"]');
    const linkUrl = linkSellerProfile.getAttribute('href');


    const text = textDiv.innerText;
    const newElement = document.createElement('a');
    newElement.textContent = text;
    newElement.href = linkUrl;
    newElement.style.color = '#ff5a00';
    const textDivNodes = [...textDiv.childNodes];
    textDivNodes[textDivNodes.length - 1].remove();
    textDiv.appendChild(newElement);

});
