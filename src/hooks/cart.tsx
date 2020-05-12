import React, {
  createContext,
  useState,
  useCallback,
  useContext,
  useEffect,
} from 'react';

import AsyncStorage from '@react-native-community/async-storage';

interface Product {
  id: string;
  title: string;
  image_url: string;
  price: number;
  quantity: number;
}

interface CartContext {
  products: Product[];
  addToCart(item: Product): void;
  increment(id: string): void;
  decrement(id: string): void;
}

const CartContext = createContext<CartContext | null>(null);

const CartProvider: React.FC = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function loadProducts(): Promise<void> {
      // TODO LOAD ITEMS FROM ASYNC STORAGE
      const productsInStorage = await AsyncStorage.getItem(
        '@GoMarketplace:products',
      );

      if (productsInStorage) {
        setProducts(JSON.parse(productsInStorage));
      }
    }

    loadProducts();
  }, []);

  const addToCart = useCallback(
    async product => {
      // TODO ADD A NEW ITEM TO THE CART
      const productInCart = products.find(item => item.id === product.id);

      if (productInCart) {
        setProducts(
          products.map(item =>
            item.id === product.id
              ? {
                  ...product,
                  quantity: productInCart.quantity + 1,
                }
              : item,
          ),
        );
      } else {
        setProducts([...products, { ...product, quantity: 1 }]);
      }

      await AsyncStorage.setItem(
        '@GoMarketplace:products',
        JSON.stringify(products),
      );
    },
    [products],
  );

  const increment = useCallback(
    async id => {
      // TODO INCREMENTS A PRODUCT QUANTITY IN THE CART
      // setProducts(
      //   products.map(product =>
      //     product.id === id
      //       ? { ...product, quantity: product.quantity + 1 }
      //       : product,
      //   ),
      // );

      const producIndex = products.findIndex(product => product.id === id);

      if (producIndex >= 0) {
        const updateProduct = [...products];
        updateProduct[producIndex] = {
          ...products[producIndex],
          quantity: products[producIndex].quantity + 1,
        };

        setProducts(updateProduct);
      }

      await AsyncStorage.setItem(
        '@GoMarketplace:products',
        JSON.stringify(products),
      );
    },
    [products],
  );

  const decrement = useCallback(
    async id => {
      // TODO DECREMENTS A PRODUCT QUANTITY IN THE CART
      const producIndex = products.findIndex(product => product.id === id);

      if (producIndex >= 0 && products[producIndex].quantity > 0) {
        const updateProduct = [...products];
        updateProduct[producIndex] = {
          ...products[producIndex],
          quantity: products[producIndex].quantity - 1,
        };

        const productCartFilter = updateProduct.filter(
          product => product.quantity > 0,
        );
        setProducts(productCartFilter);
      }

      await AsyncStorage.setItem(
        '@GoMarketplace:products',
        JSON.stringify(products),
      );
    },
    [products],
  );

  const value = React.useMemo(
    () => ({ addToCart, increment, decrement, products }),
    [products, addToCart, increment, decrement],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

function useCart(): CartContext {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(`useCart must be used within a CartProvider`);
  }

  return context;
}

export { CartProvider, useCart };
