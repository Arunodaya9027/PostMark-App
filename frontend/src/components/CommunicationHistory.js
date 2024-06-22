import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CommunicationHistory = ({ isLoggedIn }) => {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    if (isLoggedIn) {
      const fetchEmails = async () => {
        try {
          const response = await axios.get('http://localhost:5000/api/comm');
          setEmails(response.data);
        } catch (error) {
          console.error(error);
        }
      };

      fetchEmails();
    }
  }, [isLoggedIn]); // Re-fetch data when login status changes

  return (
    <div>
      <h2>Communication History</h2>
      {isLoggedIn ? (
        <table>
          <thead>
            <tr>
              <th>From</th>
              <th>To</th>
              <th>Subject</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {emails.map(email => (
              <tr key={email.id}>
                <td>{email.from}</td>
                <td>{email.to}</td>
                <td>{email.subject}</td>
                <td>{email.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Please login to view communication history.</p>
      )}
    </div>
  );
};

export default CommunicationHistory;
