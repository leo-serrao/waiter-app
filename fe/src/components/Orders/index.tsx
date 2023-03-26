import { Order } from '../../types/Order';
import { OrdersBoard } from '../OrdersBoard';
import { Container } from './styles';

const orders: Order[] = [
  {
    '_id': '6418c0f0369b04f27e498ccb',
    'table': '12',
    'status': 'WAITING',
    'products': [
      {
        'product': {
          'name': 'Frango com Catupiry',
          'imagePath': '1679270602971-frango-catupiry.png',
          'price': 45,

        },
        'quantity': 2,
        '_id': '6418c0f0369b04f27e498ccc'
      },
      {
        'product': {
          'name': 'Cerveja',
          'imagePath': '1679270895623-cerveja.png',
          'price': 8,
        },
        'quantity': 3,
        '_id': '6418c0f0369b04f27e498ccd'
      }
    ],
  }
];

export function Orders() {
  return (
    <Container>
      <OrdersBoard
        icon="🕐"
        title="Fila de espera"
        orders={orders}
      />
      <OrdersBoard
        icon="👨‍🍳"
        title="Em preparação"
        orders={[]}
      />
      <OrdersBoard
        icon="✅"
        title="Pronto"
        orders={[]}
      />
    </Container>
  );
}
