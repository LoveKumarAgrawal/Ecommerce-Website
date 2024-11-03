import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

interface ProductDetail {
  title: string;
  id: number;
  description: string;
  price: number;
  thumbnail: string;
}

function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState<ProductDetail | null>(null);

  const fetchProduct = async () => {
    const res = await fetch(`https://dummyjson.com/products/${id}`);
    const data = await res.json();

    if (data) {
      setProduct(data);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  const handleBuyNow = () => {
    if (product) {
      navigate('/checkout', { state: { product } }); // Pass product as state
    }
  };

  if (!product) return <div>Loading...</div>;

  return (
    <div className="w-full h-screen flex flex-col items-center">
      <h2 className="text-3xl font-bold">{product.title}</h2>
      <img src={product.thumbnail} alt={product.title} className="w-auto h-2/4 object-cover mb-5" />
      <div className="bg-white p-4 rounded-lg shadow-md mb-4 w-full max-w-md">
        <p className="text-xl font-semibold text-green-600">Price: ${product.price.toFixed(2)}</p>
        <p className="text-gray-700 mt-2">{product.description}</p>
      </div>

      <button
        onClick={handleBuyNow}
        className="mt-4 bg-green-500 text-white py-2 px-6 rounded hover:bg-green-600 transition duration-200"
      >
        Buy Now
      </button>
    </div>
  );
}

export default ProductDetail;
