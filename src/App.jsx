import { useState, useEffect } from "react"
import MoodSelector from "./components/MoodSelector"
import MoodDisplay from "./components/MoodDisplay"
import MoodList from "./components/MoodList"
import ClearButton from "./components/ClearButton"
import TabSwitcher from "./components/TabSwitcher"
import MoodAnalytics from "./components/MoodAnalytics"
import ConfirmModal from "./components/ConfirmModal"
import Toast from "./components/Toast"

function App() {
  const [moodEntries, setMoodEntries] = useState([])
  const [currentMood, setCurrentMood] = useState(null)
  const [deletedMoods, setDeletedMoods] = useState([])
  const [activeTab, setActiveTab] = useState("list")
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false)
  const [toast, setToast] = useState(null)

  useEffect(() => {
    const storedMoods = localStorage.getItem("moodEntries")
    if (storedMoods) {
      setMoodEntries(JSON.parse(storedMoods))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("moodEntries", JSON.stringify(moodEntries))
  }, [moodEntries])

  const showToast = (message, type = "info") => {
    setToast({ message, type })
    setTimeout(() => setToast(null), 3000)
  }

  const addMoodEntry = (mood) => {
    const newEntry = {
      id: Date.now(),
      date: new Date().toLocaleString(),
      mood: mood,
    }
    setMoodEntries([newEntry, ...moodEntries])
    setCurrentMood(mood)
    showToast(`Mood added: ${mood.emoji} ${mood.text}`, "success")
  }

  const deleteMoodEntry = (id) => {
    const deletedMood = moodEntries.find((entry) => entry.id === id)
    setDeletedMoods([deletedMood, ...deletedMoods])
    setMoodEntries(moodEntries.filter((entry) => entry.id !== id))
    showToast("Mood entry deleted", "warning")
  }

  const undoDelete = () => {
    if (deletedMoods.length > 0) {
      const [lastDeleted, ...remainingDeleted] = deletedMoods
      setMoodEntries([lastDeleted, ...moodEntries])
      setDeletedMoods(remainingDeleted)
      showToast("Last deleted mood restored", "info")
    }
  }

  const clearMoods = () => {
    setIsConfirmModalOpen(true)
  }

  const confirmClearMoods = () => {
    setDeletedMoods([...moodEntries, ...deletedMoods])
    setMoodEntries([])
    setCurrentMood(null)
    setIsConfirmModalOpen(false)
    showToast("All moods cleared", "warning")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 py-8">
      <div className="container mx-auto p-4 max-w-md bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">Mood Tracker</h1>
        <MoodSelector onSelectMood={addMoodEntry} />
        {currentMood && <MoodDisplay mood={currentMood} />}
        <TabSwitcher activeTab={activeTab} setActiveTab={setActiveTab} />
        {activeTab === "list" && (
          <>
            <MoodList
              entries={moodEntries}
              onDelete={deleteMoodEntry}
              onUndo={undoDelete}
              canUndo={deletedMoods.length > 0}
            />
            {moodEntries.length > 0 && <ClearButton onClear={clearMoods} />}
          </>
        )}
        {activeTab === "analytics" && <MoodAnalytics entries={moodEntries} />}
        <ConfirmModal
          isOpen={isConfirmModalOpen}
          onClose={() => setIsConfirmModalOpen(false)}
          onConfirm={confirmClearMoods}
          title="Clear All Moods"
          description="Are you sure you want to clear all mood entries? This action cannot be undone."
        />
      </div>
      {toast && <Toast message={toast.message} type={toast.type} />}
    </div>
  )
}

export default App

