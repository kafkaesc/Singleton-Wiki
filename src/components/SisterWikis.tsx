import Image from 'next/image';
import A from '@/elements/A';
import P from '@/elements/P';
import OneToThreeColumn from './OneToThreeColumn';
import WikiBox from '@/components/WikiBox';

import CommonsLogo from 'public/assets/images/commons.svg';
import TvTropesLogo from 'public/assets/images/tvtropes.png';
import WikipediaLogo from 'public/assets/images/wikipedia.png';
import WikiquoteLogo from 'public/assets/images/wikiquote.svg';
import WikiwikiwebLogo from 'public/assets/images/wikiwikiweb.gif';
import WookiepediaLogo from 'public/assets/images/wookiepedia.png';

export default function SisterWikis() {
	return (
		<WikiBox heading="Sister Wikis">
			<P className="p-1">
				Solo Wiki is collaboratively written by volunteer editors. Here are some
				other wikis that are sister projects in the spirit of community
				collaboration:
			</P>
			<OneToThreeColumn className="p-1">
				<div className="inline-block align-top">
					<Image
						alt="The TV Tropes Logo"
						className="object-scale-down max-h-12 max-w-16"
						src={TvTropesLogo}
					/>
				</div>
				<div className="inline-block align-top">
					<A href="https://tvtropes.org" rel="noreferrer" target="_blank">
						TV Tropes
					</A>
					<P>Archetypal pop culture wiki</P>
				</div>
			</OneToThreeColumn>
			<OneToThreeColumn className="p-1">
				<div className="inline-block align-top">
					<Image
						alt="The Wikipedia Logo"
						className="object-scale-down max-h-12 max-w-16"
						src={WikipediaLogo}
					/>
				</div>
				<div className="inline-block align-top">
					<A href="https://wikipedia.org" rel="noreferrer" target="_blank">
						Wikipedia
					</A>
					<P>The free encyclopedia</P>
				</div>
			</OneToThreeColumn>
			<OneToThreeColumn className="p-1">
				<div className="inline-block align-top">
					<A href="https://www.wikiquote.org" rel="noreferrer" target="_blank">
						<Image
							alt="The Wikiquote Logo"
							className="object-scale-down max-h-12 max-w-16"
							src={WikiquoteLogo}
						/>
					</A>
				</div>
				<div className="inline-block align-top">
					<A href="https://www.wikiquote.org" rel="noreferrer" target="_blank">
						Wikiquote
					</A>
					<P>Collection of quotations</P>
				</div>
			</OneToThreeColumn>
			<OneToThreeColumn className="p-1">
				<div className="inline-block align-top">
					<Image
						alt="The Wikimedia Commons Logo"
						className="object-scale-down max-h-12 max-w-16"
						src={CommonsLogo}
					/>
				</div>
				<div className="inline-block align-top">
					<A
						href="https://commons.wikimedia.org"
						rel="noreferrer"
						target="_blank"
					>
						Wikimedia Commons
					</A>
					<P>Free media repository</P>
				</div>
			</OneToThreeColumn>
			<OneToThreeColumn className="p-1">
				<div className="inline-block align-top">
					<Image
						alt="The Wookiepedia Logo"
						className="object-scale-down max-h-12 max-w-16"
						src={WookiepediaLogo}
					/>
				</div>
				<div className="inline-block align-top">
					<A
						href="https://starwars.fandom.com"
						rel="noreferrer"
						target="_blank"
					>
						Wookiepedia
					</A>
					<P>The Star Wars wiki</P>
				</div>
			</OneToThreeColumn>
			<OneToThreeColumn className="p-1">
				<div className="inline-block align-top">
					<Image
						alt="The Wiki Wiki Web Logo"
						className="object-scale-down max-h-12 max-w-16"
						src={WikiwikiwebLogo}
					/>
				</div>
				<div className="inline-block align-top">
					<A href="https://wiki.c2.com" rel="noreferrer" target="_blank">
						WikiWikiWeb
					</A>
					<P>The first wiki!</P>
				</div>
			</OneToThreeColumn>
		</WikiBox>
	);
}
