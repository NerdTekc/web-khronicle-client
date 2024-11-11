import Navbar from "./components/navbar"

function App() {
  return (
    <div className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white w-screen h-screen">
      <div className="w-full h-full container mx-auto flex flex-col">
        <Navbar />
        <div className="flex flex-grow justify-center flex-col gap-2 items-center">
          <h1 className="text-4xl font-bold">Web Khronocle</h1>
          <p className="text-center text-xl">A modern, responsive, and user-friendly web application for tracking and organizing your daily tasks.</p>
        </div>
      </div>
    </div>
  )
}

export default App
