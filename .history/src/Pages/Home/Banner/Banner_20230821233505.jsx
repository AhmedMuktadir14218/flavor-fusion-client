
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


const Banner = () => {
    return (
        <Carousel>
                <div>
                    <img src="src\assets\home\01.jpg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="src\assets\home\02.jpg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="src\assets\home\04.jpg" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src="src\assets\home\03.png" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src="src\assets\home\05.png" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src="src\assets\home\06.png" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
    );
};

export default Banner;