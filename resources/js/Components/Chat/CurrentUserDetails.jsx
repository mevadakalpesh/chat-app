export default function CurrentUserDetails({user}){
  return (
      <div className="flex flex-col">
        <div className="font-semibold text-xl py-4">{user.name}</div>
        <img src="https://source.unsplash.com/L2cxSuKWbpo/600x600" className="object-cover rounded-xl h-64" alt=""/>
        <div className="font-semibold py-4">{user.created_at}</div>
        <div className="font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, perspiciatis!</div>
      </div>
    )
}