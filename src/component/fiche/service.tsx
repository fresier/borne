"use client";

import { loadServicesComplet } from "@/webservice/RHIA/api_services_complets";
import { useQuery } from "@tanstack/react-query";
import { Spinner } from "react-bootstrap";
import { FicheMembre } from "./membre";

interface FicheServiceProps {
  id: string;
  setLook?: any;
}

export default function FicheService({ id, setLook }: FicheServiceProps) {
  const { isLoading, data } = useQuery({
    queryKey: ["service_" + id],
    queryFn: async () => await loadServicesComplet({ orgCode: id }),
  });

  if (isLoading) {
    return <Spinner animation="border" variant="primary" />;
  }

  if (isLoading) {
    return <Spinner animation="border" variant="primary" />;
  }

  if (!data?.json) {
    return;
  }

  console.log("FicheService", data);

  return (
    <>
      <div className="m-3">
        <h1>{data.json?.orgLibelle}</h1>

        {data.chef && (
          <>
            <h3>Directeur•rice</h3>
            <FicheMembre ulbid={data.chef.ulbid} setLook={setLook} />
          </>
        )}
        {/* {data.contact && (
            <>
              <h3>Secretariat :</h3>
              <FicheMembre ulbid={data.contact} setLook={setLook} />
            </>
          )} */}
      </div>
    </>
  );
}
