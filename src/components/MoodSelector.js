const moods = [
    { emoji: "😊", text: "Happy", color: "bg-yellow-400" },
    { emoji: "😐", text: "Neutral", color: "bg-blue-400" },
    { emoji: "😒", text: "Meh", color: "bg-gray-400" },
    { emoji: "😢", text: "Sad", color: "bg-indigo-400" },
    { emoji: "😡", text: "Angry", color: "bg-red-400" },
  ]
  
  function MoodSelector({ onSelectMood }) {
    return (
      <div className="grid grid-cols-5 gap-2 mb-6">
        {moods.map((mood, index) => (
          <button
            key={index}
            onClick={() => onSelectMood(mood)}
            className={`${mood.color} text-white p-2 rounded-full hover:opacity-80 transition-opacity duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${mood.color.split("-")[1]}-500`}
          >
            <span className="text-2xl">{mood.emoji}</span>
          </button>
        ))}
      </div>
    )
  }
  
  export default MoodSelector
  
  