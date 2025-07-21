// components/EmailTemplate.jsx
import * as React from 'react';

export const EmailTemplate = ({ senderEmail, subject, message }) => (
  <div>
    <h1>New Message from your Portfolio!</h1>
    <p>From: {senderEmail}</p>
    <h2>Subject: {subject}</h2>
    <hr />
    <h3>Message:</h3>
    <p>{message}</p>
  </div>
);