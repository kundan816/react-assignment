import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"

function MoodAnalytics({ entries }) {
  const moodCounts = entries.reduce((acc, entry) => {
    acc[entry.mood.text] = (acc[entry.mood.text] || 0) + 1
    return acc
  }, {})

  const data = Object.entries(moodCounts).map(([mood, count]) => ({
    mood,
    count,
  }))

  const colors = {
    Happy: "#FBBF24",
    Neutral: "#60A5FA",
    Meh: "#9CA3AF",
    Sad: "#818CF8",
    Angry: "#F87171",
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Mood Analytics</h2>
      <p className="mb-4 text-gray-600">Total entries: {entries.length}</p>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="mood" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="count" fill={(entry) => colors[entry.mood]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default MoodAnalytics

