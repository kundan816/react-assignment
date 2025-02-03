function MoodDisplay({ mood }) {
    return (
      <div className={`text-center mb-6 p-4 rounded-lg ${mood.color} text-white`}>
        <span className="text-4xl mr-2">{mood.emoji}</span>
        <span className="text-xl font-semibold">{mood.text}</span>
      </div>
    )
  }
  
  export default MoodDisplay
  
  