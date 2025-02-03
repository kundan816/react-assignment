function ConfirmModal({ isOpen, onClose, onConfirm, title, description }) {
    if (!isOpen) return null
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded-lg shadow-xl max-w-sm w-full">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">{title}</h2>
          <p className="mb-6 text-gray-600">{description}</p>
          <div className="flex justify-end space-x-2">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors duration-200"
            >
              Cancel
            </button>
            <button
              onClick={onConfirm}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors duration-200"
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    )
  }
  
  export default ConfirmModal
  
  