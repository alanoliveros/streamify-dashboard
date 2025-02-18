import './App.scss'
import Dashboard from "@/app/dashboard/Dashboard.tsx";
import {ThemeProvider} from "@/components/theme-provider.tsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Users from "@/pages/Users.tsx";
import Artists from "@/pages/Artists.tsx";
import Revenue from "@/pages/Revenue.tsx";
import Settings from "@/pages/Settings.tsx";

function App() {

  return (
      <BrowserRouter>
          <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
              <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/user" element={<Users />} />
                  <Route path="/artists" element={<Artists />} />
                  <Route path="/revenue" element={<Revenue />} />
                  <Route path="/settings" element={<Settings />} />
              </Routes>
          </ThemeProvider>
      </BrowserRouter>
  )
}

export default App
