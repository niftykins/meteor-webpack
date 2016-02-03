const babelSettings = {
	presets: ['react', 'es2015', 'stage-0'],
	plugins: ['transform-decorators-legacy']
};

module.exports = {
	entry: './main',
	target: 'node',
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				loader: 'babel',
				query: babelSettings,
				exclude: /(node_modules|\.meteor)/
			},
			{
				test: /\.json?$/,
				loader: 'json'
			}
		]
	}
};
