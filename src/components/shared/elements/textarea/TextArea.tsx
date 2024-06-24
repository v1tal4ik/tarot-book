import { FieldValues, Path, UseFormRegister, UseFormWatch } from 'react-hook-form';

interface ITextAreaProps<T extends FieldValues> {
	name: Path<T>;
	register: UseFormRegister<T>;
	watch: UseFormWatch<T>;
	maxLength: number;
	className: string;
	placeholder: string;
	rows: number;
}

const TextArea = <T extends FieldValues>({
	name,
	register,
	watch,
	maxLength,
	...props
}: ITextAreaProps<T>) => {
	return (
		<div className='relative'>
			<textarea {...register(name)} {...props} />
			<p className='absolute bottom-4 right-2 text-violet-300 text-[11px]'>
				{watch(name)?.length || 0}/{maxLength}
			</p>
		</div>
	);
};

export default TextArea;
