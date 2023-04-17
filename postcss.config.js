module.exports = {
	plugins: [
		require('postcss-import'),     // Used to import normalize.css inline
		// require('postcss-preset-env'), // Polyfills for modern css (increases dist from 19.6Kb to 29.6Kb)
		require('cssnano'),            // Minify CSS
	]
};