"use server";

export default async function getPub() {
  const res = await fetch(
    process.env.NEXT_PUBLIC_MAFAC_URL + "/api/widget-carousel?fac=e"
  );
  return res.json();
}
