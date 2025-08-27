"use server";

export default async function loadAutocomplete() {
  try {
    const data = await fetch(
      process.env.NEXT_PUBLIC_MAFAC_URL +
        "/api/borne/autocomplete?token=" +
        process.env.NEXT_PUBLIC_X_DEV_PASSWORD
    );
    const json = await data.json();

    return { success: true, json };
  } catch (e) {
    return {
      success: false,
      error: "Désolé, il y as eu une erreur de chargement",
    };
  }
}
