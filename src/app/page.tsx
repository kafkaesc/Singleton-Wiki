import Link from '@/elements/Link';
import P from '@/elements/P';
import PageColumn from '@/components/PageColumn';
import SisterWikis from '@/components/SisterWikis';
import TopNav from '@/components/TopNav';
import WelcomeBox from '@/components/WelcomeBox';

export default function Home() {
	return (
		<>
			<TopNav className="mb-2" />
			<main>
				<PageColumn>
					<WelcomeBox />
					<div className="text-center">
						<P>This is the home page</P>
						<Link className="mx-1" href="/About">
							About
						</Link>
						<Link className="mx-1" href="/Test">
							Test
						</Link>
					</div>
					<SisterWikis />
				</PageColumn>
			</main>
		</>
	);
}
