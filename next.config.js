const nextConfig = {
	reactStrictMode: false,
	output: "standalone",
	productionBrowserSourceMaps: false,
	experimental: {
		scrollRestoration: true,
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "specials-images.forbesimg.com",
				port: "443",
				pathname: "/imageserve/**",
			},
		],
	},
	webpack(config) {
		const imageLoaderRule = config.module.rules.find(
			(rule) => rule.loader === "next-image-loader"
		);
		config.module.rules.unshift({
			test: /\.svg$/,
			issuer: imageLoaderRule.issuer,
			dependency: imageLoaderRule.dependency,
			resourceQuery: imageLoaderRule.resourceQuery,
			use: [
				{
					loader: "@svgr/webpack",
					options: {
						icon: true,
					},
				},
				{
					loader: "next-image-loader",
					options: imageLoaderRule.options,
				},
			],
		});
		return config;
	},
};

module.exports = nextConfig;
