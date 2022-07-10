import SmallHeader from "../components/SmallHeader";
import PubandRestaurants from '../components/PubandRestaurants';
import Cafes from "../components/Cafes";

const Eatdrinks = () => {
    return (
        <div>
           <SmallHeader />
           <div>
            <PubandRestaurants />
           </div>
           <hr className="py-1"/>
           <div>
                <Cafes />
           </div>
            
        </div>
    );
}

export default Eatdrinks;