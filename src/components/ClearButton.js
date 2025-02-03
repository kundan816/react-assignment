function ClearButton({ onClear }) {
    return (
      <button
        onClick={onClear}
        className="w-full mt-4 bg-red-500 text-white p-2 rounded hover:bg-red-600 transition-colors duration-200"
      >
        Clear All Moods
      </button>
    )
  }
  
  export default ClearButton
  
  