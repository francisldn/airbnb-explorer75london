import SmallHeader from "../components/SmallHeader";

const Resources = () => {
    return (
        <div>
            <SmallHeader />
            <div className="mt-10 mx-32">
                <h1 className="text-center mb-8 text-5xl">Useful Resources</h1>
                <ul className="list-disc leading-10 text-lg">
                    <li><a target="_blank" href="https://www.timeout.com/london" rel="noreferrer" className="text-underline">Timeout London</a></li>
                    <li><a target="_blank" href="https://www.visitlondon.com/" rel="noreferrer" className="text-underline">Visit London</a></li>
                    <li><a target="_blank" href="https://secretldn.com/" rel="noreferrer" className="text-underline">Secret London</a></li>
                    <li><b>Walking tours:</b>
                        <ul className="ml-5 list-disc">
                            <li><a target="_blank" href="https://www.cityoflondon.gov.uk/things-to-do/walks-and-itineraries/guided-walks-and-tours" rel="noreferrer" className="text-underline">City of London Guided Walks</a></li>
                            <li><a target="_blank" href="https://www.timeout.com/london/attractions/london-walking-tours" rel="noreferrer" className="text-underline">Timeout recommended walking tours</a></li>
                        </ul>
                    </li>
                    <li><a target="_blank" href="https://www.met.police.uk/ro/report/ocr/af/how-to-report-a-crime/" rel="noreferrer" className="text-underline"> London Met Police </a></li>
                    <li><a target="_blank" href="https://www.londontheatre.co.uk/" rel="noreferrer"  className="text-underline">London Theatre/Musicals booking</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Resources; 