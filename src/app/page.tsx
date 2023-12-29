import H1 from '@/elements/H1';
import Link from '@/elements/Link';
import P from '@/elements/P';
import PageColumn from '@/components/PageColumn';

export default function Home() {
	return (
		<main>
			<PageColumn>
				<h1 className="text-8xl">{`{1}`}</h1>
				<H1 className="text-2xl">The Solo Wiki</H1>
				<P>This is the home page</P>
				<Link className="mx-1" href="/About">
					About
				</Link>
				<Link className="mx-1" href="/Test">
					Test
				</Link>
			</PageColumn>
		</main>
	);
}
