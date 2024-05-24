import React, { useState } from 'react';
import {
  Modal as MantineModal,
  Rating as MantineRating,
  Button,
  Text,
  Group,
  UnstyledButton,
  Stack,
} from '@mantine/core';
import { ModalProps } from '@/types';
import s from './styles.module.scss';

const Modal = ({ id, name, rating, onSave, onClose }: ModalProps) => {
  const [star, setStar] = useState<number>(rating);
  const onRemoveHandler = () => setStar(0);
  const onSaveHandler = () => onSave({ id, rating: star });
  return (
    <MantineModal
      classNames={{ header: s.header }}
      title="Your rating"
      opened
      centered
      onClose={onClose}
      size="380px"
    >
      <Stack className={s.container}>
        <Text className={s.title}>{name}</Text>
        <MantineRating
          classNames={{ root: s.stars }}
          value={star}
          onChange={setStar}
          count={10}
          size="30px"
        />
        <Group className={s.buttons}>
          <Button className={s.button} onClick={onSaveHandler}>
            Save
          </Button>
          <Button className={s.reset} onClick={onRemoveHandler} disabled={!star}>
            Remove rating
          </Button>
        </Group>
      </Stack>
    </MantineModal>
  );
};

export default React.memo(Modal);
