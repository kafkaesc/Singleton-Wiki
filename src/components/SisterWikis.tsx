import P from '@/elements/P';
import OneToThreeColumn from '@/components/OneToThreeColumn';
import SisterWiki from '@/components/SisterWiki';
import WikiBox from '@/components/WikiBox';

import { useSisterWikis } from '@/hooks/useSisterWikis';

export default function SisterWikis() {
	const { getAllSisterWikis } = useSisterWikis();
	const sisterWikis = getAllSisterWikis();
	return (
		<WikiBox heading="Sister Wikis">
			<P className="p-1">
				Solo Wiki is collaboratively written by volunteer editors. Here are some
				other wikis that are sister projects in the spirit of community
				collaboration:
			</P>
			{sisterWikis.map((sis) => {
				return (
					<OneToThreeColumn key={`${sis.name}`} className="p-1">
						<SisterWiki {...sis} />
					</OneToThreeColumn>
				);
			})}
		</WikiBox>
	);
}
