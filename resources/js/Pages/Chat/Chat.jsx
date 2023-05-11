import ChatSearching from '../../Components/Chat/ChatSearching';
import SearchUser from '../../Components/Chat/SearchUser';
import UserList from '../../Components/Chat/UserList';
import SenderMessage from '../../Components/Chat/message/SenderMessage';
import ReceiverMessage from '../../Components/Chat/message/ReceiverMessage';
import MessageInput from '../../Components/Chat/MessageInput';
import CurrentUserDetails from '../../Components/Chat/CurrentUserDetails';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import {useEffect,useState} from 'react';
export default function Chat({auth,props})
{
  const [data,setData] = useState({
    typingStatus :false,
  });
  
  const [messages,setMessage] = useState(props.messages);

  
  useEffect(() =>{
    console.log('props',props.messages);
    Echo.private('typing-status.'+auth.user.id).
    listen('TypingStatus',(e)=>{
      console.log('listen',e.data.status);
      setData({typingStatus:e.status});
    })
    
  },[]);
  
  useEffect(() => {
    Echo.private('get-message')
    .listen('MessageSent',(res)=>{
      
     setMessage([...messages,res.message]);
      console.log('data',messages);
    })
},[messages]);
  
  return (
      <AuthenticatedLayout user={auth.user} header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Chat</h2>}>
        <Head title="Chat" />

            <div className="container mx-auto shadow-lg rounded-lg">
              <ChatSearching />
              <div className="flex flex-row justify-between bg-white">
                  <div className="flex flex-col w-2/5 border-r-2 overflow-y-auto">
                    <SearchUser />
                    <UserList users={props.users} receiver_id={props.receiver_id} />
                  </div>
               
                  <div className="w-full px-5 flex flex-col justify-between">
                    {props.receiver_id == 0 ? 'Please Select user to chat' :
                    <>
                    <div className="flex flex-col mt-5">
                    { messages ?
                      messages.map((msg,index) => 
                          <>
                          { 
                            msg.sender_id == auth.user.id ?
                              <SenderMessage message={msg} />
                            : <ReceiverMessage message={msg} />
                          }
                          </>
                      )
                    :''}

                    </div>
                    <MessageInput 
                    typingStatus={data.typingStatus} 
                    receiver_id={props.receiver_id} 
                    sender_id={auth.user.id}/>
                    </>
                    }
                  </div>
                  
                  <div className="w-2/5 border-l-2 px-5">
                    <CurrentUserDetails user={auth.user} />
                  </div>
                </div>
            </div>
      </AuthenticatedLayout>
    );
}