"use server";

import { setJWT } from "@/utils/jwtULB";

interface Props {
  ulbid: string;
}

export default async function getMember({ ulbid }: Props) {
  let request =
    process.env.NEXT_PUBLIC_MAFAC_URL +
    "/api/borne/membre?fac=e&ulbid=" +
    ulbid +
    "&token=" +
    setJWT();

  try {
    const res = await fetch(request);
    if (!res.ok) {
      throw new Error(`Failed to fetch membre: ${res.status}`);
    }
    const data = await res.json();
    const member = data?.members?.[0] ?? null;

    return { success: true, json: member };
  } catch (e) {
    return {
      success: false,
      error: "Désolé, il y a eu une erreur de chargement",
      errorDetails: e,
    };
  }
}
