// Loader
function createScript(src, callback) {
    const script = document.createElement('script');
    script.src = src;
    if (callback) script.onload = callback;
    document.head.appendChild(script);
}

// Step 1: Load Head.js
createScript("https://cdn.jsdelivr.net/gh/withinjoel/WebSmith@main/Head/Head.js", () => {
    // Step 2: After Head.js, load user's script
    const currentScript = document.currentScript;
    const userScriptPath = currentScript.getAttribute("data-websmith");
    if (userScriptPath) {
        createScript(userScriptPath);
    }
});
