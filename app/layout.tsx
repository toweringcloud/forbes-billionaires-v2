export const metadata = {
	title: {
		template: "%s",
		default: "Billionaires",
	},
	description: "Generated by toweringcloud",
};

// These styles apply to every route in the application
import "./globals.css";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
