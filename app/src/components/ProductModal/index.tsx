import { Modal } from 'react-native';
import { ProductProps } from '../../types/product';
import { Text } from '../Text';
import { ProductImage } from './styles';

interface ProductModalProps {
  visible: boolean;
  onClose: () => void;
  selectedProduct: null | ProductProps
}

export function ProductModal({ visible, onClose, selectedProduct }: ProductModalProps) {
  return (
    <Modal
      presentationStyle='pageSheet'
      animationType='slide'
      visible={visible}
      onRequestClose={onClose}
    >
      <ProductImage source={{
        uri: `http://192.168.0.111:3001/uploads/${selectedProduct?.imagePath}`
      }} />
      <Text>{selectedProduct?.name}</Text>
    </Modal>
  );
}
