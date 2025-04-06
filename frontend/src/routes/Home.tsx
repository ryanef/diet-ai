import NavBar from '../components/Navbar';
import Hero from '../components/Hero';
import SignInCard from '../components/SignInCard';
import { useAuth } from "react-oidc-context";


export default function Home() {
  const auth = useAuth();
  const signOutRedirect = () => {
    const clientId = "6dltkgik4auo3gm05aglubfkrj";
    const logoutUri = "http://localhost:3000";
    const cognitoDomain = "https://us-east-1cbyfwhvoj.auth.us-east-1.amazoncognito.com";
    window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(logoutUri)}`;
  };

  return (
    <>
    <NavBar/>
    <main>
      <Hero />
    </main>
    {/* <button onClick={() => auth.signinRedirect()}>Sign in</button>
    <button onClick={() => signOutRedirect()}>Sign out</button> */}
    </>
  )
}

