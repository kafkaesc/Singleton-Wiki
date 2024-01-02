import { StaticImageData } from 'next/image';

export interface SisterWiki {
	alt: string;
	image: StaticImageData;
	name: string;
	tagline?: string;
	url?: string;
}
