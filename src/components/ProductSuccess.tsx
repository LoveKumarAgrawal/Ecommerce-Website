import { useNavigate } from "react-router-dom";

const PaymentSuccess = () => {

    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/');
      };
    return (
      <div className="flex flex-col items-center justify-center w-full h-screen">
        <h2 className="text-3xl font-bold mb-4">Payment Successful!</h2>
        <p>Your order has been placed successfully.</p>
        <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600" onClick={handleClick}>
          Go to Homepage
        </button>
      </div>
    );
  };
  
  export default PaymentSuccess;
  