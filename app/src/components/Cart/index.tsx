import { FlatList } from 'react-native';

import { CartItem } from '../../types/CartItem';
import { Text } from '../Text';
import { Actions, Image, Item, ProductContainer } from './syles';

interface CartProps {
  cartItems: CartItem[]
}

export function Cart({ cartItems }: CartProps) {
  return (
    <FlatList
      data={cartItems}
      keyExtractor={cartItem => cartItem.product._id}
      showsVerticalScrollIndicator={false}
      renderItem={({ item: cartItem }) => (
        <Item>
          <ProductContainer>
            <Image
              source={{
                uri: `http://192.168.0.111:3001/uploads/${cartItem.product.imagePath}`
              }}
            />
          </ProductContainer>

          <Actions>
          </Actions>
        </Item>
      )}
    />
  );
}
