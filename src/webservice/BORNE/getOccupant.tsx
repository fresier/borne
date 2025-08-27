"use server";

import { setJWT } from "@/utils/jwtULB";

interface Props {
  id: string;
}

export default async function getOccupant({ id }: Props) {
  let request =
    process.env.NEXT_PUBLIC_MAFAC_URL +
    "/api/borne/occupant?local=" +
    id +
    "&token=" +
    setJWT();

  try {
    const res = await fetch(request);
    if (!res.ok) {
      throw new Error(`Failed to fetch membre: ${res.status}`);
    }
    const data = await res.json();

    return { success: true, json: data };
  } catch (e) {
    return {
      success: false,
      error: "Désolé, il y a eu une erreur de chargement",
      errorDetails: e,
    };
  }
}
