import { ReactNode } from 'react';

interface PageColumnProps {
	children: ReactNode;
	className?: string;
}

export default function PageColumn({ children, className }: PageColumnProps) {
	return className ? (
		<div className={`max-w-4xl px-2 mx-auto lg:px-0 ${className}`}>
			{children}
		</div>
	) : (
		<div className="max-w-4xl px-2 mx-auto lg:px-0">{children}</div>
	);
}
