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
	return disabled ? (
		className ? (
			<button
				{...props}
				disabled={true}
				className={`px-2 cursor-not-allowed text-wi-black bg-wi-blue ${className}`}
			>
				{children}
			</button>
		) : (
			<button
				{...props}
				disabled={true}
				className="px-2 cursor-not-allowed text-wi-black bg-wi-blue"
			>
				{children}
			</button>
		)
	) : className ? (
		<button
			{...props}
			className={`px-2 text-wi-black bg-wi-blue hover:bg-wi-blue-dark hover:underline ${className}`}
		>
			{children}
		</button>
	) : (
		<button
			{...props}
			className="px-2 text-wi-black bg-wi-blue hover:bg-wi-blue-dark hover:underline"
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
	return disabled ? (
		className ? (
			<button
				{...props}
				disabled
				className={`px-2 cursor-not-allowed text-wi-black bg-wi-green ${className}`}
			>
				{children}
			</button>
		) : (
			<button
				{...props}
				disabled
				className="px-2 cursor-not-allowed text-wi-black bg-wi-green"
			>
				{children}
			</button>
		)
	) : className ? (
		<button
			{...props}
			className={`px-2 text-wi-black bg-wi-green hover:bg-wi-green-dark hover:underline ${className}`}
		>
			{children}
		</button>
	) : (
		<button
			{...props}
			className="px-2 text-wi-black bg-wi-green hover:bg-wi-green-dark hover:underline"
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
	return disabled ? (
		className ? (
			<button
				{...props}
				disabled={disabled}
				className={`px-2 cursor-not-allowed text-wi-black ${className}`}
			>
				{children}
			</button>
		) : (
			<button
				{...props}
				disabled={disabled}
				className="px-2 cursor-not-allowed text-wi-black"
			>
				{children}
			</button>
		)
	) : className ? (
		<button
			{...props}
			className={`px-2 text-wi-black hover:bg-wi-gray hover:underline ${className}`}
		>
			{children}
		</button>
	) : (
		<button
			{...props}
			className="px-2 text-wi-black hover:bg-wi-gray hover:underline"
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
		<SecondaryButton {...props} className={className} disabled={disabled}>
			{children}
		</SecondaryButton>
	) : buttonStyle === 'text' ? (
		<TextButton {...props} className={className} disabled={disabled}>
			{children}
		</TextButton>
	) : (
		<PrimaryButton {...props} className={className} disabled={disabled}>
			{children}
		</PrimaryButton>
	);
}
