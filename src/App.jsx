import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';  // Import the Home page component
import Root from './Root';  // Import the Root component (likely a layout or wrapper)
import Cart from './pages/Cart';  // Import the Cart page component
import ChekOut from './pages/ChekOut';  // Import the Checkout page component
import { CartProvider } from './CartContext';  // Import CartProvider to manage cart state
import { PriceProvider } from './PriceContext';  // Import PriceProvider to manage pricing state
import { FavoritesProvider } from './FavoritesContext';  // Import FavoritesProvider to manage favorite items
import { CheckoutProvider } from './ChekOutContext';  // Import CheckoutProvider to manage checkout state
import { RecentPurchasesProvider } from './RecentPurchasesContext';  // Import RecentPurchasesProvider to manage recent purchases
import Favorite from './components/Favorite';  // Import Favorite component to display favorite items
import ProductDetail from './pages/ProductDetail'; // Import the ProductDetail component

// Then, modify the router definition to include the new route
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
        path: "/product/:id",  // New route for product details
        element: <ProductDetail />  // Render ProductDetail component
      },
    ]
  }
]);

// Main App component
function App() {
  return (
    <CartProvider>  {/* Wrap application in CartProvider to manage cart state globally */}
      <PriceProvider>  {/* Wrap application in PriceProvider to manage pricing state globally */}
        <FavoritesProvider>  {/* Wrap application in FavoritesProvider to manage favorite items globally */}
          <CheckoutProvider>  {/* Wrap application in CheckoutProvider to manage checkout state globally */}
            <RecentPurchasesProvider>  {/* Wrap application in RecentPurchasesProvider to manage recent purchases */}
              <RouterProvider router={router} />  {/* Use the router defined above to handle routes */}
            </RecentPurchasesProvider>
          </CheckoutProvider>
        </FavoritesProvider>
      </PriceProvider>
    </CartProvider>
  );
}

export default App;
