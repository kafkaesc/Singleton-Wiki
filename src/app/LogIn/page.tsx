import type { Metadata } from 'next';

import H1 from '@/elements/H1';
import LogInForm from '@/components/LogInForm';
import OneAndFourColumn from '@/components/OneAndFourColumn';
import PageColumn from '@/components/PageColumn';
import TopNav from '@/components/TopNav';

export const metadata: Metadata = {
	title: 'Log in | Solo Wiki | Built by Jared Hettinger',
	description: 'Log in to your Solo Wiki account',
};

export default function LogIn() {
	return (
		<>
			<TopNav className="mb-2" />
			<main>
				<PageColumn>
					<H1>Log in to Solo Wiki</H1>
					<OneAndFourColumn>
						<LogInForm />
					</OneAndFourColumn>
				</PageColumn>
			</main>
		</>
	);
}
