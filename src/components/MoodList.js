function MoodList({ entries, onDelete, onUndo, canUndo }) {
    return (
      <div>
        <ul className="space-y-2 mb-4">
          {entries.map((entry) => (
            <li
              key={entry.id}
              className={`${entry.mood.color} p-3 rounded-lg flex justify-between items-center text-white`}
            >
              <span>
                {entry.date} {entry.mood.emoji} {entry.mood.text}
              </span>
              <button
                onClick={() => onDelete(entry.id)}
                className="text-white hover:text-red-200 transition-colors duration-200"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
        {canUndo && (
          <button
            onClick={onUndo}
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors duration-200"
          >
            Undo Last Delete
          </button>
        )}
      </div>
    )
  }
  
  export default MoodList
  
  