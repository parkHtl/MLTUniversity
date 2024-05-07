import EmailIcon from '@mui/icons-material/Email';
import {Divider} from "@mui/material";
import CallIcon from '@mui/icons-material/Call';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
const Header = ()=>{
    return (
        <div className={'flex items-center w-full h-[50px] bg-blue-800 text-gray-300 text-[14px] px-[30px] py-[5px]'}>
            <div className={'flex w-[50%]'}>
                <span className={'mx-[8px]'}>Need help? </span>
                <Divider orientation={'vertical'} className={'bg-gray-400 h-[20px] mx-[8px]'}></Divider>
                <span className={'flex gap-[3px]'}><EmailIcon/>inqueries@gmail.com</span>
                <Divider orientation={'vertical'} className={'bg-gray-400 h-[20px] mx-[8px]'}></Divider>
                <span className={'flex gap-[3px]'}><CallIcon/>+94 11 123 1234</span>
                <Divider orientation={'vertical'} className={'bg-gray-400 h-[20px] mx-[8px]'}></Divider>
                <span className={'flex gap-[3px]'}><PhoneIphoneIcon/>+94 76 123 1234</span>
            </div>
            <div className={'flex w-[50%] justify-end gap-[10px]'}>
                <LinkedInIcon/>
                <FacebookIcon/>
                <InstagramIcon/>
            </div>
        </div>
    )
}

export default Header