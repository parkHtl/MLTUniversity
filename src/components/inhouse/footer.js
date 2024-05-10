'use client';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
    return (
        <div className={'w-full flex bg-[#1F3042] text-gray-300 px-[20px] py-[50px] justify-around'}>

            {/*contact us*/}
            <div className={' w-[30%] '}>
                <h1 className={'text-3xl my-[20px]'}>MLT University</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore mollitia
                    totam voluptate voluptatum! Ab accusantium ad aliquam animi, aperiam consectetur,
                    exercitationem fugiat maxime necessitatibus nostrum odit quaerat quam sunt temporibus?
                </p>
            </div>

            {/*find us*/}
            <div className={'w-[30%]'}>
                <h1 className={'text-3xl my-[20px]'}>Find Us</h1>
                <div className={'flex gap-[15px]'}>
                    <LinkedInIcon/>
                    <FacebookIcon/>
                    <InstagramIcon/>
                </div>
            </div>
            {/*find us*/}
            <div className={'flex flex-col gap-[10px]'}>
                <h1 className={'text-3xl my-[20px]'}>Contact Us</h1>
                <div className={'flex gap-[10px]'}><LocationOnIcon/> <span>Put/22 address here</span></div>
                <div className={'flex gap-[10px]'}><EmailIcon/> <span>inqueries@gmail.com</span></div>
                <div className={'flex gap-[10px]'}><CallIcon/> <span>+94 11 123 1234</span></div>
                <div className={'flex gap-[10px]'}><PhoneIphoneIcon/> <span>+94 76 123 1234</span></div>
            </div>
        </div>
    );
}

export default Footer;
