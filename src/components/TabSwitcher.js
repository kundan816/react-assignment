function TabSwitcher({ activeTab, setActiveTab }) {
    return (
      <div className="flex mb-6">
        <button
          className={`flex-1 py-2 px-4 rounded-l-lg transition-colors duration-200 ${
            activeTab === "list" ? "bg-purple-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
          onClick={() => setActiveTab("list")}
        >
          Mood List
        </button>
        <button
          className={`flex-1 py-2 px-4 rounded-r-lg transition-colors duration-200 ${
            activeTab === "analytics" ? "bg-purple-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
          onClick={() => setActiveTab("analytics")}
        >
          Analytics
        </button>
      </div>
    )
  }
  
  export default TabSwitcher
  
  