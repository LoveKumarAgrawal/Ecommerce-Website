
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductListing from './components/ProductListing';
import ProductDetail from './components/ProductDetail';
import CheckoutPage from './components/CheckoutPage';
import PaymentSuccess from './components/ProductSuccess';
import PaymentFailure from './components/PaymentFailure';
import HomePage from './components/homepage';

const App = () => {
    return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductListing />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/payment-success" element={<PaymentSuccess />} />
          <Route path="/payment-failure" element={<PaymentFailure />} />
          </Routes>
        </BrowserRouter>
    );
};

export default App;