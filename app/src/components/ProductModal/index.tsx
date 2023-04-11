import { Modal } from 'react-native';
import { Text } from '../Text';

interface ProductModalProps {
  visible: boolean;
}

export function ProductModal({ visible }: ProductModalProps) {
  return (
    <Modal visible={visible}>
      <Text>Product Modal</Text>
    </Modal>
  );
}
