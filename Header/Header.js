//Header.js
const appAuthor = "Joel Jolly"
const authorSocialHandle = "@Withinjoel"

document.writeln(`
<head>
	<meta http-equiv="Content-Security-Policy" content="default-src 'self' * data:;
  	script-src 'self' 'unsafe-inline' 'unsafe-eval' *;
  	style-src 'self' 'unsafe-inline' *;
  	img-src 'self' blob: data: *;
  	media-src 'self' blob: *;
  	worker-src 'self' blob:;">
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<meta content="IE=edge,chrome=1" http-equiv="X-UA-Compatible">
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<meta name="description" content="${appdescription}" />
	<meta name="keywords" content="${appkeywords}" />
	<meta name="author" content="${appAuthor}" />
	<link rel="icon" href="${appLogo}">
	<link rel="stylesheet" href="Styles/Styles.css">
	<link rel="shortcut icon" href="${appLogo}" />
	<meta name="HandheldFriendly" content="true">
	<meta name="distribution" content="global">
	<meta name="rating" content="general">
	<meta name="twitter:title" content="${appname}">
	<meta name="twitter:description" content="${appdescription}">
	<meta name="twitter:image" content="${applogo}">
	<meta name="twitter:site" content="${authorSocialHandle}">
	<meta name="language" content="English">
	<title>${appname}</title>
	<link rel="manifest" href="manifest.json">
	<meta property="og:title" content="${appname}" />
	<meta property="og:description" content="${appdescription}" />
	<meta property="og:image" content="${applogo}" />
	<meta property="og:type" content="website" />
</head>
`);