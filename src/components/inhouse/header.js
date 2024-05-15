import EmailIcon from '@mui/icons-material/Email';
import { Divider } from "@mui/material";
import CallIcon from '@mui/icons-material/Call';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const Header = () => {
    return (
        <div className={'flex flex-col md:flex-row items-center gap-3 w-full  md:h-[50px] bg-[#1F3042] text-gray-300 text-[14px] px-[10px] py-[5px] md:px-[30px]'}>
            <div className={'flex flex-wrap justify-center md:justify-start w-full md:w-[50%] gap-2 md:gap-[8px]'}>
                <span className={'mx-[8px] md:mx-0'}> www.pgc.edu.lk </span>
                {/* <Divider orientation={'vertical'} className={'bg-gray-400 h-[20px] mx-[8px] md:mx-0'}></Divider> */}
                {/* <span className={'flex gap-[3px]'}><EmailIcon/></span> */}
                {/* <Divider orientation={'vertical'} className={'bg-gray-400 h-[20px] mx-[8px] md:mx-0'}></Divider> */}
                <span className={'flex gap-[3px]'}><CallIcon/>+94 112 502 012 / 114 199 333</span>
                {/* <Divider orientation={'vertical'} className={'bg-gray-400 h-[20px] mx-[8px] md:mx-0'}></Divider> */}
                <span className={'flex gap-[3px]'}><PhoneIphoneIcon/>+94 701 566 566</span>
            </div>
            <div className={'hidden md:flex justify-center md:justify-end w-[50%] gap-5 md:gap-[10px]'}>
                <LinkedInIcon className={'hover:scale-110 cursor-pointer transform-gpu transition-all duration-300'}/>
                <FacebookIcon className={'hover:scale-110 cursor-pointer transform-gpu transition-all duration-300'}/>
                <InstagramIcon className={'hover:scale-110 cursor-pointer transform-gpu transition-all duration-300'}/>
            </div>
            <div className={'md:hidden flex justify-center w-[50%] gap-5 md:gap-[10px]'}>
                <LinkedInIcon className={'hover:scale-110 cursor-pointer transform-gpu transition-all duration-300'}/>
                <FacebookIcon className={'hover:scale-110 cursor-pointer transform-gpu transition-all duration-300'}/>
                <InstagramIcon className={'hover:scale-110 cursor-pointer transform-gpu transition-all duration-300'}/>
            </div>
        </div>
    );
}

export default Header;
