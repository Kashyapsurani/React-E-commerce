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

// Define routing for the application using createBrowserRouter
const router = createBrowserRouter([
  {
    path: '/',  // Root path ('/')
    element: <Root />,  // Root component for the application
    children: [
      {
        index: true,  // Default route (Home page)
        element: <Home />  // Render Home component for the root path
      },
      {
        path: "/cart",  // Route for the cart page
        element: <Cart />  // Render Cart component
      },
      {
        path: "/checkout",  // Route for the checkout page
        element: <ChekOut />  // Render Checkout component
      },
      {
        path: "/fav",  // Route for the favorites page
        element: <Favorite />  // Render Favorite component
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
              {/* Provide the routing context to the application */}
              <RouterProvider router={router} />  {/* Use the router defined above to handle routes */}
            </RecentPurchasesProvider>
          </CheckoutProvider>
        </FavoritesProvider>
      </PriceProvider>
    </CartProvider>
  );
}

export default App;
