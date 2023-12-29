import type { Metadata } from 'next';

import H1 from '@/elements/H1';
import P from '@/elements/P';
import PageColumn from '@/components/PageColumn';

export const metadata: Metadata = {
	title: 'Test | Solo Wiki | Built by Jared Hettinger',
	description: 'Test page for Solo Wiki',
};

export default function Test() {
	return (
		<PageColumn>
			<H1>Test Page</H1>
			<P>the test page</P>
		</PageColumn>
	);
}
