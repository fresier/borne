"use server";

export default async function getBureaux() {
  let request = process.env.NEXT_PUBLIC_MAFAC_URL + "/api/borne/bureau";

  try {
    const res = await fetch(request);
    if (!res.ok) {
      throw new Error(`Failed to fetch membre: ${res.status}`);
    }
    const data = await res.json();

    //console.log("Bureaux fetched:", data);

    return { success: true, json: data };
  } catch (e) {
    return {
      success: false,
      error: "Désolé, il y a eu une erreur de chargement",
      errorDetails: e,
    };
  }
}
