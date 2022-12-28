module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				primary: '#963779',
				brand: '#FF0000',
				light: '#F6F9FC',
			},
		},
	},
	variants: {
		extend: {
			divideColor: ['group-hover'],
		},
	},
	plugins: [],
};
