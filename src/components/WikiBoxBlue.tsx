import { ReactNode } from 'react';

interface WikiBoxBlueProps {
	children: ReactNode;
	className?: string;
	heading?: string;
}

export default function WikiBoxBlue({
	children,
	className,
	heading,
}: WikiBoxBlueProps) {
	return className ? (
		<div className={`p-2 border bg-wi-blue-light border-wi-blue ${className}`}>
			{heading && (
				<h2 className="px-2 py-1 border border-wi-blue-dark bg-wi-blue">
					{heading}
				</h2>
			)}
			{children}
		</div>
	) : (
		<div className="p-2 border bg-wi-blue-light border-wi-blue">
			{heading && (
				<h2 className="px-2 py-1 border border-wi-blue-dark bg-wi-blue">
					{heading}
				</h2>
			)}
			{children}
		</div>
	);
}
