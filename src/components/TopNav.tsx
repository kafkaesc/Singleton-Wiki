import Link from '@/elements/Link';
import PageColumn from '@/components/PageColumn';

interface TopNavProps {
	className?: string;
}

export default function TopNav({ className }: TopNavProps) {
	return className ? (
		<PageColumn
			className={`border border-0 border-b border-wi-gray+2 ${className}`}
		>
			<div className="flex items-center min-h-14">
				<div className="flex-none">
					<h1 className="text-4xl">Solo Wiki</h1>
				</div>
				<div className="text-right grow">
					<Link className="mx-2" href="/">
						Create Account
					</Link>
					<Link className="mx-2" href="/">
						Log in
					</Link>
				</div>
			</div>
		</PageColumn>
	) : (
		<PageColumn className="border border-0 border-b-1 border-wi-gray+2">
			<div className="flex items-center min-h-14">
				<div className="flex-none">
					<h1 className="text-4xl">Solo Wiki</h1>
				</div>
				<div className="text-right grow">
					<Link className="mx-2" href="/">
						Create Account
					</Link>
					<Link className="mx-2" href="/">
						Log in
					</Link>
				</div>
			</div>
		</PageColumn>
	);
}
