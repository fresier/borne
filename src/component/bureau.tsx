interface props {
  setLook?: any;
  bureau?: any;
  y?: number;
  x: number;
  actif?: string;
}

export default function Bureau({ bureau, setLook, y = 8.1, x, actif }: props) {
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

  //console.log("bureauX", bureau);

  bureau.x !== null
    ? (x = bureau.x * largeur_window + 37.5 + bureau.x * 0.5)
    : null;
  bureau.y !== null ? (y = bureau.y) : null;
  bureau.h !== null ? (height = bureau.h) : null;
  bureau.l !== null ? (l = bureau.l * largeur_window) : null;

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
