import Image, { StaticImageData } from 'next/image';

import A from '@/elements/A';
import P from '@/elements/P';

interface SisterWikiProps {
	alt: string;
	image: StaticImageData;
	name: string;
	tagline?: string;
	url?: string;
}

export default function SisterWiki({
	alt,
	image,
	name,
	tagline,
	url,
}: SisterWikiProps) {
	return (
		<>
			<div className="inline-block align-top">
				{url ? (
					<A href={url} rel="noreferrer" target="_blank">
						<Image
							alt={alt}
							className="object-scale-down max-h-12 max-w-16"
							src={image}
						/>
					</A>
				) : (
					<Image
						alt={alt}
						className="object-scale-down max-h-12 max-w-16"
						src={image}
					/>
				)}
			</div>
			<div className="inline-block align-top">
				<h3>
					{url ? (
						<A href={url} rel="noreferrer" target="_blank">
							{name}
						</A>
					) : (
						name
					)}
				</h3>
				{tagline && <P>{tagline}</P>}
			</div>
		</>
	);
}
