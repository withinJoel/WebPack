function Head(config = {}) {
    const { appName = "Joel's App",
	        appDescription = "Joel's App Description",
	        appKeywords = "Joel Jolly",
	        appAuthor = "Joel Jolly", // Default fallback
		    authorSocialHandle = "@Withinjoel", // Default fallback
	        appLogo,
	        appStyle,
	        appScript,
	        appManifest
    } = config;

    // Helper function to create meta tags
    function createMeta(attributes) {
        const meta = document.createElement('meta');
        Object.entries(attributes).forEach(([key, value]) => {
            meta.setAttribute(key, value);
        });
        document.head.appendChild(meta);
    }

    // Helper function to create link tags
    function createLink(attributes) {
        const link = document.createElement('link');
        Object.entries(attributes).forEach(([key, value]) => {
            link.setAttribute(key, value);
        });
        document.head.appendChild(link);
    }

    // Helper function to create script tags
    function createScript(src) {
        const script = document.createElement('script');
        script.src = src;
        document.head.appendChild(script);
    }

    // Set CSP and basic meta tags
    createMeta({
        'http-equiv': 'Content-Security-Policy',
        'content': `default-src 'self' * data:;
            script-src 'self' 'unsafe-inline' 'unsafe-eval' *;
            style-src 'self' 'unsafe-inline' *;
            img-src 'self' blob: data: *;
            media-src 'self' blob: *;
            worker-src 'self' blob:;`
    });

    createMeta({ charset: 'UTF-8' });
    createMeta({ 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' });
    createMeta({ content: 'IE=edge,chrome=1', 'http-equiv': 'X-UA-Compatible' });
    createMeta({ name: 'viewport', content: 'width=device-width, initial-scale=1' });
    createMeta({ name: 'HandheldFriendly', content: 'true' });
    createMeta({ name: 'distribution', content: 'global' });
    createMeta({ name: 'rating', content: 'general' });
    createMeta({ property: 'og:type', content: 'website' });
    createMeta({ name: 'language', content: 'English' });

    // Conditionally add app-specific meta tags
    if (appName) {
        document.title = appName;
        createMeta({ name: 'twitter:title', content: appName });
        createMeta({ property: 'og:title', content: appName });
    }

    if (appDescription) {
        createMeta({ name: 'description', content: appDescription });
        createMeta({ property: 'og:description', content: appDescription });
        createMeta({ name: 'twitter:description', content: appDescription });
    }

    if (appKeywords) {
        createMeta({ name: 'keywords', content: appKeywords });
    }

    if (appAuthor) {
        createMeta({ name: 'author', content: appAuthor });
    }

    if (appLogo) {
        createLink({ rel: 'icon', href: appLogo });
        createLink({ rel: 'shortcut icon', href: appLogo });
        createMeta({ property: 'og:image', content: appLogo });
        createMeta({ name: 'twitter:image', content: appLogo });
    }

    if (appStyle) {
        createLink({ rel: 'stylesheet', href: appStyle });
    }

    if (appScript) {
        createScript(appScript);
    }

    if (appManifest) {
        createLink({ rel: 'manifest', href: appManifest });
    }

    if (authorSocialHandle) {
        createMeta({ name: 'twitter:site', content: authorSocialHandle });
    }
}
