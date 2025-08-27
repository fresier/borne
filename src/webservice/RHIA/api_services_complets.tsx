"use server";

export const loadServicesComplet = async ({
  orgCode,
}: {
  orgCode?: string;
}) => {
  let request =
    process.env.API_URL +
    "/services_complets/?order[mandatService.mandat.corps.corpsOrder]=asc&order[mandatService.mandat.agent.user.nom]=asc&orgCode=" +
    orgCode;

  try {
    const headers = new Headers();
    headers.append(
      "X-Dev-Password",
      process.env.NEXT_PUBLIC_X_DEV_PASSWORD || ""
    );
    headers.append("Content-Type", "application/ld+json");

    const json = await fetch(request, {
      headers: headers,
    }).then((res) => res.json());

    const jsonCleaned = json["hydra:member"].map((l: any) => {
      return {
        orgCode: l.orgCode,
        orgLibelle: l.orgLibelle,
      };
    });

    const chefDeService = json["hydra:member"][0]?.mandatService.find(
      (item: any) => {
        return item?.relation === "012";
      }
    );

    const chef = {
      ulbid: chefDeService?.mandat?.agent?.user?.ulbid,
      nom: chefDeService?.mandat?.agent?.user?.nomUser,
      prenom: chefDeService?.mandat?.agent?.user?.prenomUser,
      email: chefDeService?.mandat?.agent?.user?.email,
    };

    return { success: true, json: jsonCleaned[0], chef: chef };
  } catch (e) {
    console.log("loadServicesComplet error", e);
    return {
      success: false,
      error: "Désolé, il y a eu une erreur de chargement",
      errorDetails: e,
    };
  }
};
