import { ReactNode } from 'react';

interface H3Props {
	children: ReactNode;
	className?: string;
	[props: string]: any;
}

export default function H3({ children, className, ...props }: H3Props) {
	return className ? (
		<h3 {...props} className={`text-xl text-wi-black ${className}`}>
			{children}
		</h3>
	) : (
		<h3 {...props} className="text-xl text-wi-black">
			{children}
		</h3>
	);
}
