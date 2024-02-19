"use client";

import { useQuery } from "@tanstack/react-query";
import { Spinner } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import { FicheMembre } from "./ficheMembre";

interface props {
  id?: number;
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

  return (
    <>
      {isLoading && <Spinner animation="border" variant="primary" />}
      {!isLoading && data.users.length > 0 && (
        <div className="m-3">
          <h1>{id}</h1>
          {data.users.map((user: any) => {
            return (
              <FicheMembre
                ulbid={user.name.toLowerCase()}
                setLook={setLook}
                key={uuidv4()}
              />
            );
          })}
        </div>
      )}
    </>
  );
};
