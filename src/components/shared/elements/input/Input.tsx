import { FieldValues, Path, UseFormRegister } from 'react-hook-form';

interface IInputProps<T extends FieldValues> {
	name: Path<T>;
	type: string;
	register: UseFormRegister<T>;
	containerClassName: string;
	className: string;
	placeholder: string;
}

const Input = <T extends FieldValues>({
	name,
	register,
	containerClassName,
	...props
}: IInputProps<T>) => {
	return (
		<div className={containerClassName}>
			<input {...register(name)} {...props} />
		</div>
	);
};

export default Input;
