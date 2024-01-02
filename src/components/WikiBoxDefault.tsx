import { ReactNode } from 'react';

interface WikiBoxDefaultProps {
	children: ReactNode;
	className?: string;
	heading?: string;
}

export default function WikiBoxDefault({
	children,
	className,
	heading,
}: WikiBoxDefaultProps) {
	return className ? (
		<div className={`p-2 bg-white border border-wi-gray+1 ${className}`}>
			{heading && (
				<h2 className="px-2 py-1 font-bold border border-wi-gray-1 bg-wi-gray">
					{heading}
				</h2>
			)}
			{children}
		</div>
	) : (
		<div className="p-2 bg-white border border-wi-gray+1">
			{heading && (
				<h2 className="px-2 py-1 font-bold border border-wi-gray-1 bg-wi-gray">
					{heading}
				</h2>
			)}
			{children}
		</div>
	);
}
