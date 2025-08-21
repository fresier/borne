export function fillBureau(bureau: any, actif?: string) {
  if (actif) if (actif === bureau.bureau) return "RED";

  switch (bureau.type) {
    case "cours_reunion":
      return "#195e9e";
    case "laboratoire":
      return "#7b3c2b";
    case "hors_fac":
      return "BLACK";
    case "secretariat":
      return "#fcb001";
    case "cuisine":
      return "#459C44";
    default:
      return "#34495e";
  }
}
