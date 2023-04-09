import { Modal, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { isAndroid } from '../../utils/isAndroid';
import { Button } from '../Button';
import { Close } from '../Icons/Close';

import { Text } from '../Text';
import { Form, ModalBody, Overlay, Header, Input } from './styles';

interface TableModalProps {
  visible: boolean;
  onClose: () => void;
  onSave: (table: string) => void;
}

export function TableModal({ visible, onClose, onSave }: TableModalProps) {
  const [table, setTable] = useState('');

  function handleSave() {
    onSave(table);
    setTable('');
    onClose();
  }

  return (
    <Modal
      visible={visible}
      transparent
      animationType='fade'
    >
      <Overlay behavior={isAndroid ? 'height' : 'padding'}>
        <ModalBody >
          <Header>
            <Text weight='600'> Informe a mesa </Text>

            <TouchableOpacity onPress={onClose}>
              <Close color='#666' />
            </TouchableOpacity>
          </Header>

          <Form>
            <Input
              placeholder='Número da mesa'
              placeholderTextColor={'#666'}
              keyboardType='number-pad'
              value={table}
              onChangeText={setTable}
            />

            <Button onPress={handleSave} disabled={table.length === 0}>
              Salvar
            </Button>
          </Form>
        </ModalBody>
      </Overlay>
    </Modal>
  );
}
