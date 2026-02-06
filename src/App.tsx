import { Outlet } from "react-router"

export function App() {
  return (
    <div className="w-full h-full bg-slate-800 font-sans px-8 py-4 flex items-center justify-center">
      <Outlet />
    </div>
  )
}
