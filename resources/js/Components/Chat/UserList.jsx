import { Link } from '@inertiajs/react';
export default function UserList({users,receiver_id}){
  
  return (
    <>
        {
          users ? 
            users.map((user,index) => 
              <Link key={index} href={route('chat.index',user.id)}>
                <div className={`flex flex-row py-4 px-2 justify-center items-center border-b-2 ${ user.id  == receiver_id ? "bg-green-300" :''} `}>
                  <div className="w-1/4">
                    <img src="https://source.unsplash.com/_7LbC5J-jw4/600x600" className="object-cover h-12 w-12 rounded-full" alt=""/>
                  </div>
                  <div className="w-full">
                    <div className="text-lg font-semibold">{user.name} #{user.id}</div>
                    <span className="text-gray-500">Pick me at 9:00 Am</span>
                  </div>
                </div>
              </Link>
            )
          : '' 
        }
    </>
    )
}