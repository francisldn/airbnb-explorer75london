import Link from "next/link";
import { useRouter } from "next/router";

const WirelessPrinter = () => {
    const router = useRouter();
    
    return (
        <div className="flex flex-col mx-20 my-14">
            <h1 className="mx-auto mb-16 text-5xl">Wireless Printer</h1>
            <div className="flex">
                <div className="w-[400px] rounded-xl overflow-hidden mx-8">
                    <img src="printer.png" alt="wireless printer" className="object-cover w-full h-full"/>
                </div>
                <div className="px-10 mr-20 ">
                    <ul className="list-disc leading-8">
                        <li><strong>Location:</strong> Wireless printer is located on top of the cupboard behind the dining table.</li>
                        <li><strong>How to use:</strong>
                            <ul className="list-disc ml-5">
                                <li>The printer is already switched on and connected to the wifi.</li>
                                <li>To use the printer from your <b>mobile phone</b>, you just need to connect to the same local wifi network.</li>
                                    <li className="ml-5">Refer to the <span className="cursor-pointer text-blue-600 text-underline" onClick={() => router.reload('../pages/Usermanual.tsx')}>Wifi</span> page to learn more.</li>
                                <li>You may find it useful to watch the video below:</li>
                                    <li className="list-none"><iframe width="300" height="200" src="https://www.youtube.com/embed/xwRFoe_yMt4" title="Xerox® B205/B210/B215 Mobile Print for iPhone and iPad" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></li>
                                <li>To use the printer from your <b>laptop</b>, you will need to first install the printer driver. Refer to the video below:</li>
                                <li className="flex gap-12 ml-5">
                                    <li className="list-none"><b>MacOS</b>
                                        <li className="list-none"><iframe width="300" height="200" src="https://www.youtube.com/embed/TxIYuWIwZCA" title="Xerox® B215 Print Drivers Install for Apple IOS" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></li>
                                    </li>
                                    <li className="list-none"><b>Windows</b>
                                        <li className="list-none"><iframe width="300" height="200" src="https://www.youtube.com/embed/ssouuYGaHVs" title="Xerox® B215 Print Drivers Install for Windows" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></li>
                                    </li>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            
        </div>
    );
}

export default WirelessPrinter;