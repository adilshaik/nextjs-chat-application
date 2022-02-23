import React, { useState, useEffect, useContext } from 'react';

import { Context } from '../context';

import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

const ChatEngine = dynamic(() =>
  import('react-chat-engine').then((module) => module.ChatEngine)
);
const MessageFormSocial = dynamic(() =>
  import('react-chat-engine').then((module) => module.MessageFormSocial)
);

export default function Home() {
  const { username, secret } = useContext(Context);
  const [showChat, setShowChat] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (typeof document !== undefined) {
      setShowChat(true);
    }
  }, []);

  useEffect(() => {
    if (username === '' || secret === '') {
      router.push('/');
    }
  }, [username, secret]);

  if (!showChat) return <div />;

  return (
    <div className=''>
      <ChatEngine
        height='100vh'
        projectID='
          b4744a4b-accc-49d5-a193-179fe0549b22'
        userName={username}
        userSecret={secret}
        renderNewMessageForm={() => <MessageFormSocial />}
      />
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

        * {
          font-family: 'Roboto', sans-serif;
        }
        
        #new-chat-plus-button {
          background-color: transparent !important;
        }
        
        #new-chat-plus-button svg {
          font-size: 20px !important;
        }
        
        #msg-textarea {
          font-family: 'Roboto', sans-serif !important;
        }
        
        .ce-message-input-form {
          min-height: 50px !important;
          border-top: 1px solid #ccc !important;
        }
        
        .ce-message-input-form #msg-textarea {
          top: 12px !important;
        }
        
        #ce-send-message-button {
          display: block !important;
          bottom: 5px !important;
        }
        
        .send-icon {
          margin: auto !important;
        }
        
        .ce-message-input-form {
          height: 40px !important;
        }
        
        #ce-upload-document-icon {
          bottom: 15px !important;
        }
        
        #ce-ice-breaker-gif {
          margin: auto !important;
        }
        
        #ce-login-fail-gif {
          margin: auto !important;
        }
        
        input {
          font-family: 'Roboto', sans-serif !important;
          border-radius: 5px !important;
        }
        
        .anticon-delete {
          display: none;
        }        

        .anticon anticon-plus {
          background-color: red !important;
        }

        /* Chat List */
        .ce-wrapper {
          background-color: #4a5162 !important;
        }

        .ce-chats-container {
          font-family: Roboto, Sanserif;
          background-color: #4a5162 !important;
          border-radius: 0px !important;
        }

        .ce-chat-form-container {
          background-color: #4a5162 !important;
          color: white;
        }

        .ce-chat-card {
          margin: 0px 6px !important;
        }

        .ce-chat-card-loading-bar {
          background-color: #535a6d !important;
        }

        .ce-active-chat-card {
          background-color: #726dfe !important;
        }

        .ce-chat-title-text {
          color: white !important;
        }

        .ce-chat-subtitle-text {
          color: hsla(0, 0%, 100%, 0.568) !important;
        }

        .ce-chat-unread-dot {
          background-color: white !important;
        }

        /* Chat Feed */

        .ce-chat-title-container {
          background-color: #4a5162 !important;
          border-radius: 0px !important;
        }

        .ce-chat-feed-container {
          background-color: #4a5162 !important;
        }

        .ce-primary-button {
          background-color: #9a97fc !important;
        }

        .ce-message-date-text {
          color: hsla(0, 0%, 100%, 0.568) !important;
        }

        .ce-my-message-bubble {
          background-color: #726dfe !important;
        }

        .ce-my-message-sinding-bubble {
          background-color: #938ffe !important;
        }

        .ce-my-message-timestamp {
          color: #9a97fc !important;
        }

        .ce-their-message-timestamp {
          color: hsla(0, 0%, 100%, 0.568) !important;
        }

        #ce-send-message-button {
          background-color: #9a97fc !important;
        }

        #ce-ice-breaker-gif {
          max-width: 115px !important;
          margin-top: 30px !important;
        }

        .ce-social-message-form {
          background-color: #4a5162 !important;
        }

        .ce-message-input-form {
          padding-bottom: 10px !important;
        }

        #msg-textarea {
          width: calc(100% - 140px) !important;
          position: relative !important;
          top: 4px !important;
          border-width: 0px !important;
          background-color: #4a5162 !important;
          color: white !important;
        }
        #msg-textarea::placeholder {
          color: hsla(0, 0%, 100%, 0.568) !important;
        }

        #ce-upload-document-icon {
          color: white !important;
        }

        .ce-feed-container-bottom {
          height: '44px';
        }

        .ce-message-images-row {
          background-color: #4a5162 !important;
        }

        .ce-their-message-sender {
          color: hsla(0, 0%, 100%, 0.568) !important;
        }

        .ce-their-message-bubble {
          background-color: #535a6d !important;
          color: rgba(255, 255, 255, 0.705) !important;
        }

        /* Chat Settings */

        .ce-settings {
          background-color: #4a5162 !important;
          border-radius: 0px !important;
        }

        .ce-chat-title-form .ce-text-input {
          background-color: #4a5162;
          color: white;
        }

        .ce-section-title-container {
          background-color: #4a5162 !important;
          color: white;
        }

        #ce-options-drop-down {
          background-color: #4a5162 !important;
          color: white;
        }

        .ce-person-text {
          color: hsla(0, 0%, 100%, 0.568);
        }

        .ce-danger-button {
          background-color: #4a5162 !important;
          border: 1px solid #9a97fc !important;
          color: #9a97fc !important;
        }

        .ce-autocomplete-close {
          background-color: white !important;
          border-radius: 0px !important;
        }

        ::-webkit-scrollbar {
          width: 0; /* Remove scrollbar space */
          background: transparent; /* Optional: just make scrollbar invisible */
      }
      `}</style>
    </div>
  );
}
