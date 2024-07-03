// https://www.json.org/json-en.html
Prism.languages.console = {
	'newline': /⏎/,

	'cursor': /\|/,

    'system': {
        pattern: /((?:^|\n\s*)\$\s).*(?:$|\n)/,
        lookbehind: true
    },

    'error': {
        pattern: /((?:^|\n\s*)\!\s).*(?:$|\n)/,
        lookbehind: true
    },

    'input': {
        pattern: /((?:[^\n].*)\:|\?\s).*(?:$|\n)/,
        lookbehind: true
    },

    'hide': {
		pattern: /(^|\n\s*)[\$\!]\s+/,
        lookbehind: true
	},

};

Prism.languages.webmanifest = Prism.languages.console;