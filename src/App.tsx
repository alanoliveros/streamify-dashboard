import './App.scss'
import Dashboard from "@/app/dashboard/Dashboard.tsx";
import {ThemeProvider} from "@/components/theme-provider.tsx";

function App() {

  return (
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Dashboard/>
      </ThemeProvider>
  )
}

export default App
