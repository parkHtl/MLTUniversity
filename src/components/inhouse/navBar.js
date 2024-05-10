import Image from "next/image";

const NavBar = () => {
    return (
        <div className={'w-full bg-white z-[100] sticky top-0 h-[70px] border-[1px] border-gray-300 py-[5px] flex items-center px-[20px] justify-between'}>
           <div className={'w-[70px] h-full '}>
               <Image
                   className={'object-cover rounded-[10px] object-center border-gray-300 border-b'}
                   src="/images/logo.png"
                   width={200}
                   height={200}
                   alt="Logo"
               />
           </div>
            <div className={'w-[40%] h-full '}>
                <ul className={'flex justify-around items-center h-full text-gray-600 font-[600]'}>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Partners</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">About Us</a></li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar;