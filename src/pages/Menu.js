import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { addToCart } from '../store/cartSlice';
import { setSelectedCategory } from '../store/productsSlice';

const MenuContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const MenuHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const MenuTitle = styled.h2`
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 1rem;
`;

const MenuSubtitle = styled.p`
  color: #666;
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto;
`;

const CategoryFilter = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
  justify-content: center;
`;

const CategoryButton = styled.button`
  background-color: ${props => props.active ? '#e74c3c' : 'white'};
  color: ${props => props.active ? 'white' : '#2c3e50'};
  border: 2px solid #e74c3c;
  padding: 0.8rem 1.5rem;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s;
  font-weight: 500;
  font-size: 1rem;

  &:hover {
    background-color: #e74c3c;
    color: white;
    transform: translateY(-2px);
  }
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  padding: 1rem;
`;

const ProductCard = styled.div`
  background-color: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${ProductCard}:hover & {
    transform: scale(1.05);
  }
`;

const ProductInfo = styled.div`
  padding: 1.5rem;
`;

const ProductName = styled.h3`
  margin: 0 0 0.5rem 0;
  color: #2c3e50;
  font-size: 1.3rem;
`;

const ProductDescription = styled.p`
  color: #666;
  margin-bottom: 1rem;
  font-size: 0.95rem;
  line-height: 1.5;
`;

const ProductPrice = styled.p`
  font-weight: bold;
  color: #e74c3c;
  margin-bottom: 1.5rem;
  font-size: 1.2rem;
`;

const AddToCartButton = styled.button`
  background-color: #e74c3c;
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 25px;
  cursor: pointer;
  width: 100%;
  transition: all 0.3s;
  font-weight: 500;
  font-size: 1rem;

  &:hover {
    background-color: #c0392b;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;

const CategoryLabel = styled.span`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background-color: rgba(44, 62, 80, 0.9);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 500;
`;

function Menu() {
  const dispatch = useDispatch();
  const { items, categories, selectedCategory } = useSelector((state) => state.products);

  const filteredProducts = selectedCategory === 'All'
    ? items
    : items.filter(item => item.category === selectedCategory);

  return (
    <MenuContainer>
      <MenuHeader>
        <MenuTitle>Our Menu</MenuTitle>
        <MenuSubtitle>
          Discover our carefully crafted selection of premium coffee drinks, made with the finest ingredients and served with passion.
        </MenuSubtitle>
      </MenuHeader>

      <CategoryFilter>
        <CategoryButton
          active={selectedCategory === 'All'}
          onClick={() => dispatch(setSelectedCategory('All'))}
        >
          All Drinks
        </CategoryButton>
        {categories.map(category => (
          <CategoryButton
            key={category}
            active={selectedCategory === category}
            onClick={() => dispatch(setSelectedCategory(category))}
          >
            {category}
          </CategoryButton>
        ))}
      </CategoryFilter>

      <ProductsGrid>
        {filteredProducts.map(product => (
          <ProductCard key={product.id}>
            <ProductImage src={product.image} alt={product.name} />
            <CategoryLabel>{product.category}</CategoryLabel>
            <ProductInfo>
              <ProductName>{product.name}</ProductName>
              <ProductDescription>{product.description}</ProductDescription>
              <ProductPrice>${product.price.toFixed(2)}</ProductPrice>
              <AddToCartButton onClick={() => dispatch(addToCart(product))}>
                Add to Cart
              </AddToCartButton>
            </ProductInfo>
          </ProductCard>
        ))}
      </ProductsGrid>
    </MenuContainer>
  );
}

export default Menu; 