import SmallHeader from "../components/SmallHeader";

const About = () => {
    return (
        <div>
            <SmallHeader />
            <div className="flex lg:mx-8 mx-5 lg:my-14 my-5 lg:gap-8 flex-col lg:flex-row">
                <div className="w-[300px] overflow-hidden mx-8 rounded-full">
                    <img src="francis.jpeg" alt="francis image" className="object-cover w-full h-full"/>
                </div>
                <div className="flex items-center leading-10 text-xl my-5 lg:my-0">
                    <ul>
                        <li>
                            {`Hi 👋, I'm Francis here from Singapore. Originally trained as a finance professional, I am currently a web developer and enjoy working from anywhere.`}
                        </li>
                        <li>
                            I hope you enjoy your stay in London at my humble flat 🏢 at 75 Explorers Court.
                        </li>
                        <li>
                            It would be hugely appreciated if you could leave me a 5-star ⭐⭐⭐⭐⭐ review on Airbnb if you have enjoyed your stay.
                        </li>
                        <li>
                            Feel free to reach out to me via Airbnb if you have any questions about the flat or London travel in general.
                        </li>
                    </ul>

                </div>
                
            </div>
        </div>
    );
}

export default About;