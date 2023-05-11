export default function  SenderMessage({message}){
  return (
      <div className="flex justify-end mb-4">
          <div className="mr-2 py-3 px-4 bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white"> {message.message}</div>
          <img src="https://source.unsplash.com/vpOeXr5wmR4/600x600" className="object-cover h-8 w-8 rounded-full" alt=""/>
      </div>
    )
}