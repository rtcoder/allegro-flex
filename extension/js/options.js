const defaultSettings = {
    overwriteSellerNameWithLink: false,
    sellerLinkColor: '#ff5a00',
    openSellerLinkInNewTab: false,
    wrapThumbnails: false,
};

function getValue(id) {
    const element = document.getElementById(id);
    if (!element) {
        return null;
    }
    if (element.getAttribute('type') === 'checkbox') {
        return element.checked;
    }
    return element.value;
}

function setValue(id, value) {
    const element = document.getElementById(id);
    if (!element) {
        return;
    }
    if (element.getAttribute('type') === 'checkbox') {
        element.checked = value;
        return;
    }
    element.value = value;
}

function composeDataToSave() {
    const dataToSave = {};
    Object.keys(defaultSettings).forEach(key => {
        dataToSave[key] = getValue(key);
    });

    return dataToSave;
}

function fillFormWithData(data) {
    Object.keys(data).forEach(key => {
        setValue(key, data[key]);
    });
}

function saveOptions() {
    chrome.storage.sync.set(composeDataToSave(), () => {
        const status = document.getElementById('status');
        status.style.display = 'block';
        setTimeout(() => {
            status.style.removeProperty('display')
        }, 2000);
    });
}

function restoreOptions() {
    chrome.storage.sync.get(defaultSettings, fillFormWithData);
}

document.getElementById('optionsForm').addEventListener('submit', (event) => {
    event.preventDefault();
    saveOptions();
});

document.addEventListener('DOMContentLoaded', restoreOptions);

document.getElementById('optionsForm').addEventListener('click', e => {
    const {target} = e;
    if (!target.matches('.form-group-section h3')) {
        return;
    }

    target.parentElement.classList.toggle('open');
});

document.querySelectorAll('[data-i18n]').forEach(element => {
    const messageKey = element.getAttribute('data-i18n');
    element.textContent = chrome.i18n.getMessage(messageKey);
});
