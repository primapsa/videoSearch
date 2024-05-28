import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { ModalData, ModalOnSave } from '@/types';
import { addToRated, removeFromRated } from '@/store/slices/ratedSlice';

const useRatedModal = () => {
  const dispatch = useDispatch();
  const [modal, setModal] = useState<ModalData | null>(null);

  const onModalClose = useCallback(() => {
    setModal(null);
  }, []);

  const onModalSave = useCallback((ratingData: ModalOnSave) => {
    const { id, rating } = ratingData;
    const action = rating ? addToRated({ id, rating }) : removeFromRated(id);
    dispatch(action);
    onModalClose();
  }, []);

  return {
    modal,
    setModal,
    onModalClose,
    onModalSave,
  };
};

export default useRatedModal;
