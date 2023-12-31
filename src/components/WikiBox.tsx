import { ReactNode } from 'react';

import WikiBoxBlue from '@/components/WikiBoxBlue';
import WikiBoxGreen from './WikiBoxGreen';
import WikiBoxDefault from '@/components/WikiBoxDefault';

interface WikiBoxProps {
	boxStyle?: 'blue' | 'gray' | 'green';
	children: ReactNode;
	className?: string;
	heading?: string;
}

export default function WikiBox({
	boxStyle,
	children,
	className,
	heading,
}: WikiBoxProps) {
	return boxStyle === 'blue' ? (
		<WikiBoxBlue className={className} heading={heading}>
			{children}
		</WikiBoxBlue>
	) : boxStyle === 'green' ? (
		<WikiBoxGreen className={className} heading={heading}>
			{children}
		</WikiBoxGreen>
	) : (
		<WikiBoxDefault className={className} heading={heading}>
			{children}
		</WikiBoxDefault>
	);
}
