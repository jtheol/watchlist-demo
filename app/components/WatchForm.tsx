import { addWatch } from "../server-actions/addWatch";

export default function WatchForm() {
  return (
    <form action={addWatch} className="bg-gray-800 p-6 rounded-lg shadow-md max-w-md mx-auto">
      <div className="mb-4">
        <label
          htmlFor="brand"
          className="block text-sm font-medium text-gray-300 mb-2"
        >
          Brand Name
        </label>
        <input
          type="text"
          id="brand"
          name="brand"
          required
          className="w-full p-3 bg-gray-700 text-gray-200 rounded-md border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="model"
          className="block text-sm font-medium text-gray-300 mb-2"
        >
          Model
        </label>
        <input
          type="text"
          id="model"
          name="model"
          required
          className="w-full p-3 bg-gray-700 text-gray-200 rounded-md border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="reference_num"
          className="block text-sm font-medium text-gray-300 mb-2"
        >
          Reference Number
        </label>
        <input
          type="text"
          id="reference_num"
          name="reference_num"
          required
          className="w-full p-3 bg-gray-700 text-gray-200 rounded-md border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 rounded-md transition"
      >
        Add
      </button>
  </form>
  )

}