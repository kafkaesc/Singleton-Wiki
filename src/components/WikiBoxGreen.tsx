import { ReactNode } from 'react';

interface WikiBoxGreenProps {
	children: ReactNode;
	className?: string;
	heading?: string;
}

export default function WikiBoxGreen({
	children,
	className,
	heading,
}: WikiBoxGreenProps) {
	return className ? (
		<div
			className={`p-2 border bg-wi-green-light border-wi-green ${className}`}
		>
			{heading && (
				<h2 className="px-2 py-1 border border-wi-green-dark bg-wi-green">
					{heading}
				</h2>
			)}
			{children}
		</div>
	) : (
		<div className="p-2 border bg-wi-green-light border-wi-green">
			{heading && (
				<h2 className="px-2 py-1 border border-wi-green-dark bg-wi-green">
					{heading}
				</h2>
			)}
			{children}
		</div>
	);
}
