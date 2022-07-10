import SmallHeader from "../components/SmallHeader";
import { useState } from "react";
import Wifi from "../components/Wifi";
import WashingMachine from "../components/WashingMachine";
import CoffeeMachine from "../components/CoffeeMachine";
import WirelessPrinter from "../components/WirelessPrinter";
import Oven from "../components/Oven";
import Microwave from "../components/Microwave";
import Centralheating from "../components/Centralheating";

const Usermanual = () => {
    const [facility, setFacility] = useState<string>('');
    
    return (
        <div>
            <div>
                <SmallHeader />
            </div>
            <div className="flex flex-col mt-8">
                <div className="my-auto mx-auto">
                    <ul className="flex list-none justify-around gap-8">
                        <li className="facility" onClick={() => setFacility('Wifi')}>Wifi</li>
                        <li className="facility" onClick={() => setFacility('WashingMachine')}>Washing Machine</li>
                        <li className="facility" onClick={() => setFacility('CoffeeMachine')}>Coffee Machine</li>
                        <li className="facility" onClick={() => setFacility('WirelessPrinter')}>Wireless Printer</li>
                        <li className="facility" onClick={() => setFacility('Oven')}>Oven</li>
                        <li className="facility" onClick={() => setFacility('Microwave')}>Microwave</li>
                        <li className="facility" onClick={() => setFacility('Centralheating')}>Central Heating</li>
                    </ul>
                </div>
                { (facility === '' || facility === 'Wifi') && <Wifi /> }
                { facility === 'WashingMachine' && <WashingMachine />}
                { facility === 'WirelessPrinter' && <WirelessPrinter />}
                { facility === 'Oven' && <Oven />}
                { facility === 'Microwave' && <Microwave />}
                { facility === 'CoffeeMachine' && <CoffeeMachine />}
                { facility === 'Centralheating' && <Centralheating />}
            </div>
        </div>
        

    );
}

export default Usermanual;