import { fillBureau } from "./function";

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

  let fill = fillBureau(bureau, actif);
  let l = bureau.window * largeur_window;

  parseFloat(bureau.x) >= 1
    ? (x = bureau.x * largeur_window + 37.5 + bureau.x * 0.5)
    : null;
  parseFloat(bureau.y) >= 1 ? (y = bureau.y) : null;
  parseFloat(bureau.h) >= 1 ? (height = bureau.h) : null;
  parseFloat(bureau.l) >= 1 ? (l = bureau.l * largeur_window) : null;

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
