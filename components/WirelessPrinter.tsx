import Link from "next/link";
import { useRouter } from "next/router";

const WirelessPrinter = () => {
    const router = useRouter();
    
    return (
        <div className="flex flex-col mx-auto lg:mx-20 my-14 w-screen">
             <h1 className="mx-8 mb-8 lg:mb-16 text-5xl">Wireless Printer</h1>
             <div className="flex flex-col lg:flex-row">
                <div className="w-[330px] lg:w-[600px] rounded-xl overflow-hidden mx-auto lg:mx-8">
                    <img src="printer.png" alt="wireless printer" className="object-cover w-full h-full"/>
                </div>
                <div className="mx-7 mt-5 lg:mt-0 lg:px-10 lg:mr-20">
                    <ul className="flex flex-col gap-5 list-disc text-lg leading-8">
                        <li><strong>Location:</strong> Wireless printer is located on top of the cupboard behind the dining table.</li>
                        <li><strong>How to use:</strong>
                            <ul className="list-disc ml-5">
                                <li>The printer is already switched on and connected to the wifi.</li>
                                <li>To use the printer from your <b>mobile phone</b>, you just need to connect to the same local wifi network.</li>
                                    <li className="ml-5">Refer to the <span className=" text-blue-600">Wifi</span> page to learn more.</li>
                                <li>You may find it useful to watch the video below:</li>
                                    <li className="list-none"><iframe width="300" height="200" src="https://www.youtube.com/embed/xwRFoe_yMt4" title="Xerox® B205/B210/B215 Mobile Print for iPhone and iPad" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></li>
                                <li>To use the printer from your <b>laptop</b>, you will need to first install the printer driver. Refer to the video below:</li>
                                <li className="flex flex-col lg:flex-row gap-12 lg:ml-5">
                                    <li className="list-none mt-4 lg:mt-0"><b>MacOS</b>
                                        <li className="list-none"><iframe width="300" height="200" src="https://www.youtube.com/embed/TxIYuWIwZCA" title="Xerox® B215 Print Drivers Install for Apple IOS" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></li>
                                    </li>
                                    <li className="list-none mt-4 lg:mt-0"><b>Windows</b>
                                        <li className="list-none"><iframe width="300" height="200" src="https://www.youtube.com/embed/ssouuYGaHVs" title="Xerox® B215 Print Drivers Install for Windows" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></li>
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