import A from '@/elements/A';
import H2 from '@/elements/H2';
import P from '@/elements/P';

export default function WelcomeBox() {
	return (
		<div className="p-2 text-center border bg-wi-gray-light border-wi-gray-dark">
			<H2 className="mb-1">Welcome to Solo Wiki,</H2>
			<P>
				the{' '}
				<A
					href="https://en.wikipedia.org/wiki/Free_content"
					rel="noreferrer"
					target="_blank"
				>
					free
				</A>{' '}
				wiki page that{' '}
				<A
					href="https://en.wikipedia.org/wiki/Wiki"
					rel="noreferrer"
					target="_blank"
				>
					anyone can edit
				</A>
			</P>
			<P>
				<A
					href="https://en.wikipedia.org/wiki/Singleton_(mathematics)"
					rel="noreferrer"
					target="_blank"
				>
					{`{1}`}
				</A>{' '}
				page in{' '}
				<A
					href="https://en.wikipedia.org/wiki/English_language"
					rel="noreferrer"
					target="_blank"
				>
					English
				</A>
			</P>
		</div>
	);
}
