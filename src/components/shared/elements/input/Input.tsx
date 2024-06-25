import { FieldValues, Path, UseFormRegister, UseFormWatch } from 'react-hook-form';

interface IInputProps<T extends FieldValues> {
	name: Path<T>;
	type: string;
	register: UseFormRegister<T>;
	watch?: UseFormWatch<T>;
	maxLength?: number;
	containerClassName: string;
	symbolContainerClassName?: string;
	className: string;
	placeholder: string;
}

const Input = <T extends FieldValues>({
	name,
	register,
	watch,
	maxLength,
	containerClassName,
	symbolContainerClassName,
	...props
}: IInputProps<T>) => {
	return (
		<div className={containerClassName}>
			<input {...register(name)} {...props} autoComplete='off' />
			{watch && maxLength && (
				<p className={symbolContainerClassName}>
					{watch(name)?.length || 0}/{maxLength}
				</p>
			)}
		</div>
	);
};

export default Input;
