// Head
createScript("https://cdn.jsdelivr.net/gh/withinjoel/WebSmith@main/Head/Head.js");

// Loader
function createScript(src) {
    const script = document.createElement('script');
    script.src = src;
    document.head.appendChild(script);
}
