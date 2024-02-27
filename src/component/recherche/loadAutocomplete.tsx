"use server";
export default async function loadAutocomplete() {
  try {
    const data = await fetch(
      "https://monpsy.ulb.be/ajax/autocomplete/fusion.php"
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
