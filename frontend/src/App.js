import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/auth/Login';
import CommunicationHistory from './components/CommunicationHistory';
import ComposeEmail from './components/ComposeEmail';
import Home from './views/Home'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  // const [user, setUser] = useState(null);
  // const [token, setToken] = useState(null);
  // const [communicationHistory, setCommunicationHistory] = useState([]);
  // const [composeEmail, setComposeEmail] = useState(false);
  // const [email, setEmail] = useState({
  //   to: '',
  //   subject: '',
  //   body: '',
  // });
  // const [emailError, setEmailError] = useState({
  //   to: '',
  //   subject: '',
  //   body: '',
  // });
  // const [emailSuccess, setEmailSuccess] = useState(false);
  // const [emailSending, setEmailSending] = useState(false);
  // const [emailSent, setEmailSent] = useState(false);
  // const [emailErrorSending, setEmailErrorSending] = useState(false);
  // const [emailErrorSendingMessage, setEmailErrorSendingMessage] = useState('');
  // const [emailErrorSendingCode, setEmailErrorSendingCode] = useState('');
  // const [emailErrorSendingType, setEmailErrorSendingType] = useState('');
  // const [emailErrorSendingStatus, setEmailErrorSendingStatus] = useState('');
  // const [emailErrorSendingHeaders, setEmailErrorSendingHeaders] = useState('');
  // const [emailErrorSendingConfig, setEmailErrorSendingConfig] = useState('');
  // const [emailErrorSendingRequest, setEmailErrorSendingRequest] = useState('');
  // const [emailErrorSendingResponse, setEmailErrorSendingResponse] = useState('');

  // const [emailErrorSendingData, setEmailErrorSendingData] = useState('');
  // const [emailErrorSendingDataMessage, setEmailErrorSendingDataMessage] = useState('');
  // const [emailErrorSendingDataCode, setEmailErrorSendingDataCode] = useState('');
  // const [emailErrorSendingDataType, setEmailErrorSendingDataType] = useState('');
  // const [emailErrorSendingDataStatus, setEmailErrorSendingDataStatus] = useState('');
  // const [emailErrorSendingDataHeaders, setEmailErrorSendingDataHeaders] = useState('');
  // const [emailErrorSendingDataConfig, setEmailErrorSendingDataConfig] = useState('');
  // const [emailErrorSendingDataRequest, setEmailErrorSendingDataRequest] = useState('');
  // const [emailErrorSendingDataResponse, setEmailErrorSendingDataResponse] = useState('');
  // const [emailErrorSendingDataError, setEmailErrorSendingDataError] = useState('');
  // const [emailErrorSendingDataErrorType, setEmailErrorSendingDataErrorType] = useState('');
  // const [emailErrorSendingDataErrorStatus, setEmailErrorSendingDataErrorStatus] = useState('');
  // const [emailErrorSendingDataErrorHeaders, setEmailErrorSendingDataErrorHeaders] = useState('');
  // const [emailErrorSendingDataErrorConfig, setEmailErrorSendingDataErrorConfig] = useState('');
  // const [emailErrorSendingDataErrorRequest, setEmailErrorSendingDataErrorRequest] = useState('');
  // const [emailErrorSendingDataErrorResponse, setEmailErrorSendingDataErrorResponse] = useState('');
  // const [emailErrorSendingDataErrorData, setEmailErrorSendingDataErrorData] = useState('');
  // const [emailErrorSendingDataErrorDataMessage, setEmailErrorSendingDataErrorDataMessage] = useState('');
  // const [emailErrorSendingDataErrorDataCode, setEmailErrorSendingDataErrorDataCode] = useState('');
  // const [emailErrorSendingDataErrorDataType, setEmailErrorSendingDataErrorDataType] = useState('');
  // const [emailErrorSendingDataErrorDataStatus, setEmailErrorSendingDataErrorDataStatus] = useState('');
  // const [emailErrorSendingDataErrorDataHeaders, setEmailErrorSendingDataErrorDataHeaders] = useState('');
  // const [emailErrorSendingDataErrorDataConfig, setEmailErrorSendingDataErrorDataConfig] = useState('');
  // const [emailErrorSendingDataErrorDataRequest, setEmailErrorSendingDataErrorDataRequest] = useState('');
  // const [emailErrorSendingDataErrorDataResponse, setEmailErrorSendingDataErrorDataResponse] = useState('');

  // (Optional) Fetch user login status from local storage or backend on app load

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/" element={<Home />} />
        <Route
          path="/communication"
          element={
            <CommunicationHistory isLoggedIn={isLoggedIn} />
          }
        />
        <Route
          path="/compose"
          element={<ComposeEmail isLoggedIn={isLoggedIn} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
