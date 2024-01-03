import H1 from '@/elements/H1';
import PageColumn from '@/components/PageColumn';
import TopNav from '@/components/TopNav';

interface metadataArgs {
	params: { slug: string };
}

export async function generateMetadata({ params }: metadataArgs) {
	return {
		title: `Dynamic param is: ${params.slug}`,
	};
}

interface TestParamPageProps {
	params: { slug: string };
}

export default function FooPage({ params }: TestParamPageProps) {
	return (
		<>
			<TopNav className="mb-2" />
			<main>
				<PageColumn>
					<H1>Testing route param: {params.slug}</H1>
				</PageColumn>
			</main>
		</>
	);
}
