import React from 'react'
import "./Sidebar.css"
import SidebarChat from './SidebarChat';
import { Avatar, IconButton } from '@material-ui/core';
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar src="https://images.unsplash.com/photo-1578774296842-c45e472b3028?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzJ8fHRlZW5zfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/>
                <div className="sidebar__headerRight">
                  <IconButton className="icons">
                      <DonutLargeIcon/>
                  </IconButton>
                  <IconButton className="icons">
                      <ChatIcon/>
                  </IconButton>
                  <IconButton className="icons">
                      <MoreVertIcon/>
                  </IconButton>

                </div>
            </div>
            <div className="sidebar__search">
               <div className="sidebar__searchContainer">
                  <SearchOutlinedIcon/>
                  <input placeholder="Search or start new chat" type="text"/>
               </div>
            </div>
            <div className="sidebar__chats">
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
            </div>
        </div>
    )
}

export default Sidebar
