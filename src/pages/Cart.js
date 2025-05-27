import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { removeFromCart, updateQuantity, clearCart } from '../store/cartSlice';

const CartContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const CartHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const CartTitle = styled.h2`
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 1rem;
`;

const CartSubtitle = styled.p`
  color: #666;
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto;
`;

const CartEmpty = styled.div`
  text-align: center;
  padding: 4rem 2rem;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
`;

const EmptyTitle = styled.h2`
  color: #2c3e50;
  margin-bottom: 1rem;
`;

const EmptyText = styled.p`
  color: #666;
  margin-bottom: 2rem;
`;

const BrowseButton = styled(Link)`
  display: inline-block;
  background-color: #e74c3c;
  color: white;
  padding: 1rem 2rem;
  border-radius: 25px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s;

  &:hover {
    background-color: #c0392b;
    transform: translateY(-2px);
  }
`;

const CartItems = styled.div`
  background-color: white;
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
`;

const CartItem = styled.div`
  display: flex;
  align-items: center;
  padding: 1.5rem 0;
  border-bottom: 1px solid #eee;

  &:last-child {
    border-bottom: none;
  }
`;

const ItemImage = styled.img`
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 10px;
  margin-right: 1.5rem;
`;

const ItemInfo = styled.div`
  flex: 1;
`;

const ItemName = styled.h3`
  margin: 0 0 0.5rem 0;
  color: #2c3e50;
  font-size: 1.2rem;
`;

const ItemPrice = styled.p`
  color: #e74c3c;
  font-weight: bold;
  margin: 0;
  font-size: 1.1rem;
`;

const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 0 2rem;
  background-color: #f8f9fa;
  padding: 0.5rem 1rem;
  border-radius: 25px;
`;

const QuantityButton = styled.button`
  background-color: white;
  border: 1px solid #ddd;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;

  &:hover {
    background-color: #f1f1f1;
    transform: scale(1.1);
  }
`;

const QuantityNumber = styled.span`
  font-weight: 500;
  min-width: 30px;
  text-align: center;
`;

const RemoveButton = styled.button`
  background-color: #e74c3c;
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s;
  font-weight: 500;

  &:hover {
    background-color: #c0392b;
    transform: translateY(-2px);
  }
`;

const CartSummary = styled.div`
  background-color: white;
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
`;

const Total = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #eee;
`;

const CheckoutButton = styled(Link)`
  background-color: #2ecc71;
  color: white;
  text-decoration: none;
  padding: 1rem 2rem;
  border-radius: 25px;
  display: block;
  text-align: center;
  font-weight: 500;
  transition: all 0.3s;
  margin-bottom: 1rem;

  &:hover {
    background-color: #27ae60;
    transform: translateY(-2px);
  }
`;

const ClearCartButton = styled.button`
  background-color: #95a5a6;
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 25px;
  width: 100%;
  cursor: pointer;
  transition: all 0.3s;
  font-weight: 500;

  &:hover {
    background-color: #7f8c8d;
    transform: translateY(-2px);
  }
`;

function Cart() {
  const dispatch = useDispatch();
  const { items, total } = useSelector((state) => state.cart);

  if (items.length === 0) {
    return (
      <CartContainer>
        <CartEmpty>
          <EmptyTitle>Your cart is empty</EmptyTitle>
          <EmptyText>Add some delicious coffee to your cart!</EmptyText>
          <BrowseButton to="/menu">Browse Menu</BrowseButton>
        </CartEmpty>
      </CartContainer>
    );
  }

  return (
    <CartContainer>
      <CartHeader>
        <CartTitle>Your Cart</CartTitle>
        <CartSubtitle>
          Review your order and proceed to checkout
        </CartSubtitle>
      </CartHeader>

      <CartItems>
        {items.map((item) => (
          <CartItem key={item.id}>
            <ItemImage src={item.image} alt={item.name} />
            <ItemInfo>
              <ItemName>{item.name}</ItemName>
              <ItemPrice>${item.price.toFixed(2)}</ItemPrice>
            </ItemInfo>
            <QuantityControl>
              <QuantityButton
                onClick={() => dispatch(updateQuantity({ id: item.id, quantity: Math.max(1, item.quantity - 1) }))}
              >
                -
              </QuantityButton>
              <QuantityNumber>{item.quantity}</QuantityNumber>
              <QuantityButton
                onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}
              >
                +
              </QuantityButton>
            </QuantityControl>
            <RemoveButton onClick={() => dispatch(removeFromCart(item.id))}>
              Remove
            </RemoveButton>
          </CartItem>
        ))}
      </CartItems>

      <CartSummary>
        <Total>
          <span>Total:</span>
          <span>${total.toFixed(2)}</span>
        </Total>
        <CheckoutButton to="/checkout">Proceed to Checkout</CheckoutButton>
        <ClearCartButton onClick={() => dispatch(clearCart())}>
          Clear Cart
        </ClearCartButton>
      </CartSummary>
    </CartContainer>
  );
}

export default Cart; 