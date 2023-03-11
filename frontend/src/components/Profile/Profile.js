import React from 'react'
import DisplayPicture from './DisplayPicture'
const Profile = () => {
  return (
    <div className="bg-black text-green-500">
        <div className="flex flex-row">
            <DisplayPicture />
            <div className="w-1/2 bg-green-400">Profile</div>
        </div>

    
    </div>
  )
}

export default Profile