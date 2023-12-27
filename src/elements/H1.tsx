import { ReactNode } from 'react';

interface H1Props {
	children: ReactNode;
	className?: string;
	[props: string]: any;
}

export default function H1({ children, className, ...props }: H1Props) {
	return className ? (
		<h1 {...props} className={`text-4xl ${className}`}>
			{children}
		</h1>
	) : (
		<h1 {...props} className="text-4xl">
			{children}
		</h1>
	);
}
