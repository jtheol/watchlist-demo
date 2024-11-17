"use client"
import { Watch } from "@/types"
import { useState, ChangeEvent } from "react"
import { editWatch } from "../server-actions/editWatch"

export default function EditWatch({watch} : {watch: Watch}) {
  const [showModal, setShowModal] = useState(false)
  const [formData, setFormData] = useState({
    brand: watch.brand,
    model: watch.model,
    reference_num: watch.reference_num
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => setFormData({...formData, [e.target.name]: e.target.value})

  return (
    <div>
      <button 
        onClick={() => setShowModal(true)}
        className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
      >
        Edit
      </button>
      { showModal && (
        <div className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 ${showModal ? 'visible' : 'invisible'}`}>
        <div className="relative bg-gray-800 text-gray-200 p-6 rounded-lg shadow-lg w-full max-w-lg">
          {/* Close Button */}
          <button
            onClick={() => setShowModal(false)}
            className="absolute top-3 right-3 text-gray-400 hover:text-gray-200 text-2xl focus:outline-none"
          >
            &times;
          </button>
      
          {/* Form */}
          <form action={editWatch} onSubmit={() => setShowModal(false)} className="space-y-4">
            <input type="hidden" name="id" id={watch.id} value={watch.id} />
      
            {/* Brand Input */}
            <div>
              <label htmlFor="brand" className="block text-sm font-medium text-gray-400 mb-2">
                Brand
              </label>
              <input
                type="text"
                name="brand"
                id="brand"
                value={formData.brand}
                onChange={handleChange}
                className="w-full p-3 bg-gray-700 text-gray-200 rounded-md border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
      
            {/* Model Input */}
            <div>
              <label htmlFor="model" className="block text-sm font-medium text-gray-400 mb-2">
                Model
              </label>
              <input
                type="text"
                name="model"
                id="model"
                value={formData.model}
                onChange={handleChange}
                className="w-full p-3 bg-gray-700 text-gray-200 rounded-md border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
      
            {/* Reference Number Input */}
            <div>
              <label htmlFor="reference_num" className="block text-sm font-medium text-gray-400 mb-2">
                Reference Number
              </label>
              <input
                type="text"
                name="reference_num"
                id="reference_num"
                value={formData.reference_num}
                onChange={handleChange}
                className="w-full p-3 bg-gray-700 text-gray-200 rounded-md border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
      
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-md transition"
            >
              Update Watch
            </button>
          </form>
        </div>
      </div>
      )}
    </div>
  )
}