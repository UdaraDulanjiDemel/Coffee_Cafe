import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    {
      id: 1,
      name: 'Classic Espresso',
      price: 3.99,
      description: 'Strong and concentrated coffee served in a small cup',
      image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=500&auto=format&fit=crop&q=80',
      category: 'Hot Coffee'
    },
    {
      id: 2,
      name: 'Cappuccino',
      price: 4.99,
      description: 'Espresso with steamed milk and foam',
      image: 'https://dairyfarmersofcanada.ca/sites/default/files/styles/recipe_image/public/image_file_browser/conso_recipe/2022/Capuccino.jpg.jpeg?itok=J1pWPwe2',
      category: 'Hot Coffee'
    },
    {
      id: 3,
      name: 'Caramel Latte',
      price: 5.49,
      description: 'Espresso with steamed milk and caramel syrup',
      image: 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=500&auto=format&fit=crop&q=80',
      category: 'Hot Coffee'
    },
    {
      id: 4,
      name: 'Cold Brew',
      price: 4.49,
      description: 'Coffee brewed with cold water for 12-24 hours',
      image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=500&auto=format&fit=crop&q=80',
      category: 'Cold Coffee'
    },
    {
      id: 5,
      name: 'Iced Americano',
      price: 3.99,
      description: 'Espresso with cold water and ice',
      image: 'https://images.ctfassets.net/v601h1fyjgba/1vlXSpBbgUo9yLzh71tnOT/a1afdbe54a383d064576b5e628035f04/Iced_Americano.jpg',
      category: 'Cold Coffee'
    },
    {
      id: 6,
      name: 'Mocha',
      price: 5.49,
      description: 'Espresso with chocolate and steamed milk',
      image: 'https://www.folgerscoffee.com/folgers/recipes/_Hero%20Images/Detail%20Pages/6330/image-thumb__6330__schema_image/CafeMocha-hero.61028a28.jpg',
      category: 'Hot Coffee'
    },
    {
      id: 7,
      name: 'Vanilla Latte',
      price: 5.29,
      description: 'Espresso with steamed milk and vanilla syrup',
      image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=500&auto=format&fit=crop&q=80',
      category: 'Hot Coffee'
    },
    {
      id: 8,
      name: 'Iced Caramel Macchiato',
      price: 5.99,
      description: 'Espresso with vanilla syrup, milk, and caramel drizzle',
      image: 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=500&auto=format&fit=crop&q=80',
      category: 'Cold Coffee'
    },
    {
      id: 9,
      name: 'Flat White',
      price: 4.79,
      description: 'Espresso with steamed milk and microfoam',
      image: 'https://brewbar.pk/cdn/shop/files/FlatWhite_Espresso_Milk.png?v=1725510905',
      category: 'Hot Coffee'
    },
    {
      id: 10,
      name: 'Nitro Cold Brew',
      price: 5.99,
      description: 'Cold brew infused with nitrogen for a creamy texture',
      image: 'https://donutbank.com/cdn/shop/files/nitrocoffee.jpg?v=1699456443',
      category: 'Cold Coffee'
    },
    {
      id: 11,
      name: 'Hazelnut Latte',
      price: 5.49,
      description: 'Espresso with steamed milk and hazelnut syrup',
      image: 'https://bod-blog-assets.prod.cd.beachbodyondemand.com/bod-blog/wp-content/uploads/2016/01/11161355/Hazelnut-Latte-Shakeology.770.png',
      category: 'Hot Coffee'
    },
    {
      id: 12,
      name: 'Iced Mocha',
      price: 5.79,
      description: 'Espresso with chocolate, milk, and ice',
      image: 'https://www.thebewitchinkitchen.com/wp-content/uploads/2024/01/how_to_make_iced_mocha_coffee-scaled.jpg',
      category: 'Cold Coffee'
    }
  ],
  categories: ['Hot Coffee', 'Cold Coffee'],
  selectedCategory: 'All'
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    }
  }
});

export const { setSelectedCategory } = productsSlice.actions;
export default productsSlice.reducer; 