import React from 'react';

// servicers
import { AuthService } from './services/AuthService'

function App() {
  const authService = new AuthService();

  const handleLogin = async () => {
    const res = await authService.login();

    console.log('======handleLogin========', res)
  }

  const handleGetUser = async () => {
    const res = await authService.getUser();

    console.log('======handleGetUser========', res)
  }

  const handleCallApi = async () => {

  }

  return (
    <div className="App">
      <header className="App-header">
        <p> Test OIDC CLIENT</p>
        <button type="button" onClick={handleLogin}>Login oidc client</button>
        <button type="button" onClick={handleGetUser}>Get User</button>
        <button type="button" onClick={handleCallApi}>Call API</button>
      </header>
    </div>
  );
}

export default App;
