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
	// TODO: tie errString display to the status of the input and form somehow,
	// good case to break it into it's own component
	let errString = '';
	return className ? (
		<>
			<label htmlFor={name} className="w-full font-bold text-wi-black">
				{label}
				{props.required && (
					<span className="text-sm italic font-normal text-wi-red">
						Required
					</span>
				)}
			</label>
			<input
				{...props}
				className={`px-3 py-1 border w-full rounded border-wi-black disabled:border-wi-gray+1 disabled:cursor-not-allowed ${className}`}
				id={name}
				name={name}
			/>
			<span className="block text-sm italic text-wi-red">
				{errString ? errString : <>&nbsp;</>}
			</span>
		</>
	) : (
		<>
			<label htmlFor={name} className="w-full font-bold text-wi-black">
				{label}
				{props.required && (
					<span className="ml-1 text-sm italic font-normal text-wi-red">
						Required
					</span>
				)}
			</label>
			<input
				{...props}
				className="px-3 py-1 border w-full rounded border-wi-black disabled:border-wi-gray+1 disabled:cursor-not-allowed"
				id={name}
				name={name}
			/>
			<span className="block text-sm italic text-wi-red">
				{errString ? errString : <>&nbsp;</>}
			</span>
		</>
	);
}
