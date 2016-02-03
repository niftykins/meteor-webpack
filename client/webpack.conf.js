const babelSettings = {
	presets: ['react', 'es2015', 'stage-0'],
	plugins: ['transform-decorators-legacy']
};

if (process.env.NODE_ENV !== 'production') {
	babelSettings.presets.push('react-hmre');
}

module.exports = {
	entry: './main',
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				loader: 'babel',
				query: babelSettings,
				exclude: /(node_modules|\.meteor)/
			},
			{
				test: /\.styl$/,
				loader: 'style!css!stylus'
			}
		]
	},
	stylus: {
		use: [require('nib')()],
		import: ['~nib/lib/nib/index.styl']
	}
};
