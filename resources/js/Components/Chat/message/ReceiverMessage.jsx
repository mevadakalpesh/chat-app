export default function ReceiverMessage({message}){
  return (
    <div className="flex justify-start mb-4">
        <img src="https://source.unsplash.com/vpOeXr5wmR4/600x600" className="object-cover h-8 w-8 rounded-full" alt=""/>
        <div className="ml-2 py-3 px-4 bg-gray-400 rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white">{message.message}</div>
    </div>
    )
}