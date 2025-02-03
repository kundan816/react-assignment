function Toast({ message, type }) {
    const bgColor =
      type === "success"
        ? "bg-green-500"
        : type === "warning"
          ? "bg-yellow-500"
          : type === "error"
            ? "bg-red-500"
            : "bg-blue-500"
  
    return (
      <div className={`fixed bottom-4 right-4 ${bgColor} text-white px-6 py-3 rounded-lg shadow-lg animate-fade-in-up`}>
        {message}
      </div>
    )
  }
  
  export default Toast
  
  