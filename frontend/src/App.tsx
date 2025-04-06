import './App.css'
import { Container } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { useAuth } from "react-oidc-context";
import Home from './routes/Home';
import Dashboard from './routes/Dashboard';

function App() {
  const auth = useAuth();
  return (
    <>
      <Container maxWidth="lg">
      <CssBaseline/>
        {auth.isAuthenticated ? (<Dashboard/>) : (<Home/>)}
      </Container>
    </>
  )
}

export default App
