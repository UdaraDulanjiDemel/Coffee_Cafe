import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { clearCart } from '../store/cartSlice';

const CheckoutContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

const CheckoutTitle = styled.h2`
  margin-bottom: 2rem;
`;

const CheckoutForm = styled.form`
  background-color: white;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: #2c3e50;
  font-weight: 500;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #3498db;
  }
`;

const OrderSummary = styled.div`
  margin-top: 2rem;
  background-color: #f8f9fa;
  border-radius: 10px;
  padding: 1.5rem;
`;

const OrderItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;

const Total = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #ddd;
`;

const SubmitButton = styled.button`
  background-color: #2ecc71;
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 5px;
  width: 100%;
  margin-top: 2rem;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #27ae60;
  }

  &:disabled {
    background-color: #95a5a6;
    cursor: not-allowed;
  }
`;

function Checkout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { items, total } = useSelector((state) => state.cart);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    zipCode: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would process the payment here
    alert('Order placed successfully!');
    dispatch(clearCart());
    navigate('/');
  };

  if (items.length === 0) {
    return (
      <CheckoutContainer>
        <CheckoutTitle>Your cart is empty</CheckoutTitle>
        <p>Please add items to your cart before checking out.</p>
      </CheckoutContainer>
    );
  }

  return (
    <CheckoutContainer>
      <CheckoutTitle>Checkout</CheckoutTitle>
      <CheckoutForm onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Full Name</Label>
          <Input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label>Email</Label>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label>Address</Label>
          <Input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label>City</Label>
          <Input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label>ZIP Code</Label>
          <Input
            type="text"
            name="zipCode"
            value={formData.zipCode}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label>Card Number</Label>
          <Input
            type="text"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
            required
            placeholder="1234 5678 9012 3456"
          />
        </FormGroup>

        <FormGroup>
          <Label>Expiry Date</Label>
          <Input
            type="text"
            name="expiryDate"
            value={formData.expiryDate}
            onChange={handleChange}
            required
            placeholder="MM/YY"
          />
        </FormGroup>

        <FormGroup>
          <Label>CVV</Label>
          <Input
            type="text"
            name="cvv"
            value={formData.cvv}
            onChange={handleChange}
            required
            placeholder="123"
          />
        </FormGroup>

        <OrderSummary>
          <h3>Order Summary</h3>
          {items.map(item => (
            <OrderItem key={item.id}>
              <span>{item.name} x {item.quantity}</span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </OrderItem>
          ))}
          <Total>
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </Total>
        </OrderSummary>

        <SubmitButton type="submit">
          Place Order
        </SubmitButton>
      </CheckoutForm>
    </CheckoutContainer>
  );
}

export default Checkout; 