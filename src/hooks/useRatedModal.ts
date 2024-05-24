import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ModalData, ModalOnSave } from '@/types';
import { addToRated } from '@/store/slices/ratedSlice';

const useRatedModal = () => {
  const dispatch = useDispatch();
  const [modal, setModal] = useState<ModalData | null>(null);
  const onModalClose = () => {
    setModal(null);
  };
  const onModalSave = (obj: ModalOnSave) => {
    const { id, rating } = obj;
    dispatch(addToRated({ id, rating }));
    onModalClose();
  };

  return {
    modal,
    setModal,
    onModalClose,
    onModalSave,
  };
};

export default useRatedModal;
