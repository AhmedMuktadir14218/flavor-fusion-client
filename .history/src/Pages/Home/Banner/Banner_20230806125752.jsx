
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


const Banner = () => {
    return (
        <Carousel>
                <div>
                    <img src="src\assets\home\01.jpg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="src\assets\home\01.jpg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="assets/3.jpeg" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
    );
};

export default Banner;