"use client";

import { useQuery } from "@tanstack/react-query";
import { Spinner } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import EtageD from "./etageD";
import EtageU from "./etageU";
import { FicheMembre } from "./ficheMembre";

interface props {
  id?: string;
  setLook?: any;
}
export const Plan = ({ id, setLook }: props) => {
  const { isLoading, data } = useQuery({
    queryKey: ["local_" + id],
    queryFn: () =>
      fetch("https://monpsy.ulb.be/ajax/localFiche.php?local=" + id)
        .then((res) => res.json())
        .then((data) => {
          return data;
        }),
  });

  const { isLoading: LoadingBureau, data: bureau } = useQuery({
    queryKey: ["listeBureau"],
    queryFn: () =>
      fetch("https://monpsy.ulb.be/ajax/autocomplete/bureau.php")
        .then((res) => res.json())
        .then((data) => {
          return data.datas;
        }),
  });

  if (!id) return null;
  const etage = parseInt(id.split(".")[2]);
  if (isNaN(etage)) return null;

  return (
    <>
      <div className="m-3">
        <h1>{!isNaN(etage) && id}</h1>
        <div className="row mb-3">
          {isLoading && <Spinner animation="border" variant="primary" />}
          {!isLoading &&
            data.users.length > 0 &&
            data.users.map((user: any) => {
              return (
                <div className="col-6" key={uuidv4()}>
                  <FicheMembre
                    ulbid={user.name.toLowerCase()}
                    setLook={setLook}
                    key={uuidv4()}
                  />
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
