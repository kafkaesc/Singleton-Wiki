import { ReactNode } from 'react';

interface StyledButtonProps {
	children: ReactNode;
	disabled?: boolean;
	className?: string;
	[props: string]: any;
}

function PrimaryButton({
	children,
	disabled,
	className,
	...props
}: StyledButtonProps) {
	return className ? (
		<button
			{...props}
			className={`px-2 text-wi-black bg-wi-blue enabled:hover:bg-wi-blue-dark enabled:hover:underline disabled:cursor-not-allowed ${className}`}
			disabled={!!disabled}
		>
			{children}
		</button>
	) : (
		<button
			{...props}
			className="px-2 text-wi-black bg-wi-blue enabled:hover:bg-wi-blue-dark enabled:hover:underline disabled:cursor-not-allowed"
			disabled={!!disabled}
		>
			{children}
		</button>
	);
}

function SecondaryButton({
	children,
	disabled,
	className,
	...props
}: StyledButtonProps): JSX.Element {
	return className ? (
		<button
			{...props}
			className={`px-2 text-wi-black bg-wi-green enabled:hover:bg-wi-green-dark enabled:hover:underline disabled:cursor-not-allowed ${className}`}
			disabled={!!disabled}
		>
			{children}
		</button>
	) : (
		<button
			{...props}
			className="px-2 text-wi-black bg-wi-green enabled:hover:bg-wi-green-dark enabled:hover:underline disabled:cursor-not-allowed"
			disabled={!!disabled}
		>
			{children}
		</button>
	);
}

function TextButton({
	children,
	disabled,
	className,
	...props
}: StyledButtonProps): JSX.Element {
	return className ? (
		<button
			{...props}
			className={`px-2 enabled:text-link-blue disabled:text-wi-black enabled:hover:bg-wi-gray enabled:hover:underline disabled:cursor-not-allowed ${className}`}
			disabled={!!disabled}
		>
			{children}
		</button>
	) : (
		<button
			{...props}
			className="px-2 enabled:text-link-blue disabled:text-wi-black enabled:hover:bg-wi-gray enabled:hover:underline disabled:cursor-not-allowed"
			disabled={!!disabled}
		>
			{children}
		</button>
	);
}

interface ButtonProps {
	buttonStyle?: 'primary' | 'secondary' | 'text';
	children: ReactNode;
	disabled?: boolean;
	className?: string;
	[props: string]: any;
}

export default function Button({
	buttonStyle,
	children,
	disabled,
	className,
	...props
}: ButtonProps) {
	return buttonStyle === 'secondary' ? (
		<SecondaryButton {...props} className={className} disabled={!!disabled}>
			{children}
		</SecondaryButton>
	) : buttonStyle === 'text' ? (
		<TextButton {...props} className={className} disabled={!!disabled}>
			{children}
		</TextButton>
	) : (
		<PrimaryButton {...props} className={className} disabled={!!disabled}>
			{children}
		</PrimaryButton>
	);
}
