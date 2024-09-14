import './App.css'
import BottomNavBar from './components/BottomNavBar'; // Import the navbar component

function App() {

  return (
    <>
        <div className="h-screen flex flex-col">
      {/* Main content area */}
      <div className="flex-grow p-4">
        <h1 className="text-center text-3xl font-bold">Welcome to My App</h1>
        {/* Other content goes here */}
      </div>
      {/* Bottom Navbar */}
      <BottomNavBar />
    </div>
    </>
  )
}

export default App
