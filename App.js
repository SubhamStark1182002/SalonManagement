
import './App.css';
import Header from './compenent/header';
import { GoogleOAuthProvider } from '@react-oauth/google';


function App() {
  return (
    <div className="App">
      <GoogleOAuthProvider clientId="456925515667-6qt8qoojepuv7ls8s7o7b1r679lslphu.apps.googleusercontent.com">
        <Header/>
        <Body/>
      </GoogleOAuthProvider>
    </div>
  );
}

export default App;
