import {useState} from 'react';
import axios from 'axios';
export default function MessageInput({typingStatus,receiver_id,sender_id}){
  const [data,setData] = useState({
    inputMessage:''
  })
  
  function TypingStatus(status){
    console.log('receiver_id',receiver_id);
    axios.post(route('fire-event'),{
      event:'TypingStatus',
      data:{status:status,receiver_id:receiver_id}
    }).then((res) => { console.log('res'); });
  }
  function HeandleForm(e){
    e.preventDefault();
    if(data.inputMessage && data.inputMessage != ''){
      axios.post(route('fire-event'),{
      event:'MessageSent',
      data:{
        message:data.inputMessage,
        sender_id:sender_id,
        receive_id:receiver_id,
      }
    }).then((res) => { 
      setData({inputMessage:' '});
    });
    }
    
  }
  return (
      <div className="py-5">
        <form onSubmit={HeandleForm}>
          <div>
          { typingStatus == true ? <p>Typing... </p> : ''}
          <input 
          className="w-full bg-gray-300 py-5 px-3 rounded-xl" 
          type="text" 
          value={data.inputMessage}
          onFocus={(e) => TypingStatus(true)}
          onBlur={(e) => TypingStatus(false)}
          onChange={(e) => setData({inputMessage:e.target.value})}
          placeholder="type your message here..."
          />
          
          </div>
        </form>
      </div>
    )
}