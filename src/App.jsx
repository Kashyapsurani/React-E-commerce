import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';  
import Root from './Root';  
import Cart from './pages/Cart';  
import ChekOut from './pages/ChekOut';  
import { CartProvider } from './CartContext';  
import { PriceProvider } from './PriceContext';  
import { FavoritesProvider } from './FavoritesContext';  
import { CheckoutProvider } from './ChekOutContext';  
import { RecentPurchasesProvider } from './RecentPurchasesContext';  
import Favorite from './components/Favorite';  
import ProductDetail from './pages/ProductDetail'; 

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "/cart",
        element: <Cart />
      },
      {
        path: "/checkout",
        element: <ChekOut />
      },
      {
        path: "/fav",
        element: <Favorite />
      },
      {
        path: "/product/:id",  
        element: <ProductDetail />  
      },
    ]
  }
]);

function App() {
  return (
    <CartProvider>  
      <PriceProvider>  
        <FavoritesProvider>  
          <CheckoutProvider>  
            <RecentPurchasesProvider>  
              <RouterProvider router={router} />  
            </RecentPurchasesProvider>
          </CheckoutProvider>
        </FavoritesProvider>
      </PriceProvider>
    </CartProvider>
  );
}

export default App;
