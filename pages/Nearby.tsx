import SmallHeader from "../components/SmallHeader";
import {useState} from 'react';
import Supermarket from '../components/Supermarket';
import PubandRestaurants from "../components/PubandRestaurants";
import Cafes from "../components/Cafes";
import Gym from "../components/Gym";
import ShoppingMall from "../components/ShoppingMall";
import PlacesOfInterest from "../components/PlacesOfInterest";

const Nearby = () => {
    const [place, setPlace] = useState<string>('');
    
    return (
        <div>
            <div>
                <SmallHeader />
            </div>
            <div className="flex flex-col mt-8">
                <div className="my-auto mx-auto">
                    <ul className="flex list-none justify-around gap-8">
                        <li className="facility" onClick={() => setPlace('Supermarket')}>Supermarket</li>
                        <li className="facility" onClick={() => setPlace('PubandRestaurants')}>Pubs & Restaurants</li>
                        <li className="facility" onClick={() => setPlace('Cafes')}>Cafes</li>
                        <li className="facility" onClick={() => setPlace('Gym')}>Gym</li>
                        <li className="facility" onClick={() => setPlace('Shopping')}>Shopping Mall</li>
                        <li className="facility" onClick={() => setPlace('PlacesOfInterest')}>Places of Interest</li>
                    </ul>
                </div>
                { (place === '' || place === 'Supermarket') && <Supermarket /> }
                { place === 'PubandRestaurants' && <PubandRestaurants /> }
                { place === 'Cafes' && <Cafes /> }
                { place === 'Gym' && <Gym /> }
                { place === 'Shopping' && <ShoppingMall /> }
                { place === 'PlacesOfInterest' && <PlacesOfInterest /> }
            </div>
        </div>
    )
}

export default Nearby;