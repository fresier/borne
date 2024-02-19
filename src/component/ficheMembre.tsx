"use client";

import { useQuery } from "@tanstack/react-query";
import { Spinner } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import { Avatar } from "./avatar";

interface props {
  ulbid: string;
  commentaire?: string;
  setLook?: any;
}
export const FicheMembre = ({ ulbid, commentaire, setLook }: props) => {
  console.log("FicheMembre", ulbid, commentaire);
  const { isLoading, data } = useQuery({
    queryKey: [ulbid],
    queryFn: () =>
      fetch("https://monpsy.ulb.be/ajax/userFiche.php?ulbid=" + ulbid)
        .then((res) => res.json())
        .then((data) => {
          return data;
        }),
  });

  function handleLocal(local: string) {
    setLook({ look: local, type: "local" });
  }

  return (
    <>
      {isLoading && <Spinner animation="border" variant="primary" />}
      {!isLoading && data.nom && (
        <table key={uuidv4()}>
          <tbody>
            <tr>
              <td style={{ width: "35px" }}>
                <Avatar size="--3" src={"https:" + data.photo} />
              </td>
              <td key={uuidv4()}>
                {commentaire && <h5 className="ms-1">{commentaire}</h5>}
                <span className="ms-1">
                  {data.prenom} {data.nom?.toUpperCase()}
                </span>
                <br />
                <span className="ms-1 text-primary link-underline">
                  {" "}
                  <u>{data.email}</u>
                </span>
                <br />
                <span className="ms-1 badge rounded-pill text-bg-light">
                  {data.tel}
                </span>
                <a
                  className="ms-1 badge rounded-pill text-bg-light text-decoration-none"
                  onClick={() => {
                    handleLocal(data.bureau);
                  }}
                >
                  {data.bureau}
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      )}
    </>
  );
};
