// Funkcja zapisująca ustawienia
function saveOptions() {
    const overwriteSellerNameWithLink = document.getElementById('overwriteSellerNameWithLink').checked;
    const sellerLinkColor = document.getElementById('sellerLinkColor').value;
    const openSellerLinkInNewTab = document.getElementById('openSellerLinkInNewTab').checked;

    chrome.storage.sync.set({
        overwriteSellerNameWithLink: overwriteSellerNameWithLink,
        sellerLinkColor: sellerLinkColor,
        openSellerLinkInNewTab: openSellerLinkInNewTab,
    }, () => {
        const status = document.getElementById('status');
        status.textContent = 'Ustawienia zapisane!';
        setTimeout(() => {
            status.textContent = '';
        }, 2000);
    });
}

function restoreOptions() {
    chrome.storage.sync.get({
        overwriteSellerNameWithLink: false,
        sellerLinkColor: '#ff5a00',
        openSellerLinkInNewTab: false,
    }, (items) => {
        document.getElementById('overwriteSellerNameWithLink').checked = items.overwriteSellerNameWithLink;
        document.getElementById('sellerLinkColor').value = items.sellerLinkColor;
        document.getElementById('openSellerLinkInNewTab').checked = items.openSellerLinkInNewTab;
    });
}

document.getElementById('optionsForm').addEventListener('submit', (event) => {
    event.preventDefault();  // Zatrzymaj domyślne działanie formularza
    saveOptions();
});

document.addEventListener('DOMContentLoaded', restoreOptions);
