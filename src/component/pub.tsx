import { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";

//position-absolute top-50 start-50 translate-middle

export default function Pub() {
  const timer = 5000;

  const [data, setData] = useState([]); //data from api

  //load images grom api
  useEffect(() => {
    fetch("https://monpsy.ulb.be/ajax/annonce.php")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

  return (
    <>
      {data && (
        <div
          id="pub"
          style={{
            position: "absolute",
            zIndex: "50",
            //'top':'calc((100vh - 20px - 20px)/2)',
            top: "0",

            width: "100%",
            height: "100vh",
            lineHeight: "20px",
            //'backgroundColor':'#1F2A2E'
          }}
        >
          <div className="m-3">
            <Carousel>
              {data.map((item) => (
                <Carousel.Item interval={timer} key={uuidv4()}>
                  <img
                    className="img-thumbnail carousel-img"
                    alt="help ?"
                    width="100%"
                    src={item}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </div>
      )}
    </>
  );
}
