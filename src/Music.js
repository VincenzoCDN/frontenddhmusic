import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const App = () => {
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);

  const navigate = useNavigate()

  const handleemailChange = (event) => {
    setemail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  function handleFormSubmit /* = async (event) => */(event) {
    event.preventDefault();
    let myStatus = ''

/*     if (isRegistered) {
      // Effettua la richiesta di accesso al server
      try {
        const response = await fetch('http://localhost:8080/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email, password })
        });

        const data = await response.json();

        console.log('Risposta dalla richiesta di accesso:', data);
      } catch (error) {
        console.error('Errore durante la richiesta di accesso:', error);
      }
    } else { 
      // Effettua la richiesta di registrazione al server
     
      try {
        const response = await fetch('http://localhost:8080/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email, password })
        });

        const data = await response.json();

        console.log('Risposta dalla richiesta di registrazione:', data);
      } catch (error) {
        console.error('Errore durante la richiesta di registrazione:', error);
      }
    }
   }; */

   fetch('http://localhost:8080/auth/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
   body: JSON.stringify({
     // your expected POST request payload goes here
email, password
      })
})
  .then(res => res.text())
  .then((data)=> {myStatus = data
    localStorage.setItem('My Token', data)})
  .then((data)=> {
    let myData = localStorage.getItem('My Token')
    
    if(myData !== 'User not found' && myData !=='Bad input' && myData !== 'Invalid password' ){alert('User logged in successfully')
    setIsRegistered(true)}else{alert(myStatus)}})

}



  return (
    <div>
      <h1>{isRegistered ? 'Accesso' : 'Registrazione'}</h1>
      <form onSubmit={handleFormSubmit}>
        <label>
          email:
          <input type="text" value={email} onChange={handleemailChange} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={handlePasswordChange} />
        </label>
        <br />
        {!isRegistered &&<button type="submit">Login</button>}
      </form>

      {isRegistered && <button onClick={()=> navigate('/music1')}>Personal Dashboard</button>}

    </div>
  );
};

export default App;
