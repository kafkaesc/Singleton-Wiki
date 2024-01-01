import type { Metadata } from 'next';

import H1 from '@/elements/H1';
import OneToFourColumn from '@/components/OneToFourColumn';
import PageColumn from '@/components/PageColumn';
import TopNav from '@/components/TopNav';

export const metadata: Metadata = {
	title: 'Create an account | Solo Wiki | Built by Jared Hettinger',
	description: 'Create an account for Solo Wiki',
};

export default function LogIn() {
	return (
		<>
			<TopNav className="mb-2" />
			<main>
				<PageColumn>
					<H1>Create Account</H1>
					<OneToFourColumn>
						<p>coming eventually</p>
					</OneToFourColumn>
				</PageColumn>
			</main>
		</>
	);
}
