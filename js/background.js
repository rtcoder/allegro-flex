function handleUpdate(details) {
    if (details.reason === 'update') {
        const currentVersion = chrome.runtime.getManifest().version;
        chrome.storage.sync.get('previousVersion', (result) => {
            const previousVersion = result.previousVersion;

            if (previousVersion && previousVersion !== currentVersion) {
                chrome.runtime.openOptionsPage();
            }

            chrome.storage.sync.set({previousVersion: currentVersion});
        });
    }
}
chrome.runtime.onInstalled.addListener(details => {
    handleUpdate(details);
});
chrome.action.onClicked.addListener(() => {
    chrome.runtime.openOptionsPage();
});
