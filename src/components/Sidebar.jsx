import { HiOutlineHashtag, HiOutlineHome,HiOutlinePhotograph, HiOutlineUserGroup } from 'react-icons/hi';
import {NavLink} from 'react-router-dom';
const links = [
    { name: 'Discover', to: '/', icon: HiOutlineHome, },
    { name: 'Around You', to: '/', icon: HiOutlinePhotograph , },
    { name: 'Top Artists', to: '/', icon: HiOutlineUserGroup , },
    { name: 'Top Charts', to: '/', icon: HiOutlineHashtag , },
  ];
const Sidebar=({handleClick})=>{
    return <div className="w-[200px] bg-[#191624] h-screen  ">
        <div className="w-full flex justify-center p-2">
            <img src="./images/logo.svg" className="w-20" alt="hi"/>
        </div>
        <div className='flex flex-col gap-4 mt-12 p-4'>
          {links.map((link)=>{
            return <NavLink
            key={link.name}
            to={link.to} end
            className={({isActive})=> isActive?"flex gap-2 text-cyan-400":"flex gap-2 text-gray-400 hover:text-cyan-400"}
            onClick={handleClick}
            >
                <link.icon className='text-white text-xl'/>
                {link.name}
            </NavLink>
          })}
        </div>
    </div>
}

export default Sidebar;