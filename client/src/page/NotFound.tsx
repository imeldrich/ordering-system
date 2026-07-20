const NotFound = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-orange-50 px-4">
      <div className="text-center max-w-md">
        <h1 className="text-8xl font-extrabold text-orange-500">404</h1>

        <h2 className="mt-4 text-3xl font-bold text-gray-800">
          Page Not Found
        </h2>

        <p className="mt-3 text-gray-600">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>

        <a
          href="/"
          className="inline-block mt-8 bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-200"
        >
          Back to Home
        </a>
      </div>
    </section>
  );
};

export default NotFound;