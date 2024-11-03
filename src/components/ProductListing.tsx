import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface Product {
    title: string;
    id: number;
    thumbnail: string;
}

function ProductListing() {
    const [products, setProducts] = useState<Product[]>([]);
    const [page, setPage] = useState(1);

    const fetchProducts = async () => {
        const res = await fetch(`https://dummyjson.com/products?limit=100`);
        const data = await res.json();

        if (data && data.products) {
            setProducts(data.products);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const selectPageHandler = (selectedPage: any) => {
        if (selectedPage >= 1 && selectedPage <= products.length / 10 && selectedPage !== page) {
            setPage(selectedPage);
        }
    };

    return (
        <div className="p-5">
            {products.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                    {products.slice(page * 10 - 10, page * 10).map((prod) => (
                        <Link
                            to={`/product/${prod.id}`}
                            key={prod.id}
                            className=" bg-gray-300 h-full text-center cursor-pointer p-5 rounded-lg transition-transform transform hover:scale-105 flex flex-col justify-between"
                        >
                            <img
                                src={prod.thumbnail}
                                alt={prod.title}
                                className="w-full h-48 object-cover mb-2 rounded"
                            />
                            <span className="font-medium text-sm md:text-base overflow-hidden text-ellipsis whitespace-nowrap">
                                {prod.title}
                            </span>
                        </Link>
                    ))}
                </div>
            )}

            {products.length > 0 && (
                <div className="flex justify-center flex-wrap mx-0 my-4 p-2.5">
                    <span
                        onClick={() => selectPageHandler(page - 1)}
                        className={`border cursor-pointer px-5 py-4 border-solid border-gray-400 ${page > 1 ? '' : 'opacity-0'}`}
                    >
                        ◀
                    </span>

                    {[...Array(Math.ceil(products.length / 10))].map((_, i) => (
                        <span
                            key={i}
                            className={`px-4 py-3 border cursor-pointer text-base ${page === i + 1 ? 'bg-gray-400' : ''}`}
                            onClick={() => selectPageHandler(i + 1)}
                        >
                            {i + 1}
                        </span>
                    ))}

                    <span
                        onClick={() => selectPageHandler(page + 1)}
                        className={`border cursor-pointer px-5 py-4 border-solid border-gray-400 ${page < products.length / 10 ? '' : 'opacity-0'}`}
                    >
                        ▶
                    </span>
                </div>
            )}
        </div>
    );
}

export default ProductListing;
