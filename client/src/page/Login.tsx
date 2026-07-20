const Login = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-orange-50 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-orange-100 p-8">
        <h1 className="text-3xl font-bold text-center text-orange-500 mb-2">
          Welcome Back
        </h1>

        <p className="text-center text-gray-500 mb-8">
          Sign in to continue ordering your favorite meals.
        </p>

        <form className="space-y-5">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email
            </label>

            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full rounded-lg border border-orange-200 px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-300"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Password
            </label>

            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full rounded-lg border border-orange-200 px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-300"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-orange-500 py-3 font-semibold text-white transition hover:bg-orange-600 active:scale-[0.98]"
          >
            Login
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <a
            href="/register"
            className="font-semibold text-orange-500 hover:text-orange-600 hover:underline"
          >
            Register
          </a>
        </p>
      </div>
    </section>
  );
};

export default Login;
