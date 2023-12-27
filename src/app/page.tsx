import Button from '@/elements/Button';
import H1 from '@/elements/H1';
import H2 from '@/elements/H2';
import Link from '@/elements/Link';
import P from '@/elements/P';

export default function Home() {
	return (
		<main>
			<H1 className="text-2xl">Home Page</H1>
			<P>This is the home page</P>
			<Link className="mx-1" href="/About">
				About
			</Link>
			<Link className="mx-1" href="/Test">
				Test
			</Link>
			<H2>Button tests</H2>
			<Button>Default</Button>
			<Button buttonStyle="primary">Primary</Button>
			<Button buttonStyle="secondary">Secondary</Button>
			<Button buttonStyle="text">Text</Button>
			<H2>Disabled Buttons</H2>
			<Button disabled>Default</Button>
			<Button buttonStyle="primary" disabled={true}>
				Primary
			</Button>
			<Button buttonStyle="secondary" disabled={true}>
				Secondary
			</Button>
			<Button buttonStyle="text" disabled={true}>
				Text
			</Button>
		</main>
	);
}
