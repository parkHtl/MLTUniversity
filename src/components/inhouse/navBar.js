import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
  return (
    <div
      className={
        "w-full bg-white z-[100] sticky top-0 h-[70px] border-[1px] border-gray-300 py-[5px] flex flex-col md:flex-row items-center px-[20px] justify-between"
      }
    >
      <div className={"w-[70px] h-full "}>
        <Image
          className={
            "object-cover rounded-[10px] object-center border-gray-300 border-b"
          }
          src="/images/logo.png"
          width={200}
          height={200}
          alt="Logo"
        />
      </div>
      <div className={"w-full md:w-[60%] h-full flex justify-center md:justify-end"}>
        <ul
          className={
            "flex flex-col md:flex-row justify-center md:justify-around items-center h-full text-gray-600 font-[600] space-y-2 md:space-y-0 md:space-x-4"
          }
        >
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
          <li>
            <Link href="/aboutus">About Us</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
