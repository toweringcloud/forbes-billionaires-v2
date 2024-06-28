import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.css";

export const metadata = {
	title: "Billionaires Home",
};

export default async function Home({ params, searchParams }) {
	const fetchRes = await fetch(
		"https://billions-api.nomadcoders.workers.dev"
	);
	const results = await fetchRes.json();
	console.log(results.length);

	return (
		<div className={styles.container}>
			{results.map((result) => {
				if (result.squareImage)
					return (
						<div className={styles.billionaire} key={result.id}>
							<Link href={`/person/${result.id}`}>
								<img
									alt={result.name}
									src={result.squareImage}
								/>
							</Link>
							<h4>{result.name}</h4>
							<h5>
								{result.netWorth} / {result.industries[0]}
							</h5>
						</div>
					);
			})}
		</div>
	);
}
