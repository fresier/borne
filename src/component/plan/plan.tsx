"use client";

import getBureaux from "@/webservice/BORNE/getBureaux";
import getOccupant from "@/webservice/BORNE/getOccupant";
import { useQuery } from "@tanstack/react-query";
import { Card, Spinner } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import { Avatar } from "../fiche/avatar";
import EtageD from "./etageD";
import EtageU from "./etageU";

interface props {
  id?: string;
  setLook?: any;
}
export const Plan = ({ id, setLook }: props) => {
  //console.log("Plan", setJWT(), id);
  const { isLoading, data } = useQuery({
    enabled: !!id,
    queryKey: ["local_" + id],
    queryFn: async () => (await getOccupant({ id: id! })).json,
  });

  const { isLoading: LoadingBureau, data: bureau } = useQuery({
    queryKey: ["listeBureau"],
    queryFn: async () => (await getBureaux()).json,
  });

  if (!id) return null;
  const etage = parseInt(id.split(".")[2]);
  if (isNaN(etage)) return null;
  console.log("Plan", data);
  return (
    <>
      <div className="m-3">
        <h1>{!isNaN(etage) && id}</h1>
        <div className="row mb-3">
          {isLoading && <Spinner animation="border" variant="primary" />}
          {!isLoading &&
            data.members.length > 0 &&
            data.members.map((u: any) => {
              return (
                <div className="col-6 " key={uuidv4()}>
                  <Card className="">
                    <Card.Body>
                      {/* <Card.Title>
                        {u.firstName} {u.lastName?.toUpperCase()}
                      </Card.Title> */}
                      <table key={uuidv4()}>
                        <tbody>
                          <tr>
                            <td style={{ width: "35px" }}>
                              <Avatar size="--4" email={u.email} />
                            </td>
                            <td key={uuidv4()} className="ps-3">
                              <h5 className="mb-0">
                                {u.firstName} {u.lastName?.toUpperCase()}
                              </h5>{" "}
                              {u.roles?.map((r: any, index: number) => {
                                return (
                                  <div key={uuidv4()}>
                                    {index >= 1 && <hr />}
                                    <b>{r.service}</b>
                                    <br />
                                    {r.titre && (
                                      <h6
                                        key={"titre-" + index}
                                        className="mb-0"
                                      >
                                        {r.titre}
                                      </h6>
                                    )}
                                    <span key={"email-" + index}>
                                      {r.email ? r.email : u.email}
                                    </span>
                                    <br />
                                    <span key={"phone-" + index}>
                                      {r.phone ? r.phone : u.phone}
                                    </span>
                                  </div>
                                );
                              })}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </Card.Body>
                  </Card>
                </div>
              );
            })}
        </div>
        {LoadingBureau && <Spinner animation="border" variant="primary" />}
        {!LoadingBureau && etage >= 4 && (
          <EtageD etage={etage} bureau={bureau} id={id} setLook={setLook} />
        )}
        {!LoadingBureau && etage === 3 && (
          <EtageU etage={etage} bureau={bureau} id={id} setLook={setLook} />
        )}
      </div>
    </>
  );
};
