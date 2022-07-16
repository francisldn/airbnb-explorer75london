import londonhero from '../public/herolondon.jpg';
import Image from 'next/image';
import Link from 'next/link';
const Header = () => {
    return (
        <nav className="w-screen lg:max-w-screen background-image border-box"> 
            <div className="flex justify-around pt-8">
                <div>
                    <h1 className="text-3xl md:text-4xl cursor-pointer text-[white]">LondonExplorer75</h1>
                </div>
                
                <div className="hidden lg:block">
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
                
            </div>
            <div className="flex flex-col py-24 border-box">
                <h1 className="text-5xl md:text-7xl text-[white] text-center">Welcome to Explorer75</h1>
                <div className="lg:hidden bg-slate-400 w-fit mx-auto my-5 p-2 rounded-md border-gray-300 border-2"><h3><Link href="/About"><a> About Me</a></Link></h3></div>
            </div>
        </nav>
    );
}

export default Header;