import { FlatList, Modal } from 'react-native';
import { ProductProps } from '../../types/Product';
import { formatCurrency } from '../../utils/formatCurrency';
import { Button } from '../Button';
import { Close } from '../Icons/Close';
import { Text } from '../Text';
import { CloseButton, Footer, FooterContainer, Header, Image, Ingredient, IngredientsContainer, ModalBody, PriceContainer } from './styles';

interface ProductModalProps {
  visible: boolean;
  selectedProduct: null | ProductProps
  onClose: () => void;
  onAddToCart: (product: ProductProps) => void;
}

export function ProductModal({ visible, onClose, selectedProduct, onAddToCart }: ProductModalProps) {
  if (!selectedProduct) {
    return null;
  }

  function handleAddToCart() {
    onAddToCart(selectedProduct!);
    onClose();
  }

  return (
    <Modal
      presentationStyle='pageSheet'
      animationType='slide'
      visible={visible}
      onRequestClose={onClose}
    >
      <Image source={{
        uri: `http://192.168.18.80:3001/uploads/${selectedProduct.imagePath}`
      }}>
        <CloseButton onPress={onClose}>
          <Close />
        </CloseButton>
      </Image>

      <ModalBody>
        <Header>
          <Text weight='600' size={24}>{selectedProduct.name}</Text>
          <Text color='#666' style={{ marginTop: 8 }}>{selectedProduct.description}</Text>
        </Header>

        {selectedProduct.ingredients.length > 0 && (
          <IngredientsContainer>
            <Text weight='600' color='#666'>Ingredientes</Text>

            <FlatList
              data={selectedProduct.ingredients}
              style={{ marginTop: 16 }}
              keyExtractor={ingredient => ingredient._id}
              showsVerticalScrollIndicator={false}
              renderItem={({ item: ingredient }) => (
                <Ingredient>
                  <Text style={{ marginRight: 20 }}>{ingredient.icon}</Text>
                  <Text size={14} color='#666'>{ingredient.name}</Text>
                </Ingredient>
              )}
            />
          </IngredientsContainer>
        )}

      </ModalBody>

      <Footer>
        <FooterContainer>
          <PriceContainer>
            <Text color='#666'>Preço</Text>
            <Text weight='600' size={20}>{formatCurrency(selectedProduct.price)}</Text>
          </PriceContainer>

          <Button onPress={handleAddToCart}>Adicionar ao pedido</Button>
        </FooterContainer>
      </Footer>
    </Modal>
  );
}
