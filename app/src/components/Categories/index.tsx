import { useState } from 'react';
import { categories } from '../../mocks/categories';
import { FlatList } from 'react-native';

import { Text } from '../Text';
import { Category, Icon } from './styles';

export function Categories() {
  const [selectedCategory, setSelectedCategory] = useState('');

  function handleSelectCategory(categoryId: string) {
    const category = selectedCategory === categoryId ? '' : categoryId;
    setSelectedCategory(category);
  }

  return (

    <FlatList
      horizontal
      contentContainerStyle={{ paddingRight: 24 }}
      showsHorizontalScrollIndicator={false}
      data={categories}
      keyExtractor={item => item._id}
      renderItem={({ item: category }) => {
        const isSelected = selectedCategory === category._id;

        return (
          <Category onPress={() => handleSelectCategory(category._id)}>
            <Icon><Text opacity={isSelected ? 1 : 0.5}>{category.icon}</Text></Icon>
            <Text opacity={isSelected ? 1 : 0.5}>{category.name}</Text>
          </Category>
        );
      }}
    />
  );
}
