// src/NotificationInbox.js
import React, { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NotificationInbox = () => {
  useEffect(() => {
    const handleEvent = (event) => {
      toast(event.detail.message);
    };

    window.addEventListener('SuprSendNotification', handleEvent);

    return () => {
      window.removeEventListener('SuprSendNotification', handleEvent);
    };
  }, []);

  return <ToastContainer />;
};

export default NotificationInbox;
