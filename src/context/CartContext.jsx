import { createContext, useContext, useMemo, useReducer } from 'react';

const CartContext = createContext();

const initialState = {
  items: [],
  lastAddedId: null,
  lastAddedAt: null
};

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const { product } = action.payload;
      const existingItem = state.items.find((item) => item.id === product.id);
      let items;

      if (existingItem) {
        items = state.items.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        items = [...state.items, { ...product, quantity: 1 }];
      }

      return {
        items,
        lastAddedId: product.id,
        lastAddedAt: Date.now()
      };
    }
    case 'CLEAR_CART':
      return {
        items: [],
        lastAddedId: null,
        lastAddedAt: null
      };
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addItem = (product) => {
    dispatch({ type: 'ADD_ITEM', payload: { product } });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const total = state.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const value = useMemo(
    () => ({
      items: state.items,
      lastAddedId: state.lastAddedId,
      lastAddedAt: state.lastAddedAt,
      addItem,
      clearCart,
      total
    }),
    [state.items, state.lastAddedId, state.lastAddedAt, total]
  );

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
