/**
 *
 * @return {Promise<Object>}
 * @param {string[]} values
 */
function getStorageValues(values = null) {
    return new Promise((resolve, reject) => {
        chrome.storage.sync.get(values, (result) => {
            if (chrome.runtime.lastError) {
                return reject(chrome.runtime.lastError);
            }
            resolve(result);
        });
    });
}
