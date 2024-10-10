import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Root from './Root';
import Cart from './pages/Cart';
import ChekOut from './pages/ChekOut';
import { CartProvider } from './CartContext';
import { PriceProvider } from './PriceContext';
import { FavoritesProvider } from './FavoritesContext';  // Import FavoritesProvider
import Favorite from './components/Favorite';

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
        element: <Favorite/>
      },
    ]
  }
]);

function App() {
  return (
    <CartProvider>
      <PriceProvider>
        <FavoritesProvider> {/* Wrap with FavoritesProvider */}
          <RouterProvider router={router} />
        </FavoritesProvider>
      </PriceProvider>
    </CartProvider>
  );
}

export default App;
