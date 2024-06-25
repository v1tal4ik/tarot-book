import Modal from 'react-modal';

import { PSYCHIC_ARR } from 'src/utils/constates';

import TarotPsychic from './tarot-psychic/TarotPsychic';
import CloseIcon from 'src/assets/icons/close-black.svg';
import { useCallback, useState } from 'react';

Modal.setAppElement('#root');

interface TarotPsychicModalProps {
	isOpen: boolean;
	closeModal: () => void;
}

const TarotPsychicModal = ({ isOpen, closeModal }: TarotPsychicModalProps) => {
	const [currentPsychicId, setCurrentPsychicId] = useState<string | null>(null);

	const handleChangePsychicId = useCallback(({ target }: React.ChangeEvent<HTMLInputElement>) => {
		setCurrentPsychicId(target.value);
	}, []);

	const handleResetPsychicId = useCallback(() => {
		setCurrentPsychicId(null);
	}, []);

	return (
		<Modal
			isOpen={isOpen}
			className='psychic-modal'
			overlayClassName='fixed inset-0 bg-[#000000bf]'
			onAfterClose={handleResetPsychicId}>
			<div className='flex flex-col gap-4 '>
				<div className='flex justify-between items-center'>
					<h2>Choose the psychic to answer:</h2>
					<button onClick={closeModal}>
						<img src={CloseIcon} alt='close-icon' />
					</button>
				</div>
				<ul className='flex justify-around items-center gap-4'>
					{PSYCHIC_ARR.map((psychic) => (
						<TarotPsychic
							key={psychic.id}
							{...psychic}
							currentValue={currentPsychicId}
							handleChange={handleChangePsychicId}
						/>
					))}
				</ul>
				<button className='primary-button'>Ask this question now</button>
				<button className='secondary-button text-center'>
					Book a session at a convenient time
				</button>
			</div>
		</Modal>
	);
};

export default TarotPsychicModal;
