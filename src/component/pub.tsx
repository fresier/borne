import { Carousel } from "react-bootstrap";

//position-absolute top-50 start-50 translate-middle


export default function Pub() {
    const timer = 5000

    return (<>
        <div 
            id='pub'
            style={{
                'position':'absolute',
                'zIndex':'50',
                //'top':'calc((100vh - 20px - 20px)/2)',
                'top':'0',

                'width':'100%',
                'height':'100vh',
                'lineHeight':'20px',
                //'backgroundColor':'#1F2A2E'
            }}>
    <div className='m-3'> 
      
    <Carousel>
      <Carousel.Item interval={timer}>
        <img className="img-thumbnail carousel-img" alt='help ?' width="100%" src='/assets/img/FAQ_2021_WebFac.jpg' />
      </Carousel.Item>
      <Carousel.Item interval={timer}>
        <img className="img-thumbnail carousel-img" alt='help ?' width="100%" src='/assets/img/FAQ_2021_WebFac.jpg' />
      </Carousel.Item>
      <Carousel.Item interval={timer}>
        <img className="img-thumbnail carousel-img" alt='help ?' width="100%" src='/assets/img/FAQ_2021_WebFac.jpg' />
      </Carousel.Item>
    </Carousel>

            </div>
        </div>

    </>)
}