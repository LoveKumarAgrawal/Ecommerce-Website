import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Checkout = () => {
    const location = useLocation();
    const { product } = location.state || {}; // Retrieve product details from state
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('card'); // Default to card payment
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate a payment process
        const isSuccess = Math.random() > 0.5; // Mocking success/failure

        if (isSuccess) {
            navigate('/payment-success');
        } else {
            navigate('/payment-failure');
        }
    };

    return (
        <div className="flex flex-col justify-around items-center w-full h-screen p-4 md:flex-row">
      {/* Product Information */}
      <div className="bg-white p-4 rounded-lg shadow-md w-full max-w-md mr-4">
        {product && (
          <>
            <h3 className="text-2xl font-semibold">{product.title}</h3>
            <img src={product.thumbnail} alt={product.title} className="w-full h-32 object-cover mb-2" />
            <p className="text-xl font-semibold text-green-600">Price: ${product.price.toFixed(2)}</p>
            <p className="text-gray-700">{product.description}</p>
          </>
        )}
      </div>

      {/* Checkout Form */}
      <div className="bg-white p-4 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-3xl font-bold mb-4">Checkout</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
          <input
            type="text"
            placeholder="Shipping Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
          <div className="flex items-center mb-4">
            <label className="mr-2">Payment Method:</label>
            <select
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="p-2 border border-gray-300 rounded"
            >
              <option value="card">Credit/Debit Card</option>
              <option value="cod">Cash on Delivery</option>
            </select>
          </div>
          {paymentMethod === 'card' && (
            <div className="space-y-2">
              <input
                type="text"
                placeholder="Card Number"
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
              <input
                type="text"
                placeholder="Expiry Date (MM/YY)"
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
              <input
                type="text"
                placeholder="CVV"
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
          )}
          <button type="submit" className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600">
            Confirm Order
          </button>
        </form>
      </div>
    </div>
    );
};

export default Checkout;
