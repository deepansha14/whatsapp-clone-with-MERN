import './App.css';
import { useEffect, useState } from 'react';
import Chat from './Chat';
import Sidebar from './Sidebar';
import Pusher from 'pusher-js';
import axios from './axios'

function App() {

  const [messages, setMessages] = useState([]);
  
  useEffect(()=>{
     axios.get('/messages/sync')
        .then(response => {
           setMessages(response.data);
        })
  },[]);

  useEffect(() => {
    const pusher = new Pusher('fd3a870ee766a78a48ee', {
      cluster: 'ap2'
    });

    const channel = pusher.subscribe('message');
    channel.bind("inserted", (data) =>{
      setMessages([...messages, data]);
    })

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    }
   
  }, [messages]);
  
  return (
    <div className="app">
      <div className="app__body">
         <Sidebar/>
         <Chat messages={messages}/>
      </div>
    </div>
  );
}

export default App;
