chrome.runtime.onInstalled.addListener(() => {
    console.log('Allegro Flex został zainstalowany!');
});
chrome.action.onClicked.addListener(() => {
    chrome.runtime.openOptionsPage();
});
