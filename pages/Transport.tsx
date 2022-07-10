import SmallHeader from "../components/SmallHeader";
import Metro from "../components/Metro";
import Buses from "../components/Buses";
import Cable from "../components/Cable";
import Plane from "../components/Plane";
import { useState } from "react";

const Transport = () => {
    const [transport, setTransport] = useState<string>('');
    
    return (
        <div>
            <div>
                <SmallHeader />
            </div>
            <div className="flex flex-col mt-8">
                <div className="my-auto mx-auto">
                    <ul className="flex list-none justify-around gap-8">
                        <li className="facility" onClick={() => setTransport('Metro')}>Metro or Trains</li>
                        <li className="facility" onClick={() => setTransport('Buses')}>Buses</li>
                        <li className="facility" onClick={() => setTransport('Plane')}>Plane</li>
                        <li className="facility" onClick={() => setTransport('Cable')}>Cable Car</li>
                    </ul>
                </div>
                { (transport === '' || transport === 'Metro') && <Metro /> }
                { transport === 'Buses' && <Buses /> }
                { transport === 'Plane' && <Plane /> }
                { transport === 'Cable' && <Cable /> }
            </div>
        </div>
    )
}

export default Transport;