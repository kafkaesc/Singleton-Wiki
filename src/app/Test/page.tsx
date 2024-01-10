import type { Metadata } from 'next';

import Button from '@/elements/Button';
import H1 from '@/elements/H1';
import H2 from '@/elements/H2';
import Input from '@/elements/Input';
import Link from '@/elements/Link';
import P from '@/elements/P';
import OneToFourColumn from '@/components/OneToFourColumn';
import PageColumn from '@/components/PageColumn';
import SisterWikis from '@/components/SisterWikis';
import TopNav from '@/components/TopNav';
import WikiBox from '@/components/WikiBox';

export const metadata: Metadata = {
	title: 'Test | Solo Wiki | Built by Jared Hettinger',
	description: 'Test page for Solo Wiki',
};

export default function Test() {
	return (
		<>
			<TopNav className="mb-2" />
			<main>
				<PageColumn>
					<H1>Test Page</H1>
					<P>
						This is the test page. You can also go <Link href="/">Home</Link> or
						to the <Link href="/About">About</Link> page.
					</P>
					<H2>Input Styles</H2>
					<div className="mb-2">
						<Input
							label="Default Text Input"
							name="test-text"
							placeholder="Enter text here..."
							type="text"
						/>
						<Input
							disabled
							label="Disabled Text Input"
							name="test-disabled-text"
							placeholder="Disabled..."
							type="text"
						/>
						<Input
							className="bg-wi-blue"
							label="Classed Text Input"
							name="test-text-classed"
							placeholder="Enter text here..."
							type="text"
						/>
					</div>
					<div className="mb-2">
						<H2>Button V2 tests</H2>
						<P>Disabled V2 Buttons</P>
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
						<P>Styled V2 Buttons</P>
						<Button className="mx-2">Default</Button>
						<Button buttonStyle="primary" className="mx-2">
							Primary
						</Button>
						<Button buttonStyle="secondary" className="mx-2">
							Secondary
						</Button>
						<Button buttonStyle="text" className="mx-2">
							Text
						</Button>
					</div>
					<div className="mb-2">
						<H2>Wiki Boxes</H2>
						<WikiBox heading="Default Wiki Box" className="my-1">
							<p>Some time ago, never mind how long</p>
						</WikiBox>
						<WikiBox boxStyle="gray" heading="Gray Wiki Box" className="my-1">
							<p>Some time ago, never mind how long</p>
						</WikiBox>
						<WikiBox boxStyle="blue" heading="Blue Wiki Box" className="my-1">
							<p>Some time ago, never mind how long</p>
						</WikiBox>
						<WikiBox boxStyle="green" heading="Green Wiki Box" className="my-1">
							<p>Some time ago, never mind how long</p>
						</WikiBox>
					</div>
					<div className="mb-2">
						<H2>Layout Columns</H2>
						<OneToFourColumn className="p-1">
							<p>
								Steamboat Willie is a 1928 American animated short film directed
								by Walt Disney and Ub Iwerks.
							</p>
						</OneToFourColumn>
						<OneToFourColumn className="p-1">
							<p>
								It was produced in black and white by Walt Disney Studios and
								was released by Pat Powers, under the name of Celebrity
								Productions.
							</p>
						</OneToFourColumn>
						<OneToFourColumn className="p-1">
							<p>
								The cartoon is considered the debut of both Mickey and Minnie
								Mouse, although both characters appeared several months earlier
								in a test screening of Plane Crazy.
							</p>
						</OneToFourColumn>
						<OneToFourColumn className="p-1">
							<p>
								Steamboat Willie was the third of {`Mickey's`} films to be
								produced, but it was the first to be distributed
							</p>
						</OneToFourColumn>
						<OneToFourColumn className="p-1">
							<p>
								Steamboat Willie is especially notable for being one of the
								first cartoons with synchronized sound, as well as one of the
								first cartoons to feature a fully post-produced soundtrack
							</p>
						</OneToFourColumn>
						<OneToFourColumn className="p-1">
							<p>
								Disney believed that synchronized sound was the future of film.
								Steamboat Willie became the most popular cartoon of its day.
							</p>
						</OneToFourColumn>
						<OneToFourColumn className="p-1">
							<p>
								Music for Steamboat Willie was arranged by Wilfred Jackson and
								Bert Lewis, and it included the songs {`"Steamboat Bill"`},
							</p>
						</OneToFourColumn>
						<OneToFourColumn className="p-1">
							<p>
								The title of the film may be a parody of the Buster Keaton film
								Steamboat Bill, Jr. (1928), itself a reference to the song by
								Collins.
							</p>
						</OneToFourColumn>
					</div>
					<SisterWikis />
				</PageColumn>
			</main>
		</>
	);
}
