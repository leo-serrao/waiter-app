import styled from 'styled-components';

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(4.5px);
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalBody = styled.div`
  background: #fff;
  width: 30rem;
  border-radius: 0.5rem;
  padding: 2rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

      button {
        border: 0;
        background: transparent;
        line-height: 0;
      }

      strong {
        font-size: 1.5rem;
      }
  }

  .status-container {
    margin-top: 2rem;

    small {
      font-size: 0.875rem;
      opacity: 0.8;
    }

    div {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin-top: 0.5rem;
    }
  }
`;

export const OrderDetails = styled.div`
  margin-top: 2rem;

  > strong {
    font-weight: 500;
    font-size: 0.875rem;
    opacity: 0.8;
  }

  .order-itens {
    margin-top: 1rem;


    .item {
      display: flex;

      & + .item {
        margin-top: 1rem;
      }

      img {
        border-radius: 0.375rem;
      }

      .quantity {
        font-size: 0.875rem;
        color: #666;
        display: block;
        min-width: 1.25rem;
        margin-left: 0.75rem;
      }

      .product-details {
        margin-left: 0.25rem;


        strong {
          display: block;
          margin-bottom: 0.25rem;
          margin-top: -0.15rem;
        }

        span {
          font-size: 0.875rem;
          color: #666;
        }
      }
    }
  }

  .total {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1.5rem;

    span {
      font-size: 0.875rem;
      font-weight: 500;
      opacity: 0.8;
    }
  }
`;

export const Actions = styled.footer`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .primary {
    background: #333333;
    border:  0;
    border-radius: 3rem;
    color: #fff;
    padding: 0.75rem 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    &:hover {
      filter: brightness(1.3);
      transition: all 0.2s linear;
    }
  }

  .secondary {
    padding: 0.75rem 1.5rem;
    color: #d73035;
    font-weight: bold;
    border: 0;
    border-radius: 3rem;
    background-color: transparent;
    margin-top: 0.75rem;

    &:hover {
      box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.2);
      transition: all 0.2s linear;
    }
  }
`;
