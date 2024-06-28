import { Metadata } from 'next'
import Image from 'next/image'
import { FaXTwitter, FaGithub, FaMedium} from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import Link from 'next/link'

export default  function Userdetails (){

    const userData = {
      username: "Zacharia Ndung'u",
      profession: "Software Engineer",
      image: "/app/resource/20240531_092322.jpg",
    };
  const socials = [
    {
      
    }
  ]
    return (
      <div className=''>
        <div className="rounded-full h-auto w-auto bg-gray-400 p-4 m-2">
          <Image
            src="/app/resource/20240531_092322.jpg"
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </div>
       <div className='text-center'>
       <div className='text-xl font-bold'> 
          <p>{userData.username}</p>
        </div>
        <div className='italic'>
          <p>{userData.profession}</p>
        </div>
        
      </div>
       <div className='flex flex-rows gap-8 justify-center items-center p-4 '>
       <Link href="/dashboard"><FaXTwitter/></Link>
       <Link href="/dashboard"><FaGithub/></Link>
       <Link href="/dashboard"><FaMedium/></Link>
       <Link href="/dashboard"><FaInstagram/></Link>
       </div>
       <div className="border-t border-gray-100 my-2"></div>
      </div>
    );
  }