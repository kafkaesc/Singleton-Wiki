import { ReactNode } from 'react';

interface H2Props {
	children: ReactNode;
	className?: string;
	[props: string]: any;
}

export default function H2({ children, className, ...props }: H2Props) {
	return className ? (
		<h2 {...props} className={`text-3xl text-wi-black ${className}`}>
			{children}
		</h2>
	) : (
		<h2 {...props} className="text-3xl text-wi-black">
			{children}
		</h2>
	);
}
