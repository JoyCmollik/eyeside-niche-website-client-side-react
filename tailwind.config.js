module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				primary: '#ECBA78',
				brand: '#FF0000',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
