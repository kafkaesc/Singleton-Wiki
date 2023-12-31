import type { Metadata } from 'next';

import Button from '@/elements/Button';
import H1 from '@/elements/H1';
import H2 from '@/elements/H2';
import P from '@/elements/P';
import PageColumn from '@/components/PageColumn';
import TopNav from '@/components/TopNav';
import WelcomeBox from '@/components/WelcomeBox';
import WikiBox from '@/components/WikiBox';

export const metadata: Metadata = {
	title: 'Test | Solo Wiki | Built by Jared Hettinger',
	description: 'Test page for Solo Wiki',
};

export default function Test() {
	return (
		<>
			<TopNav />
			<PageColumn>
				<WelcomeBox />
				<H1>Test Page</H1>
				<P>the test page</P>
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
				<WikiBox heading="Default Wiki Box" className="my-1">
					<p>Some time ago, nevermind how long</p>
				</WikiBox>
				<WikiBox boxStyle="gray" heading="Gray Wiki Box" className="my-1">
					<p>Some time ago, nevermind how long</p>
				</WikiBox>
				<WikiBox boxStyle="blue" heading="Blue Wiki Box" className="my-1">
					<p>Some time ago, nevermind how long</p>
				</WikiBox>
				<WikiBox boxStyle="green" heading="Green Wiki Box" className="my-1">
					<p>Some time ago, nevermind how long</p>
				</WikiBox>
			</PageColumn>
		</>
	);
}
