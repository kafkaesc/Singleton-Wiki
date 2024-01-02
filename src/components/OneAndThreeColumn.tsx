import { ReactNode } from 'react';

interface OneAndThreeColumnProps {
	children: ReactNode;
	className?: string;
}

export default function OneAndThreeColumn({
	children,
	className,
}: OneAndThreeColumnProps) {
	return className ? (
		<div className={`align-top inline-block w-full sm:w-1/3 ${className}`}>
			{children}
		</div>
	) : (
		<div className="inline-block w-full align-top sm:w-1/3">{children}</div>
	);
}
