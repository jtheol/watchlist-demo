import AuthForm from "./components/AuthForm";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-gray-200">
      <div className="w-full max-w-md p-6 bg-gray-800 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center text-white mb-4">Welcome to WatchList</h1>
        <p className="text-center text-gray-400 mb-6">
          Your personal space to curate and manage a wishlist of your favorite watches. Sign in to create, view, edit, and delete watches from your wishlist.
        </p>
        <div className="mt-4">
          <AuthForm />
        </div>
      </div>
    </div>
  );
}
