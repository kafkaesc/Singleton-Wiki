import { ReactNode } from 'react';
import NLink from 'next/link';

interface LinkProps {
	children: ReactNode;
	className?: string;
	href: string;
	[props: string]: any;
}

export default function Link({
	children,
	className,
	href,
	...props
}: LinkProps) {
	return className ? (
		<NLink
			{...props}
			className={`text-link-blue hover:underline ${className}`}
			href={href}
		>
			{children}
		</NLink>
	) : (
		<NLink {...props} className="text-link-blue hover:underline" href={href}>
			{children}
		</NLink>
	);
}
