import CommonsLogo from 'public/assets/images/commons.svg';
import TvTropesLogo from 'public/assets/images/tvtropes.png';
import WikipediaLogo from 'public/assets/images/wikipedia.png';
import WikiquoteLogo from 'public/assets/images/wikiquote.svg';
import WikiwikiwebLogo from 'public/assets/images/wikiwikiweb.gif';
import WookiepediaLogo from 'public/assets/images/wookiepedia.png';

import { SisterWiki } from '@/types/SisterWiki';

const sisterWikis: Array<SisterWiki> = [
	{
		alt: 'The TV Tropes Logo',
		image: TvTropesLogo,
		name: 'TV Tropes',
		tagline: 'Archetypal pop culture wiki',
		url: 'https://tvtropes.org',
	},
	{
		alt: 'The Wikipedia Logo',
		image: WikipediaLogo,
		name: 'Wikipedia',
		tagline: 'The free encyclopedia',
		url: 'https://wikipedia.org',
	},
	{
		alt: 'The Wikiquote Logo',
		image: WikiquoteLogo,
		name: 'Wikiquote',
		tagline: 'Collection of quotations',
		url: 'https://www.wikiquote.org',
	},
	{
		alt: 'The Wikimedia Commons Logo',
		image: CommonsLogo,
		name: 'Wikimedia Commons',
		tagline: 'Free media repository',
		url: 'https://commons.wikimedia.org',
	},
	{
		alt: 'The Wookiepedia Logo',
		image: WookiepediaLogo,
		name: 'Wookiepedia',
		tagline: 'The Wookiepedia Logo',
		url: 'https://starwars.fandom.com',
	},
	{
		alt: 'The WikiWikiWeb Logo',
		image: WikiwikiwebLogo,
		name: 'WikiWikiWeb',
		tagline: 'The first wiki!',
		url: 'https://wiki.c2.com',
	},
];

export function useSisterWikis() {
	function getAllSisterWikis(): Array<SisterWiki> {
		return sisterWikis;
	}

	function getSisterWikiByName(name: string): SisterWiki | undefined {
		const foundSister = sisterWikis.find((sis) => {
			return name.toLocaleLowerCase() === sis.name.toLocaleLowerCase();
		});
		return foundSister;
	}

	return { getAllSisterWikis, getSisterWikiByName };
}
