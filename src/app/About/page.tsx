import type { Metadata } from 'next';

import H1 from '@/elements/H1';
import P from '@/elements/P';
import PageColumn from '@/components/PageColumn';

export const metadata: Metadata = {
	title: 'About | Solo Wiki | Built by Jared Hettinger',
	description: 'About Solo Wiki',
};

export default function About() {
	return (
		<PageColumn>
			<H1>About Solo Wiki</H1>
			<P>Built by Jared Hettinger</P>
		</PageColumn>
	);
}
