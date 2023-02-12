import React from 'react';

function User({avatar, url, username}) {
  return (
    <div className='user'>
      <img src={avatar} alt="Profile-Img" width={50} height={50} />
      <a href={url} target="_blank" rel="noopener noreferrer">{username}</a>
    </div>
  )
}

export default User;