import styled from 'styled-components';

export const Board = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  border: 1px solid rgba(204, 204, 204, 0.4);
  border-radius: 1rem;
  flex: 1;

  > header {
    padding: 0.5rem;
    font-size: 0.875rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
  }
`;

export const OrdersContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  button {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid rgba(204, 204, 204, 0.4);
    background-color: #fff;
    height: 8rem;
    border-radius: 0.5rem;
    gap: 0.25rem;

    strong {
      font-weight: 500;
    }

  span {
    font-size: 0.875rem;
    color: #666;
  }

    & + button {
      margin-top: 1.5rem;
    }
  }
`;
