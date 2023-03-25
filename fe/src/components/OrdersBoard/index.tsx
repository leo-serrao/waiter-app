import { Board, OrdersContainer } from './styles';

interface OrdersBoardProps {
  icon: string;
  title: string;
}

export function OrdersBoard(props: OrdersBoardProps) {
  return (
    <Board>
      <header>
        <span>{props.icon}</span>
        <strong>{props.title}</strong>
        <span>(1)</span>
      </header>

      <OrdersContainer>
        <button type='button'>
          <strong>Mesa 2</strong>
          <span>2 Itens</span>
        </button>

        <button type='button'>
          <strong>Mesa 2</strong>
          <span>2 Itens</span>
        </button>
      </OrdersContainer>
    </Board>
  );
}
