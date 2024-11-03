import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">
            <header className="bg-white shadow-md p-4">
                <h1 className="text-3xl font-bold text-center">Welcome to Mock E-Commerce</h1>
            </header>
            <main className="flex-grow flex flex-col items-center justify-center">
                <section className="text-center">
                    <h2 className="text-4xl font-semibold mb-4">Featured Products</h2>
                    <Link
                        to="/products"
                        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
                    >
                        View Products
                    </Link>
                </section>
            </main>
            <footer className="bg-gray-800 text-white p-4 text-center">
                <p>&copy; 2024 Mock E-Commerce</p>
            </footer>
        </div>
    );
}

export default HomePage;
