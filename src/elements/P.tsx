import { ReactNode } from 'react';

interface PProps {
	children: ReactNode;
	className?: string;
	[props: string]: any;
}

export default function P({ children, className, ...props }: PProps) {
	return className ? (
		<p className={`mb-1 text-wi-black ${className}`}>{children}</p>
	) : (
		<p className="mb-1 text-wi-black">{children}</p>
	);
}
