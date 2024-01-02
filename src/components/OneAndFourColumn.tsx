import { ReactNode } from 'react';

interface OneAndFourColumnProps {
	children: ReactNode;
	className?: string;
}

export default function OneAndFourColumn({
	children,
	className,
}: OneAndFourColumnProps) {
	return className ? (
		<div className={`align-top inline-block w-full sm:w-1/4 ${className}`}>
			{children}
		</div>
	) : (
		<div className="inline-block w-full align-top sm:w-1/4">{children}</div>
	);
}
