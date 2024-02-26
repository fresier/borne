interface props {
  setLook?: any;
  bureau: any;
  y: number;
  x: number;
  actif?: string;
}

export default function BureauD({ bureau, setLook, y, x, actif }: props) {
  const largeur_window = 27.05;
  if (bureau.window == 0) bureau.window = 1;

  function handleLocal(local: string) {
    setLook({ look: local, type: "local" });
  }

  let height = 100;
  if (bureau.bureau.split(".")[3] >= 233) height = 155;

  let fill = "#34495e";
  let l = bureau.window * largeur_window;

  switch (bureau.xtype) {
    case "2":
      fill = "#195e9e";
      break;
    case "6":
      fill = "#7b3c2b";
      break;
    case "9":
      fill = "BLACK";
      break;
    case "10":
      fill = "#fcb001";
      break;
  }
  if (actif) actif === bureau.bureau ? (fill = "RED") : null;

  console.log("bureauX", bureau);

  parseFloat(bureau.x) >= 1
    ? (x = bureau.x * largeur_window + 37.5 + bureau.x * 0.5)
    : null;
  parseFloat(bureau.y) >= 1 ? (y = bureau.y) : null;
  parseFloat(bureau.h) >= 1 ? (height = bureau.h) : null;
  parseFloat(bureau.l) >= 1 ? (l = bureau.l * largeur_window) : null;

  console.log("bureauAfter", bureau);
  return (
    <rect
      id={bureau.bureau}
      x={x}
      y={y}
      width={l}
      height={height}
      fill={fill}
      onClick={() => {
        handleLocal(bureau.bureau);
      }}
    />
  );
}
