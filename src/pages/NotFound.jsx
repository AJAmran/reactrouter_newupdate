const NotFound = () => {
  return (
    <div className="min-h-screen bg-red-500 flex items-center justify-center text-white">
      <div className="text-center bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
        <p className="text-xl text-gray-800">Page Not Found</p>
        <p className="text-md text-gray-600 mt-4">
          Oops! The page you're looking for doesn't exist. Try going back to the home page.
        </p>
        <a
          href="/"
          className="mt-6 inline-block bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Go to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
