import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import App from './App.tsx'
import About from './routes/About.tsx';
import Dashboard from './routes/Dashboard.tsx';
import Login from './routes/Login.tsx';
import { ThemeProvider } from "@/components/theme-provider"


createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <ThemeProvider>
        <BrowserRouter>
        <Routes>

          <Route  index element={<App />} />
          <Route  path="/about" element={<About />} />
          <Route  path="/dashboard" element={<Dashboard />} />
          <Route  path="/login" element={<Login />} />
        </Routes>
        </BrowserRouter>
      </ThemeProvider>
  </StrictMode>,
)
