import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.css";

export const metadata = {
	title: "Billionaires Detail",
};

export default async function Detail({ params, searchParams }) {
	const personId = params.id;
	console.log(personId);

	const fetchRes = await fetch(
		`https://billions-api.nomadcoders.workers.dev/person/${personId}`
	);
	const result = await fetchRes.json();
	console.log(result);

	return (
		<div className={styles.container}>
			<Link href="/">
				<img alt={result.name} src={result.squareImage} />
			</Link>
			<br />
			<h3>{result.name}</h3>
			<ul>
				<li>NetWorth : {result.netWorth}</li>
				<li>Country : {result.country}</li>
				<li>Industry : {result.industries[0]}</li>
			</ul>
			<br />
			<h4>{result.bio.join(" ")}</h4>
			<br />
			<h3>Finalcial Assets</h3>
			<div className={styles.assets}>
				{result.financialAssets.map((asset) => (
					<ul key={asset.numberOfShares}>
						<li>Ticker : {asset.ticker}</li>
						<li>Shares : {asset.numberOfShares}</li>
						<li>Share Price : {asset.sharePrice}</li>
					</ul>
				))}
			</div>
		</div>
	);
}
