import { ReactNode } from 'react';

interface AProps {
	children: ReactNode;
	className?: string;
	[props: string]: any;
}

export default function A({ children, className, ...props }: AProps) {
	return className ? (
		<a {...props} className={`text-link-blue hover:underline ${className}`}>
			{children}
		</a>
	) : (
		<a {...props} className="text-link-blue hover:underline">
			{children}
		</a>
	);
}
