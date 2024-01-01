import { ReactNode } from 'react';

interface OneToFourColumnProps {
	children: ReactNode;
	className?: string;
}

export default function OneToFourColumn({
	children,
	className,
}: OneToFourColumnProps) {
	return className ? (
		<div
			className={`align-top inline-block w-full md:w-1/2 lg:w-1/4 ${className}`}
		>
			{children}
		</div>
	) : (
		<div className="align-top inline-block w-full md:w-1/2 lg:w-1/4">
			{children}
		</div>
	);
}
