import React from 'react';

const Header = () => {


  // logout function
  const logout = () => {
    window.localStorage.removeItem('token');
    window.location.href = '/login';
  };
  return (
    <div>
    <header className="bg-black text-green-500 flex justify-between items-center p-4">
      <div className="flex items-center">
        <div className="mr-4">
          <img src="https://via.placeholder.com/50x50" alt="User" className="w-10 h-10 rounded-full"/>
        </div>
        <div className="text-white text-lg font-medium">User</div>
      </div>
      <div className="flex items-center text-4xl font-mono pt-3 ">SpotiStatistics</div>
      <div className="flex items-center">
        <button className="bg-green-500 text-white px-4 py-2 rounded-lg mr-4 hover:bg-green-600">Top Artists</button>
        <button className="bg-green-500 text-white px-4 py-2 rounded-lg mr-4 hover:bg-green-600">Top Songs</button>
        <button className="bg-green-500 text-white px-4 py-2 rounded-lg mr-4 hover:bg-green-600">Top Albums</button>

        <button className="bg-green-500 text-white px-4 py-2 rounded-lg" onClick = {logout}>Logout</button>
      </div>
    </header>
    </div>
  );
};

export default Header;
