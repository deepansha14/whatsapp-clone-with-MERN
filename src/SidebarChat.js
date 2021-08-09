import { Avatar } from '@material-ui/core'
import React from 'react'
import "./SidebarChat.css"

function SidebarChat() {
    return (
        <div className="sidebarChat">
           <Avatar/> 
           <div className="sidebarChat__info">
              <h3>Room name</h3>
              <p>This was the last message.</p>
           </div>
        </div>
    )
}

export default SidebarChat
