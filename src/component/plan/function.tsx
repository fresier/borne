export function fillBureau(bureau: any, actif?: string) {
  if (actif) if (actif === bureau.bureau) return "RED";

  switch (bureau.xtype) {
    case "2":
      return "#195e9e";
    case "6":
      return "#7b3c2b";
    case "9":
      return "BLACK";
    case "10":
      return "#fcb001";
    default:
      return "#34495e";
  }
}
