import Link from '@/elements/Link';
import PageColumn from '@/components/PageColumn';

export default function TopNav() {
	return (
		<PageColumn>
			<div className="flex items-center min-h-14">
				<div className="flex-none">
					<h1 className="text-4xl">Solo Wiki</h1>
				</div>
				<div className="text-right grow">
					<Link className="mx-2" href="/">
						Create Account
					</Link>
					<Link className="mx-2" href="/">
						Login
					</Link>
				</div>
			</div>
		</PageColumn>
	);
}
