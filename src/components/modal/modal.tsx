import React, { useState } from 'react';
import {
  Modal as MantineModal,
  Rating as MantineRating,
  Button,
  Text,
  Group,
  UnstyledButton,
} from '@mantine/core';
import { ModalProps } from '@/types';

const Modal = ({ id, name, rating, onSave, onClose }: ModalProps) => {
  const [star, setStar] = useState<number>(rating);
  const onRemoveHandler = () => setStar(0);
  const onSaveHandler = () => onSave({ id, rating: star });
  return (
    <MantineModal opened onClose={onClose}>
      <Text>Your rating</Text>
      <Text>{name}</Text>
      <MantineRating value={star} onChange={setStar} count={10}></MantineRating>
      <Group>
        <Button onClick={onSaveHandler}>Save</Button>
        <UnstyledButton onClick={onRemoveHandler} disabled={!star}>
          Remove rating
        </UnstyledButton>
      </Group>
    </MantineModal>
  );
};

export default React.memo(Modal);
