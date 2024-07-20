chrome.tabs.onUpdated.addListener(toWatchFormat);
// chrome.tabs.onHighlighted.addListener(toWatchFormat);


async function toWatchFormat(tabid) {
    try {
        const currTab = await chrome.tabs.get(tabid);
        if (currTab.url.indexOf("outube.com/shorts/") != -1) {
            var newURL = currTab.url.replace("/shorts/", "/watch?v=");
            await chrome.tabs.update(tabid, {url: newURL});
            console.log("New URL:" + newURL);
        }
    } catch {
        console.log("oops");
    }
}