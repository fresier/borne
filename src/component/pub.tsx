import { setJWT } from "@/utils/jwtULB";
import { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";

export default function Pub() {
  const timer = 5000;

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://monpsy.ulb.be/ajax/annonce.php?token=" + setJWT())
      .then((res) => res.json())
      .then((data) => {
        if (!data.error) setData(data.annonces);
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
            top: "0",
            width: "100%",
            height: "100vh",
            lineHeight: "20px",
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
