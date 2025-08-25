"use server";

import { setJWT } from "@/utils/jwtULB";

export const loadServicesFac = async () => {
  const token = setJWT();

  let request = process.env.API_URL + "/services_fac/e?pagination=false";

  try {
    const headers = new Headers();
    headers.append(
      "X-Dev-Password",
      process.env.NEXT_PUBLIC_X_DEV_PASSWORD || ""
    );
    headers.append("Content-Type", "application/ld+json");
    // headers.append("Authorization", "Bearer " + token);

    const json = await fetch(request, {
      headers: headers,
    }).then((res) => res.json());
    const total = json["hydra:totalItems"];
    const jsonCleaned = json["hydra:member"].map((l: any) => {
      return {
        orgId: l.orgId,
        orgCode: l.orgCode,
        orgLibelle: l.orgLibelle,
        facCode: l.facCode,
      };
    });

    return { success: true, json: jsonCleaned, total: total };
  } catch (e) {
    return {
      success: false,
      error: "Désolé, il y a eu une erreur de chargement",
      errorDetails: e,
    };
  }
};
