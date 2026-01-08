
import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthState, User, CartItem, Product, Order } from './types';
import { INITIAL_PRODUCTS } from './constants';

// Auth Slice
const initialAuthState: AuthState = {
  user: JSON.parse(localStorage.getItem('techify_user') || 'null'),
  token: localStorage.getItem('techify_token'),
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuthState,
  reducers: {
    loginStart: (state) => { state.loading = true; state.error = null; },
    loginSuccess: (state, action: PayloadAction<{ user: User; token: string }>) => {
      state.loading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
      localStorage.setItem('techify_user', JSON.stringify(action.payload.user));
      localStorage.setItem('techify_token', action.payload.token);
    },
    loginFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem('techify_user');
      localStorage.removeItem('techify_token');
    },
  },
});

// Cart Slice
const initialCartState: { items: CartItem[]; isOpen: boolean } = {
  items: JSON.parse(localStorage.getItem('techify_cart') || '[]'),
  isOpen: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      localStorage.setItem('techify_cart', JSON.stringify(state.items));
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
      localStorage.setItem('techify_cart', JSON.stringify(state.items));
    },
    updateQuantity: (state, action: PayloadAction<{ id: string; quantity: number }>) => {
      const item = state.items.find(item => item.id === action.payload.id);
      if (item) {
        item.quantity = Math.max(1, action.payload.quantity);
      }
      localStorage.setItem('techify_cart', JSON.stringify(state.items));
    },
    clearCart: (state) => {
      state.items = [];
      localStorage.removeItem('techify_cart');
    },
    toggleCart: (state) => {
      state.isOpen = !state.isOpen;
    },
    setCartOpen: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload;
    }
  },
});

// Wishlist Slice
const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState: {
    items: JSON.parse(localStorage.getItem('techify_wishlist') || '[]') as Product[],
    isOpen: false
  },
  reducers: {
    toggleWishlist: (state, action: PayloadAction<Product>) => {
      const index = state.items.findIndex(item => item.id === action.payload.id);
      if (index >= 0) {
        state.items.splice(index, 1);
      } else {
        state.items.push(action.payload);
      }
      localStorage.setItem('techify_wishlist', JSON.stringify(state.items));
    },
    setWishlistOpen: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload;
    }
  }
});

// Products Slice
const initialProductsState: { items: Product[]; loading: boolean } = {
  items: JSON.parse(localStorage.getItem('techify_products') || JSON.stringify(INITIAL_PRODUCTS)),
  loading: false,
};

const productsSlice = createSlice({
  name: 'products',
  initialState: initialProductsState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.items = action.payload;
      localStorage.setItem('techify_products', JSON.stringify(action.payload));
    },
    addProduct: (state, action: PayloadAction<Product>) => {
      state.items.unshift(action.payload);
      localStorage.setItem('techify_products', JSON.stringify(state.items));
    },
    updateProduct: (state, action: PayloadAction<Product>) => {
      const index = state.items.findIndex(p => p.id === action.payload.id);
      if (index !== -1) {
        state.items[index] = action.payload;
        localStorage.setItem('techify_products', JSON.stringify(state.items));
      }
    },
    deleteProduct: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(p => p.id !== action.payload);
      localStorage.setItem('techify_products', JSON.stringify(state.items));
    },
  },
});

// Orders Slice
const initialOrdersState: { items: Order[] } = {
  items: JSON.parse(localStorage.getItem('techify_orders') || '[]'),
};

const ordersSlice = createSlice({
  name: 'orders',
  initialState: initialOrdersState,
  reducers: {
    addOrder: (state, action: PayloadAction<Order>) => {
      state.items.unshift(action.payload);
      localStorage.setItem('techify_orders', JSON.stringify(state.items));
    },
    updateOrderStatus: (state, action: PayloadAction<{ id: string; status: Order['status'] }>) => {
      const order = state.items.find(o => o.id === action.payload.id);
      if (order) {
        order.status = action.payload.status;
        localStorage.setItem('techify_orders', JSON.stringify(state.items));
      }
    }
  },
});

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    cart: cartSlice.reducer,
    wishlist: wishlistSlice.reducer,
    products: productsSlice.reducer,
    orders: ordersSlice.reducer,
  },
});

export const { loginStart, loginSuccess, loginFailure, logout } = authSlice.actions;
export const { addToCart, removeFromCart, updateQuantity, clearCart, toggleCart, setCartOpen } = cartSlice.actions;
export const { toggleWishlist, setWishlistOpen } = wishlistSlice.actions;
export const { setProducts, addProduct, updateProduct, deleteProduct } = productsSlice.actions;
export const { addOrder, updateOrderStatus } = ordersSlice.actions;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
