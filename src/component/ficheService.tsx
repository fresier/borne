"use client";

import { useQuery } from "@tanstack/react-query";
import { Spinner } from "react-bootstrap";
import { FicheMembre } from "./ficheMembre";

interface FicheServiceProps {
  id: string;
}

export default function FicheService({ id }: FicheServiceProps) {
  const { isLoading, data } = useQuery({
    queryKey: ["service_" + id],
    queryFn: () =>
      fetch("https://monpsy.ulb.be/ajax/serviceFiche.php?id=" + id)
        .then((res) => res.json())
        .then((data) => {
          return data;
        }),
  });

  console.log(data);

  return (
    <>
      {isLoading && <Spinner animation="border" variant="primary" />}
      {!isLoading && data.service && (
        <div className="m-3">
          <h1>Service {data.service}</h1>

          {data.directeur && (
            <>
              <h3>{data.titre} :</h3>
              <FicheMembre ulbid={data.directeur} />
            </>
          )}
          {data.contact && (
            <>
              <h3>Secretariat :</h3>
              <FicheMembre ulbid={data.contact} />
            </>
          )}
        </div>
      )}
    </>
  );
}
