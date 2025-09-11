import getPub from "@/webservice/BORNE/getPub";
import { useQuery } from "@tanstack/react-query";
import { Carousel } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";

interface PubProps {
  setShowModal: any;
}

export default function Pub({ setShowModal }: PubProps) {
  const timer = 5000;

  const { isLoading, data } = useQuery({
    queryKey: ["pub"],
    queryFn: async () => await getPub(),
    staleTime: 1000 * 60 * 60, // 1 hour
    refetchOnWindowFocus: false,
  });

  if (isLoading) return <></>;
  if (!data || data.length === 0) return <></>;

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
          <div className="m-3 mt-5">
            <Carousel>
              {data?.items?.map((item: any) => (
                <Carousel.Item interval={timer} key={uuidv4()}>
                  <img
                    className="img-thumbnail carousel-img"
                    alt="help ?"
                    width="100%"
                    src={item.url}
                    onClick={() => setShowModal(true)}
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
