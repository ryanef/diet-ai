import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import { StyledEngineProvider } from '@mui/material/styles';
import { AuthProvider } from "react-oidc-context";
import './index.css'
import App from './App.tsx'
import About from './routes/About.tsx';
import Chat from './routes/Chat.tsx';
import Dashboard from './routes/Dashboard.tsx';

const cognitoAuthority = import.meta.env.VITE_COGNITO_AUTHORITY
const cognitoClientID = import.meta.env.VITE_COGNITO_CLIENT_ID

const cognitoAuthConfig = {
  authority: cognitoAuthority,
  client_id: cognitoClientID,
  redirect_uri: "http://localhost:3000",
  response_type: "code",
  scope: "phone openid email",
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StyledEngineProvider injectFirst>
    <AuthProvider {...cognitoAuthConfig}>
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<App />} />
              <Route path="/about" element={<About />} />
              <Route path="/chat" element={<Chat />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </BrowserRouter>
    </AuthProvider> 
  </StyledEngineProvider>
  </StrictMode>,
)
