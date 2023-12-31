import { ReactNode } from 'react';

interface OneToThreeColumnProps {
	children: ReactNode;
	className?: string;
}

export default function OneToThreeColumn({
	children,
	className,
}: OneToThreeColumnProps) {
	return className ? (
		<div className={`inline-block w-full md:w-1/2 lg:w-1/3 ${className}`}>
			{children}
		</div>
	) : (
		<div className="inline-block w-full md:w-1/2 lg:w-1/3">{children}</div>
	);
}
