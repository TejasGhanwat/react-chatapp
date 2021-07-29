import React from 'react';

const Message = ({ message: { user, text }, name }) => {
  let isSentByCurrentUser = false;
  const trimmedName = name.trim().toLowerCase();

  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return isSentByCurrentUser ? (
    <div>
      <p>{trimmedName}</p>
      <div>
        <p style={{ color: '#2eb6d1' }}>{text}</p>
      </div>
    </div>
  ) : (
    <div>
      <p>{trimmedName}</p>
      <div>
        <p style={{ color: '#8b6f8c' }}>{text}</p>
      </div>
    </div>
  );
};

export default Message;
