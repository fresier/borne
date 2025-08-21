import { fillBureau } from "./function";

interface props {
  setLook?: any;
  bureau?: any;
  y?: number;
  x: number;
  actif?: string;
}

export default function BureauU({ bureau, setLook, y = 8.1, x, actif }: props) {
  const largeur_window = 54;
  if (bureau.window == 0) bureau.window = 1;

  function handleLocal(local: string) {
    setLook({ look: local, type: "local" });
  }

  let height = 45;
  if (bureau.bureau.split(".")[3] >= 233) height = 155;

  let fill = fillBureau(bureau, actif);
  let l = bureau.windows * largeur_window;

  bureau.x !== null ? (x = (bureau.x - 1) * largeur_window + 5) : null;
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
