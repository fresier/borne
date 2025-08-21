"use client";

import { setJWT } from "@/utils/jwtULB";
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
  const { isLoading, data } = useQuery({
    queryKey: [ulbid],
    queryFn: () =>
      fetch(
        "http://localhost:3000/api/borne/membre?fac=e&ulbid=" +
          ulbid +
          "&token=" +
          setJWT()
      )
        .then((res) => res.json())
        .then((data) => {
          console.log("FicheMembre", data);
          return data.members[0];
        }),
  });

  function handleLocal(local: string) {
    setLook({ look: local, type: "local" });
  }

  return (
    <>
      {isLoading && <Spinner animation="border" variant="primary" />}
      {!isLoading && data.ulbid && (
        <table key={uuidv4()}>
          <tbody>
            <tr>
              <td style={{ width: "35px" }}>
                <Avatar size="--4" email={data.email} />
              </td>
              <td key={uuidv4()} className="ps-3">
                <h5 className="mb-0">
                  {data.firstName} {data.lastName?.toUpperCase()}
                </h5>{" "}
                {data.roles?.map((r: any, index: number) => {
                  return (
                    <div key={uuidv4()}>
                      {index >= 1 && <hr />}
                      <b>{r.service}</b>
                      <br />
                      {r.titre && (
                        <h6 key={"titre-" + index} className="mb-0">
                          {r.titre}
                        </h6>
                      )}
                      <span key={"email-" + index}>
                        {r.email ? r.email : data.email}
                      </span>
                      <br />
                      <span key={"phone-" + index}>
                        {r.phone ? r.phone : data.phone}
                      </span>{" "}
                      <br />
                      {r.office && (
                        <span
                          className=" mb-1 badge text-bg-warning rounded-pill "
                          onClick={() => {
                            handleLocal(r.office);
                          }}
                        >
                          {r.office}
                        </span>
                      )}
                    </div>
                  );
                })}
              </td>
            </tr>
          </tbody>
        </table>
      )}
    </>
  );
};
