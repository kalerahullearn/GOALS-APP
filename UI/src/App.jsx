
import { GoalRoutes } from './routes/GoalRoutes.jsx'
import './App.css'
import KanbanDashboard from './pages/KanbanDashboard'
import { Header } from './compoenents/Header.jsx'
import { Footer } from './compoenents/Footer.jsx'

function App() {

  return (
    <>
      <Header />
        <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-8">
          <GoalRoutes />
        </div>
      <Footer />
      
    </>
  )
}

export default App
