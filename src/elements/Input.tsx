interface InputProps {
	className?: string;
	label?: string;
	name: string;
	[props: string]: any;
}

export default function Input({
	className,
	label,
	name,
	...props
}: InputProps) {
	return className ? (
		<>
			<label htmlFor={name} className="w-full font-bold text-wi-black">
				{label}
			</label>
			<input
				{...props}
				className={`px-3 py-1 border w-full rounded border-wi-black disabled:border-wi-gray+1 disabled:cursor-not-allowed ${className}`}
				id={name}
				name={name}
			/>
		</>
	) : (
		<>
			<label htmlFor={name} className="w-full font-bold text-wi-black">
				{label}
			</label>
			<input
				{...props}
				className="px-3 py-1 border w-full rounded border-wi-black disabled:border-wi-gray+1 disabled:cursor-not-allowed"
				id={name}
				name={name}
			/>
		</>
	);
}
