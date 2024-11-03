import { useNavigate } from "react-router-dom";

const PaymentFailure = () => {
    const navigate = useNavigate();

    const handleRetry = () => {
        navigate(-1);
    };

    return (
      <div className="flex flex-col items-center justify-center w-full h-screen">
        <h2 className="text-3xl font-bold mb-4">Payment Failed!</h2>
        <p>There was an issue with your payment. Please try again.</p>
        <button className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600" onClick={handleRetry}>
          Retry
        </button>
      </div>
    );
  };
  
  export default PaymentFailure;
  