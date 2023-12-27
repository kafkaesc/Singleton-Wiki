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
				className={`px-2 text-white cursor-not-allowed bg-zinc-300 ${className}`}
			>
				{children}
			</button>
		) : (
			<button
				{...props}
				disabled={true}
				className="px-2 text-white cursor-not-allowed bg-zinc-300"
			>
				{children}
			</button>
		)
	) : className ? (
		<button
			{...props}
			className={`px-2 text-white bg-sky-600 hover:bg-sky-800 ${className}`}
		>
			{children}
		</button>
	) : (
		<button {...props} className="px-2 text-white bg-sky-600 hover:bg-sky-800">
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
				className={`px-2 text-white cursor-not-allowed bg-zinc-300 ${className}`}
			>
				{children}
			</button>
		) : (
			<button
				{...props}
				disabled
				className="px-2 text-white cursor-not-allowed bg-zinc-300"
			>
				{children}
			</button>
		)
	) : className ? (
		<button
			{...props}
			className={`px-2 text-white bg-teal-600 hover:bg-teal-800 ${className}`}
		>
			{children}
		</button>
	) : (
		<button
			{...props}
			className="px-2 text-white bg-teal-600 hover:bg-teal-800"
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
				className={`px-2 cursor-not-allowed ${className}`}
			>
				{children}
			</button>
		) : (
			<button
				{...props}
				disabled={disabled}
				className="px-2 cursor-not-allowed"
			>
				{children}
			</button>
		)
	) : className ? (
		<button {...props} className={`px-2 hover:bg-zinc-200 ${className}`}>
			{children}
		</button>
	) : (
		<button {...props} className="px-2 hover:bg-zinc-200">
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
