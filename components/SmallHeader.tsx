import Link from "next/link";

const SmallHeader = () => {
    return (
        <nav className="flex flex-col w-screen h-20 bg-black">
            <div className="flex justify-around items-center my-auto">
                <div className="flex">
                    <Link href="/">
                        <a><h1 className="text-4xl cursor-pointer text-[white]">
                            LondonExplorer75
                        </h1>
                        </a>
                    </Link>
                </div>
                
                <ul className="hidden lg:flex mx-[5%] lg:mx-0 text-sm lg:text-base list-none gap-2 lg:gap-8 uppercase text-[white]">
                    <li className="menu-navigate">
                        <Link href="/About">About Me</Link>    
                    </li>
                    <li className="menu-navigate">
                        <Link href="/CheckIn">Check-In Guide</Link>
                    </li>
                    <li className="menu-navigate">
                        <Link href="/Nearby">{`What's Nearby`}</Link> 
                    </li>
                    <li className="menu-navigate">
                    <Link href="Transport">Getting Around</Link>
                    </li>
                    <li className="menu-navigate">
                        <Link href="/Usermanual">User Manual</Link>
                    </li>
                </ul>
      
            </div>
        </nav>
    );
}

export default SmallHeader;