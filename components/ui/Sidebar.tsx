'use Client'

import Userdetails from "./Userdetails"

export default function Sidebar(){
    return( <div className="flex flex-col w-[300px] min-w-[300px] border-r min-h-screen p-4 "> 
    <div className="grow"><Userdetails/></div>
    <div className="grow"> Menu</div>
    <div className="grow">Socials</div>
    </div>
    )
}