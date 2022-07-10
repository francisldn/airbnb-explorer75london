import londonhero from '../public/herolondon.jpg';
import Image from 'next/image';
import Link from 'next/link';
const Header = () => {
    return (
        <nav className="flex flex-col max-w-screen background-image"> 
            <div className="flex justify-around pt-8">
                <div className="flex">
                    <h1 className="text-4xl cursor-pointer text-[white]">LondonExplorer75</h1>
                </div>
                
                <ul className="flex list-none gap-8 uppercase text-[white]">
                    <li className="menu-navigate">
                        <Link href="/About">About Me</Link>    
                    </li>
                    <li className="menu-navigate">
                        <Link href="/Nearby">{`What's Nearby`}</Link> 
                    </li>
                    <li className="menu-navigate">
                        <Link href="/Resources">Useful Resources</Link>
                    </li>
                    <li className="menu-navigate">
                       <Link href="Transport">Getting Around</Link>
                    </li>
                    <li className="menu-navigate">
                        <Link href="/Usermanual">User Manual</Link>
                    </li>
                </ul>
            </div>
            <div className="mx-auto py-24">
                <h1 className="text-7xl text-[white]">Welcome to Explorer75</h1>
            </div>
        </nav>
    );
}

export default Header;