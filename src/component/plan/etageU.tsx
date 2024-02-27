import { useAppStore } from "@/store/session";
import { v4 as uuidv4 } from "uuid";
import BureauU from "./bureauU";

interface BureauProps {
  bureau: string;
  xtype: string;
  data: any;
  nb: number;
  libel?: string;
  window: number;
}

interface Props {
  id: string;
  etage: number;
  bureau: BureauProps[];
  setLook: any;
}
export default function EtageU({ etage, bureau, id, setLook }: Props) {
  const numero = parseInt(id.split(".")[3]);
  const setShowAscenseur = useAppStore.use.setShowAscenseur();
  const etageBureau = bureau.filter(
    (b: any) => b.bureau.split(".")[2] == etage
  );

  etageBureau.sort((a: any, b: any) => {
    if (a.bureau.split(".")[3] < b.bureau.split(".")[3]) {
      return -1;
    }
    if (a.bureau.split(".")[3] > b.bureau.split(".")[3]) {
      return 1;
    }
    return 0;
  });
  let x = 0;
  let y = 5;
  const bureauListe = etageBureau.map((bureau, index) => {
    return (
      <BureauU
        key={uuidv4()}
        bureau={bureau}
        setLook={setLook}
        actif={id}
        x={x}
        y={y}
      />
    );
  });

  const globalEtage = useAppStore.use.etage();

  function handleLocal(local: string) {
    setLook({ look: local, type: "local" });
  }

  function showAssenceur() {
    setShowAscenseur(true);
  }

  return (
    <div>
      <svg viewBox="0 0 666.88 174.99">
        {globalEtage === etage ? (
          <image
            x={430}
            y={75}
            width={30}
            height={30}
            href="/assets/img/marker.svg"
          />
        ) : null}

        {/* {etage !== 10 ? (
          <rect
            x="490.03"
            y="106.74"
            width="28"
            height="56"
            fill="green"
            onClick={() => {
              handleLocal(`S.DB.${etage + 1}.100`);
            }}
          />
        ) : null}
        {etage !== 8 ? (
          <rect
            x="567.03"
            y="106.74"
            width="28"
            height="56"
            fill="red"
            onClick={() => {
              handleLocal(`S.DB.${etage + 1}.100`);
            }}
          />
        ) : null} */}

        {bureauListe}

        <rect
          x="525.03"
          y="110.74"
          width="36"
          height="21"
          fill="green"
          onClick={() => showAssenceur()}
        />

        <polyline points="518.76 108.06 518.76 108.46 566.96 108.46" />
        <polyline points="518.76 108.06 566.96 108.06 566.96 108.46" />
        <polyline points="116.76 164.86 116.76 165.06 162.86 165.06" />
        <polyline points="116.76 164.86 162.86 164.86 162.86 165.06" />
        <polyline points="483.66 1.66 483.66 12.26 491.06 12.26" />
        <polyline points="483.66 1.66 491.06 1.66 491.06 12.26" />
        <polyline points="560.76 108.46 560.76 110.26 566.96 110.26" />
        <polyline points="560.76 108.46 566.96 108.46 566.96 110.26" />
        <polyline points="560.76 110.26 560.76 115.16 566.96 115.16" />
        <polyline points="560.76 110.26 566.96 110.26 566.96 115.16" />
        <polyline points="518.76 108.46 518.76 115.16 525.06 115.16" />
        <polyline points="518.76 108.46 525.06 108.46 525.06 115.16" />
        <polyline points="483.66 111.26 483.66 117.46 489.56 117.46" />
        <polyline points="483.66 111.26 489.56 111.26 489.56 117.46" />
        <polyline points="487.76 117.76 487.76 161.36 489.06 161.36" />
        <polyline points="487.76 117.76 489.06 117.76 489.06 161.36" />
        <polyline points="195.66 164.96 195.66 168.36 215.66 168.36" />
        <polyline points="195.66 164.96 215.66 164.96 215.66 168.36" />
        <polyline points="168.56 164.96 168.56 168.36 186.16 168.36" />
        <polyline points="168.56 164.96 186.16 164.96 186.16 168.36" />
        <polyline points="197.96 168.36 197.96 169.56 215.66 169.56" />
        <polyline points="197.96 168.36 215.66 168.36 215.66 169.56" />
        <polyline points="654.36 1.36 654.36 1.76 659.76 1.76" />
        <polyline points="654.36 1.36 659.76 1.36 659.76 1.76" />
        <polyline points="648.26 1.36 648.26 1.76 653.66 1.76" />
        <polyline points="648.26 1.36 653.66 1.36 653.66 1.76" />
        <polyline points="594.76 .36 594.76 1.76 602.16 1.76" />
        <polyline points="594.76 .36 602.16 .36 602.16 1.76" />
        <polyline points="539.16 1.66 539.16 1.76 546.56 1.76" />
        <polyline points="539.16 1.66 546.56 1.66 546.56 1.76" />
        <polyline points="491.06 1.66 491.06 1.76 491.56 1.76" />
        <polyline points="491.06 1.66 491.56 1.66 491.56 1.76" />
        <polyline points="648.26 1.76 648.26 2.66 653.66 2.66" />
        <polyline points="648.26 1.76 653.66 1.76 653.66 2.66" />
        <polyline points="642.06 1.76 642.06 2.66 648.26 2.66" />
        <polyline points="642.06 1.76 648.26 1.76 648.26 2.66" />
        <polyline points="546.56 1.76 546.56 2.66 554.76 2.66" />
        <polyline points="546.56 1.76 554.76 1.76 554.76 2.66" />
        <polyline points="539.16 1.76 539.16 2.66 546.56 2.66" />
        <polyline points="539.16 1.76 546.56 1.76 546.56 2.66" />
        <polyline points="648.26 2.66 648.26 2.86 653.66 2.86" />
        <polyline points="648.26 2.66 653.66 2.66 653.66 2.86" />
        <polyline points="642.06 2.66 642.06 2.86 648.26 2.86" />
        <polyline points="642.06 2.66 648.26 2.66 648.26 2.86" />
        <polyline points="602.16 1.76 602.16 2.86 610.36 2.86" />
        <polyline points="602.16 1.76 610.36 1.76 610.36 2.86" />
        <polyline points="594.76 1.76 594.76 2.86 602.16 2.86" />
        <polyline points="594.76 1.76 602.16 1.76 602.16 2.86" />
        <polyline points="546.56 2.66 546.56 2.86 554.76 2.86" />
        <polyline points="546.56 2.66 554.76 2.66 554.76 2.86" />
        <polyline points="539.16 2.66 539.16 2.86 546.56 2.86" />
        <polyline points="539.16 2.66 546.56 2.66 546.56 2.86" />
        <polyline points="430.46 1.66 430.46 2.86 437.86 2.86" />
        <polyline points="430.46 1.66 437.86 1.66 437.86 2.86" />
        <polyline points="377.46 1.66 377.46 2.86 385.16 2.86" />
        <polyline points="377.46 1.66 385.16 1.66 385.16 2.86" />
        <polyline points="324.06 1.66 324.06 2.86 331.46 2.86" />
        <polyline points="324.06 1.66 331.46 1.66 331.46 2.86" />
        <polyline points="267.96 1.66 267.96 2.86 279.66 2.86" />
        <polyline points="267.96 1.66 279.66 1.66 279.66 2.86" />
        <polyline points="216.76 1.66 216.76 2.86 224.26 2.86" />
        <polyline points="216.76 1.66 224.26 1.66 224.26 2.86" />
        <polyline points="163.46 1.66 163.46 2.86 171.06 2.86" />
        <polyline points="163.46 1.66 171.06 1.66 171.06 2.86" />
        <polyline points="109.66 1.66 109.66 2.86 117.16 2.86" />
        <polyline points="109.66 1.66 117.16 1.66 117.16 2.86" />
        <polyline points="55.36 1.66 55.36 2.86 62.66 2.86" />
        <polyline points="55.36 1.66 62.66 1.66 62.66 2.86" />
        <polyline points=".36 1.66 .36 2.86 9.16 2.86" />
        <polyline points=".36 1.66 9.16 1.66 9.16 2.86" />
        <polyline points="602.16 2.86 602.16 3.56 610.36 3.56" />
        <polyline points="602.16 2.86 610.36 2.86 610.36 3.56" />
        <polyline points="594.76 2.86 594.76 3.56 602.16 3.56" />
        <polyline points="594.76 2.86 602.16 2.86 602.16 3.56" />
        <polyline points="546.56 2.86 546.56 3.56 554.76 3.56" />
        <polyline points="546.56 2.86 554.76 2.86 554.76 3.56" />
        <polyline points="539.16 2.86 539.16 3.56 546.56 3.56" />
        <polyline points="539.16 2.86 546.56 2.86 546.56 3.56" />
        <polyline points="476.36 2.86 476.36 3.56 483.66 3.56" />
        <polyline points="476.36 2.86 483.66 2.86 483.66 3.56" />
        <polyline points="437.86 2.86 437.86 3.56 445.86 3.56" />
        <polyline points="437.86 2.86 445.86 2.86 445.86 3.56" />
        <polyline points="430.46 2.86 430.46 3.56 437.86 3.56" />
        <polyline points="430.46 2.86 437.86 2.86 437.86 3.56" />
        <polyline points="423.36 2.86 423.36 3.56 430.46 3.56" />
        <polyline points="423.36 2.86 430.46 2.86 430.46 3.56" />
        <polyline points="385.16 2.86 385.16 3.56 392.66 3.56" />
        <polyline points="385.16 2.86 392.66 2.86 392.66 3.56" />
        <polyline points="377.46 2.86 377.46 3.56 385.16 3.56" />
        <polyline points="377.46 2.86 385.16 2.86 385.16 3.56" />
        <polyline points="369.96 2.86 369.96 3.56 377.46 3.56" />
        <polyline points="369.96 2.86 377.46 2.86 377.46 3.56" />
        <polyline points="331.46 2.86 331.46 3.56 339.46 3.56" />
        <polyline points="331.46 2.86 339.46 2.86 339.46 3.56" />
        <polyline points="324.06 2.86 324.06 3.56 331.46 3.56" />
        <polyline points="324.06 2.86 331.46 2.86 331.46 3.56" />
        <polyline points="316.56 2.86 316.56 3.56 324.06 3.56" />
        <polyline points="316.56 2.86 324.06 2.86 324.06 3.56" />
        <polyline points="279.66 2.86 279.66 3.56 286.16 3.56" />
        <polyline points="279.66 2.86 286.16 2.86 286.16 3.56" />
        <polyline points="267.96 2.86 267.96 3.56 279.66 3.56" />
        <polyline points="267.96 2.86 279.66 2.86 279.66 3.56" />
        <polyline points="263.16 2.86 263.16 3.56 267.96 3.56" />
        <polyline points="263.16 2.86 267.96 2.86 267.96 3.56" />
        <polyline points="224.26 2.86 224.26 3.56 232.56 3.56" />
        <polyline points="224.26 2.86 232.56 2.86 232.56 3.56" />
        <polyline points="216.76 2.86 216.76 3.56 224.26 3.56" />
        <polyline points="216.76 2.86 224.26 2.86 224.26 3.56" />
        <polyline points="209.96 2.86 209.96 3.56 216.76 3.56" />
        <polyline points="209.96 2.86 216.76 2.86 216.76 3.56" />
        <polyline points="171.06 2.86 171.06 3.56 179.36 3.56" />
        <polyline points="171.06 2.86 179.36 2.86 179.36 3.56" />
        <polyline points="163.46 2.86 163.46 3.56 171.06 3.56" />
        <polyline points="163.46 2.86 171.06 2.86 171.06 3.56" />
        <polyline points="156.36 2.86 156.36 3.56 163.46 3.56" />
        <polyline points="156.36 2.86 163.46 2.86 163.46 3.56" />
        <polyline points="117.16 2.86 117.16 3.56 125.76 3.56" />
        <polyline points="117.16 2.86 125.76 2.86 125.76 3.56" />
        <polyline points="109.66 2.86 109.66 3.56 117.16 3.56" />
        <polyline points="109.66 2.86 117.16 2.86 117.16 3.56" />
        <polyline points="101.66 2.86 101.66 3.56 109.66 3.56" />
        <polyline points="101.66 2.86 109.66 2.86 109.66 3.56" />
        <polyline points="62.66 2.86 62.66 3.56 71.06 3.56" />
        <polyline points="62.66 2.86 71.06 2.86 71.06 3.56" />
        <polyline points="55.36 2.86 55.36 3.56 62.66 3.56" />
        <polyline points="55.36 2.86 62.66 2.86 62.66 3.56" />
        <polyline points="44.76 2.86 44.76 3.56 55.36 3.56" />
        <polyline points="44.76 2.86 55.36 2.86 55.36 3.56" />
        <polyline points="9.16 2.86 9.16 3.56 17.06 3.56" />
        <polyline points="9.16 2.86 17.06 2.86 17.06 3.56" />
        <polyline points=".36 2.86 .36 3.56 9.16 3.56" />
        <polyline points=".36 2.86 9.16 2.86 9.16 3.56" />
        <polyline points="602.16 3.56 602.16 4.06 610.36 4.06" />
        <polyline points="602.16 3.56 610.36 3.56 610.36 4.06" />
        <polyline points="594.76 3.56 594.76 4.06 602.16 4.06" />
        <polyline points="594.76 3.56 602.16 3.56 602.16 4.06" />
        <polyline points="546.56 3.56 546.56 4.06 554.76 4.06" />
        <polyline points="546.56 3.56 554.76 3.56 554.76 4.06" />
        <polyline points="539.16 3.56 539.16 4.06 546.56 4.06" />
        <polyline points="539.16 3.56 546.56 3.56 546.56 4.06" />
        <polyline points="476.96 3.56 476.96 4.06 483.66 4.06" />
        <polyline points="476.96 3.56 483.66 3.56 483.66 4.06" />
        <polyline points="437.86 3.56 437.86 4.06 445.26 4.06" />
        <polyline points="437.86 3.56 445.26 3.56 445.26 4.06" />
        <polyline points="430.46 3.56 430.46 4.06 437.86 4.06" />
        <polyline points="430.46 3.56 437.86 3.56 437.86 4.06" />
        <polyline points="423.86 3.56 423.86 4.06 430.46 4.06" />
        <polyline points="423.86 3.56 430.46 3.56 430.46 4.06" />
        <polyline points="385.16 3.56 385.16 4.06 392.16 4.06" />
        <polyline points="385.16 3.56 392.16 3.56 392.16 4.06" />
        <polyline points="377.46 3.56 377.46 4.06 385.16 4.06" />
        <polyline points="377.46 3.56 385.16 3.56 385.16 4.06" />
        <polyline points="331.46 3.56 331.46 4.06 338.96 4.06" />
        <polyline points="331.46 3.56 338.96 3.56 338.96 4.06" />
        <polyline points="324.06 3.56 324.06 4.06 331.46 4.06" />
        <polyline points="324.06 3.56 331.46 3.56 331.46 4.06" />
        <polyline points="279.66 3.56 279.66 4.06 285.56 4.06" />
        <polyline points="279.66 3.56 285.56 3.56 285.56 4.06" />
        <polyline points="267.96 3.56 267.96 4.06 279.66 4.06" />
        <polyline points="267.96 3.56 279.66 3.56 279.66 4.06" />
        <polyline points="263.76 3.56 263.76 4.06 267.96 4.06" />
        <polyline points="263.76 3.56 267.96 3.56 267.96 4.06" />
        <polyline points="224.26 3.56 224.26 4.06 231.96 4.06" />
        <polyline points="224.26 3.56 231.96 3.56 231.96 4.06" />
        <polyline points="216.76 3.56 216.76 4.06 224.26 4.06" />
        <polyline points="216.76 3.56 224.26 3.56 224.26 4.06" />
        <polyline points="210.46 3.56 210.46 4.06 216.76 4.06" />
        <polyline points="210.46 3.56 216.76 3.56 216.76 4.06" />
        <polyline points="171.06 3.56 171.06 4.06 178.76 4.06" />
        <polyline points="171.06 3.56 178.76 3.56 178.76 4.06" />
        <polyline points="163.46 3.56 163.46 4.06 171.06 4.06" />
        <polyline points="163.46 3.56 171.06 3.56 171.06 4.06" />
        <polyline points="117.16 3.56 117.16 4.06 125.16 4.06" />
        <polyline points="117.16 3.56 125.16 3.56 125.16 4.06" />
        <polyline points="109.66 3.56 109.66 4.06 117.16 4.06" />
        <polyline points="109.66 3.56 117.16 3.56 117.16 4.06" />
        <polyline points="102.16 3.56 102.16 4.06 109.66 4.06" />
        <polyline points="102.16 3.56 109.66 3.56 109.66 4.06" />
        <polyline points="62.66 3.56 62.66 4.06 70.46 4.06" />
        <polyline points="62.66 3.56 70.46 3.56 70.46 4.06" />
        <polyline points="55.36 3.56 55.36 4.06 62.66 4.06" />
        <polyline points="55.36 3.56 62.66 3.56 62.66 4.06" />
        <polyline points="9.16 3.56 9.16 4.06 16.56 4.06" />
        <polyline points="9.16 3.56 16.56 3.56 16.56 4.06" />
        <polyline points=".36 3.56 .36 4.06 9.16 4.06" />
        <polyline points=".36 3.56 9.16 3.56 9.16 4.06" />
        <polyline points="156.86 3.56 156.86 4.06 163.46 4.06" />
        <polyline points="156.86 3.56 163.46 3.56 163.46 4.06" />
        <polyline points="45.36 3.56 45.36 4.06 55.36 4.06" />
        <polyline points="45.36 3.56 55.36 3.56 55.36 4.06" />
        <polyline points="648.26 2.86 648.26 4.06 653.66 4.06" />
        <polyline points="648.26 2.86 653.66 2.86 653.66 4.06" />
        <polyline points="642.06 2.86 642.06 4.06 648.26 4.06" />
        <polyline points="642.06 2.86 648.26 2.86 648.26 4.06" />
        <polyline points="530.96 1.76 530.96 4.06 539.16 4.06" />
        <polyline points="530.96 1.76 539.16 1.76 539.16 4.06" />
        <polyline points="659.76 1.76 659.76 4.36 665.96 4.36" />
        <polyline points="659.76 1.76 665.96 1.76 665.96 4.36" />
        <polyline points="648.26 4.06 648.26 4.16 653.66 4.16" />
        <polyline points="648.26 4.06 653.66 4.06 653.66 4.16" />
        <polyline points="642.06 4.06 642.06 4.16 648.26 4.16" />
        <polyline points="642.06 4.06 648.26 4.06 648.26 4.16" />
        <polyline points="602.16 4.06 602.16 4.16 610.36 4.16" />
        <polyline points="602.16 4.06 610.36 4.06 610.36 4.16" />
        <polyline points="594.76 4.06 594.76 4.16 602.16 4.16" />
        <polyline points="594.76 4.06 602.16 4.06 602.16 4.16" />
        <polyline points="586.56 1.76 586.56 4.16 594.76 4.16" />
        <polyline points="586.56 1.76 594.76 1.76 594.76 4.16" />
        <polyline points="546.56 4.06 546.56 4.16 554.76 4.16" />
        <polyline points="546.56 4.06 554.76 4.06 554.76 4.16" />
        <polyline points="539.16 4.06 539.16 4.16 546.56 4.16" />
        <polyline points="539.16 4.06 546.56 4.06 546.56 4.16" />
        <polyline points="530.96 4.06 530.96 4.16 539.16 4.16" />
        <polyline points="530.96 4.06 539.16 4.06 539.16 4.16" />
        <polyline points="476.96 4.06 476.96 4.16 483.66 4.16" />
        <polyline points="476.96 4.06 483.66 4.06 483.66 4.16" />
        <polyline points="437.86 4.06 437.86 4.16 445.26 4.16" />
        <polyline points="437.86 4.06 445.26 4.06 445.26 4.16" />
        <polyline points="430.46 4.06 430.46 4.16 437.86 4.16" />
        <polyline points="430.46 4.06 437.86 4.06 437.86 4.16" />
        <polyline points="385.16 4.06 385.16 4.16 392.16 4.16" />
        <polyline points="385.16 4.06 392.16 4.06 392.16 4.16" />
        <polyline points="377.46 4.06 377.46 4.16 385.16 4.16" />
        <polyline points="377.46 4.06 385.16 4.06 385.16 4.16" />
        <polyline points="324.06 4.06 324.06 4.16 331.46 4.16" />
        <polyline points="324.06 4.06 331.46 4.06 331.46 4.16" />
        <polyline points="317.16 3.56 317.16 4.16 324.06 4.16" />
        <polyline points="317.16 3.56 324.06 3.56 324.06 4.16" />
        <polyline points="267.96 4.06 267.96 4.16 279.66 4.16" />
        <polyline points="267.96 4.06 279.66 4.06 279.66 4.16" />
        <polyline points="263.76 4.06 263.76 4.16 267.96 4.16" />
        <polyline points="263.76 4.06 267.96 4.06 267.96 4.16" />
        <polyline points="224.26 4.06 224.26 4.16 231.96 4.16" />
        <polyline points="224.26 4.06 231.96 4.06 231.96 4.16" />
        <polyline points="216.76 4.06 216.76 4.16 224.26 4.16" />
        <polyline points="216.76 4.06 224.26 4.06 224.26 4.16" />
        <polyline points="210.46 4.06 210.46 4.16 216.76 4.16" />
        <polyline points="210.46 4.06 216.76 4.06 216.76 4.16" />
        <polyline points="163.46 4.06 163.46 4.16 171.06 4.16" />
        <polyline points="163.46 4.06 171.06 4.06 171.06 4.16" />
        <polyline points="156.86 4.06 156.86 4.16 163.46 4.16" />
        <polyline points="156.86 4.06 163.46 4.06 163.46 4.16" />
        <polyline points="109.66 4.06 109.66 4.16 117.16 4.16" />
        <polyline points="109.66 4.06 117.16 4.06 117.16 4.16" />
        <polyline points="102.16 4.06 102.16 4.16 109.66 4.16" />
        <polyline points="102.16 4.06 109.66 4.06 109.66 4.16" />
        <polyline points="62.66 4.06 62.66 4.16 70.46 4.16" />
        <polyline points="62.66 4.06 70.46 4.06 70.46 4.16" />
        <polyline points="55.36 4.06 55.36 4.16 62.66 4.16" />
        <polyline points="55.36 4.06 62.66 4.06 62.66 4.16" />
        <polyline points="45.36 4.06 45.36 4.16 55.36 4.16" />
        <polyline points="45.36 4.06 55.36 4.06 55.36 4.16" />
        <polyline points="9.16 4.06 9.16 4.16 16.56 4.16" />
        <polyline points="9.16 4.06 16.56 4.06 16.56 4.16" />
        <polyline points=".36 4.06 .36 4.16 9.16 4.16" />
        <polyline points=".36 4.06 9.16 4.06 9.16 4.16" />
        <polyline points="423.86 4.06 423.86 4.16 430.46 4.16" />
        <polyline points="423.86 4.06 430.46 4.06 430.46 4.16" />
        <polyline points="331.46 4.06 331.46 4.16 338.96 4.16" />
        <polyline points="331.46 4.06 338.96 4.06 338.96 4.16" />
        <polyline points="279.66 4.06 279.66 4.16 285.56 4.16" />
        <polyline points="279.66 4.06 285.56 4.06 285.56 4.16" />
        <polyline points="171.06 4.06 171.06 4.16 178.76 4.16" />
        <polyline points="171.06 4.06 178.76 4.06 178.76 4.16" />
        <polyline points="491.56 1.76 491.56 4.16 499.26 4.16" />
        <polyline points="491.56 1.76 499.26 1.76 499.26 4.16" />
        <polyline points="117.16 4.06 117.16 4.16 125.16 4.16" />
        <polyline points="117.16 4.06 125.16 4.06 125.16 4.16" />
        <polyline points="437.86 4.16 437.86 4.56 445.26 4.56" />
        <polyline points="437.86 4.16 445.26 4.16 445.26 4.56" />
        <polyline points="430.46 4.16 430.46 4.56 437.86 4.56" />
        <polyline points="430.46 4.16 437.86 4.16 437.86 4.56" />
        <polyline points="331.46 4.16 331.46 4.56 338.96 4.56" />
        <polyline points="331.46 4.16 338.96 4.16 338.96 4.56" />
        <polyline points="324.06 4.16 324.06 4.56 331.46 4.56" />
        <polyline points="324.06 4.16 331.46 4.16 331.46 4.56" />
        <polyline points="224.26 4.16 224.26 4.56 231.96 4.56" />
        <polyline points="224.26 4.16 231.96 4.16 231.96 4.56" />
        <polyline points="216.76 4.16 216.76 4.56 224.26 4.56" />
        <polyline points="216.76 4.16 224.26 4.16 224.26 4.56" />
        <polyline points="210.46 4.16 210.46 4.56 216.76 4.56" />
        <polyline points="210.46 4.16 216.76 4.16 216.76 4.56" />
        <polyline points="117.16 4.16 117.16 4.56 125.16 4.56" />
        <polyline points="117.16 4.16 125.16 4.16 125.16 4.56" />
        <polyline points="109.66 4.16 109.66 4.56 117.16 4.56" />
        <polyline points="109.66 4.16 117.16 4.16 117.16 4.56" />
        <polyline points="55.36 4.16 55.36 4.56 62.66 4.56" />
        <polyline points="55.36 4.16 62.66 4.16 62.66 4.56" />
        <polyline points="45.36 4.16 45.36 4.56 55.36 4.56" />
        <polyline points="45.36 4.16 55.36 4.16 55.36 4.56" />
        <polyline points="9.16 4.16 9.16 4.56 16.56 4.56" />
        <polyline points="9.16 4.16 16.56 4.16 16.56 4.56" />
        <polyline points=".36 4.16 .36 4.56 9.16 4.56" />
        <polyline points=".36 4.16 9.16 4.16 9.16 4.56" />
        <polyline points="648.26 4.16 648.26 6.46 653.66 6.46" />
        <polyline points="648.26 4.16 653.66 4.16 653.66 6.46" />
        <polyline points="642.66 4.16 642.66 6.46 648.26 6.46" />
        <polyline points="642.66 4.16 648.26 4.16 648.26 6.46" />
        <polyline points="602.16 4.16 602.16 6.46 609.86 6.46" />
        <polyline points="602.16 4.16 609.86 4.16 609.86 6.46" />
        <polyline points="594.76 4.16 594.76 6.46 602.16 6.46" />
        <polyline points="594.76 4.16 602.16 4.16 602.16 6.46" />
        <polyline points="476.96 4.16 476.96 6.46 483.66 6.46" />
        <polyline points="476.96 4.16 483.66 4.16 483.66 6.46" />
        <polyline points="437.86 4.56 437.86 6.46 445.26 6.46" />
        <polyline points="437.86 4.56 445.26 4.56 445.26 6.46" />
        <polyline points="430.46 4.56 430.46 6.46 437.86 6.46" />
        <polyline points="430.46 4.56 437.86 4.56 437.86 6.46" />
        <polyline points="423.86 4.16 423.86 6.46 430.46 6.46" />
        <polyline points="423.86 4.16 430.46 4.16 430.46 6.46" />
        <polyline points="385.16 4.16 385.16 6.46 392.16 6.46" />
        <polyline points="385.16 4.16 392.16 4.16 392.16 6.46" />
        <polyline points="377.46 4.16 377.46 6.46 385.16 6.46" />
        <polyline points="377.46 4.16 385.16 4.16 385.16 6.46" />
        <polyline points="331.46 4.56 331.46 6.46 338.96 6.46" />
        <polyline points="331.46 4.56 338.96 4.56 338.96 6.46" />
        <polyline points="324.06 4.56 324.06 6.46 331.46 6.46" />
        <polyline points="324.06 4.56 331.46 4.56 331.46 6.46" />
        <polyline points="279.66 4.16 279.66 6.46 285.56 6.46" />
        <polyline points="279.66 4.16 285.56 4.16 285.56 6.46" />
        <polyline points="267.96 4.16 267.96 6.46 279.66 6.46" />
        <polyline points="267.96 4.16 279.66 4.16 279.66 6.46" />
        <polyline points="263.76 4.16 263.76 6.46 267.96 6.46" />
        <polyline points="263.76 4.16 267.96 4.16 267.96 6.46" />
        <polyline points="216.76 4.56 216.76 6.46 224.26 6.46" />
        <polyline points="216.76 4.56 224.26 4.56 224.26 6.46" />
        <polyline points="210.46 4.56 210.46 6.46 216.76 6.46" />
        <polyline points="210.46 4.56 216.76 4.56 216.76 6.46" />
        <polyline points="171.06 4.16 171.06 6.46 178.76 6.46" />
        <polyline points="171.06 4.16 178.76 4.16 178.76 6.46" />
        <polyline points="163.46 4.16 163.46 6.46 171.06 6.46" />
        <polyline points="163.46 4.16 171.06 4.16 171.06 6.46" />
        <polyline points="109.66 4.56 109.66 6.46 117.16 6.46" />
        <polyline points="109.66 4.56 117.16 4.56 117.16 6.46" />
        <polyline points="102.16 4.16 102.16 6.46 109.66 6.46" />
        <polyline points="102.16 4.16 109.66 4.16 109.66 6.46" />
        <polyline points="9.16 4.56 9.16 6.46 16.56 6.46" />
        <polyline points="9.16 4.56 16.56 4.56 16.56 6.46" />
        <polyline points=".36 4.56 .36 6.46 9.16 6.46" />
        <polyline points=".36 4.56 9.16 4.56 9.16 6.46" />
        <polyline points="659.76 4.36 659.76 6.86 665.36 6.86" />
        <polyline points="659.76 4.36 665.36 4.36 665.36 6.86" />
        <polyline points="654.36 1.76 654.36 6.46 659.76 6.46" />
        <polyline points="654.36 1.76 659.76 1.76 659.76 6.46" />
        <polyline points="546.56 4.16 546.56 6.46 554.26 6.46" />
        <polyline points="546.56 4.16 554.26 4.16 554.26 6.46" />
        <polyline points="539.16 4.16 539.16 6.46 546.56 6.46" />
        <polyline points="539.16 4.16 546.56 4.16 546.56 6.46" />
        <polyline points="156.86 4.16 156.86 6.46 163.46 6.46" />
        <polyline points="156.86 4.16 163.46 4.16 163.46 6.46" />
        <polyline points="55.36 4.56 55.36 6.46 62.66 6.46" />
        <polyline points="55.36 4.56 62.66 4.56 62.66 6.46" />
        <polyline points="45.36 4.56 45.36 6.46 55.36 6.46" />
        <polyline points="45.36 4.56 55.36 4.56 55.36 6.46" />
        <polyline points="587.16 4.16 587.16 6.46 594.76 6.46" />
        <polyline points="587.16 4.16 594.76 4.16 594.76 6.46" />
        <polyline points="531.56 4.16 531.56 6.46 539.16 6.46" />
        <polyline points="531.56 4.16 539.16 4.16 539.16 6.46" />
        <polyline points="224.26 4.56 224.26 6.46 231.96 6.46" />
        <polyline points="224.26 4.56 231.96 4.56 231.96 6.46" />
        <polyline points="317.16 4.16 317.16 6.46 324.06 6.46" />
        <polyline points="317.16 4.16 324.06 4.16 324.06 6.46" />
        <polyline points="491.56 4.16 491.56 6.46 498.66 6.46" />
        <polyline points="491.56 4.16 498.66 4.16 498.66 6.46" />
        <polyline points="117.16 4.56 117.16 6.46 125.16 6.46" />
        <polyline points="117.16 4.56 125.16 4.56 125.16 6.46" />
        <polyline points="62.66 4.16 62.66 6.46 70.46 6.46" />
        <polyline points="62.66 4.16 70.46 4.16 70.46 6.46" />
        <polyline points="659.76 6.46 659.76 7.06 663.26 7.06" />
        <polyline points="659.76 6.46 663.26 6.46 663.26 7.06" />
        <polyline points="654.36 6.46 654.36 7.06 659.76 7.06" />
        <polyline points="654.36 6.46 659.76 6.46 659.76 7.06" />
        <polyline points="602.16 6.46 602.16 7.06 605.66 7.06" />
        <polyline points="602.16 6.46 605.66 6.46 605.66 7.06" />
        <polyline points="594.76 6.46 594.76 7.06 602.16 7.06" />
        <polyline points="594.76 6.46 602.16 6.46 602.16 7.06" />
        <polyline points="591.26 6.46 591.26 7.06 594.76 7.06" />
        <polyline points="591.26 6.46 594.76 6.46 594.76 7.06" />
        <polyline points="587.76 6.46 587.76 7.06 591.26 7.06" />
        <polyline points="587.76 6.46 591.26 6.46 591.26 7.06" />
        <polyline points="476.96 6.46 476.96 7.06 483.66 7.06" />
        <polyline points="476.96 6.46 483.66 6.46 483.66 7.06" />
        <polyline points="437.86 6.46 437.86 7.06 445.26 7.06" />
        <polyline points="437.86 6.46 445.26 6.46 445.26 7.06" />
        <polyline points="430.46 6.46 430.46 7.06 437.86 7.06" />
        <polyline points="430.46 6.46 437.86 6.46 437.86 7.06" />
        <polyline points="423.86 6.46 423.86 7.06 430.46 7.06" />
        <polyline points="423.86 6.46 430.46 6.46 430.46 7.06" />
        <polyline points="331.46 6.46 331.46 7.06 338.96 7.06" />
        <polyline points="331.46 6.46 338.96 6.46 338.96 7.06" />
        <polyline points="324.06 6.46 324.06 7.06 331.46 7.06" />
        <polyline points="324.06 6.46 331.46 6.46 331.46 7.06" />
        <polyline points="317.16 6.46 317.16 7.06 324.06 7.06" />
        <polyline points="317.16 6.46 324.06 6.46 324.06 7.06" />
        <polyline points="279.66 6.46 279.66 7.06 285.56 7.06" />
        <polyline points="279.66 6.46 285.56 6.46 285.56 7.06" />
        <polyline points="267.96 6.46 267.96 7.06 279.66 7.06" />
        <polyline points="267.96 6.46 279.66 6.46 279.66 7.06" />
        <polyline points="263.76 6.46 263.76 7.06 267.96 7.06" />
        <polyline points="263.76 6.46 267.96 6.46 267.96 7.06" />
        <polyline points="224.26 6.46 224.26 7.06 231.96 7.06" />
        <polyline points="224.26 6.46 231.96 6.46 231.96 7.06" />
        <polyline points="216.76 6.46 216.76 7.06 224.26 7.06" />
        <polyline points="216.76 6.46 224.26 6.46 224.26 7.06" />
        <polyline points="210.46 6.46 210.46 7.06 216.76 7.06" />
        <polyline points="210.46 6.46 216.76 6.46 216.76 7.06" />
        <polyline points="163.46 6.46 163.46 7.06 171.06 7.06" />
        <polyline points="163.46 6.46 171.06 6.46 171.06 7.06" />
        <polyline points="156.86 6.46 156.86 7.06 163.46 7.06" />
        <polyline points="156.86 6.46 163.46 6.46 163.46 7.06" />
        <polyline points="62.66 6.46 62.66 7.06 70.46 7.06" />
        <polyline points="62.66 6.46 70.46 6.46 70.46 7.06" />
        <polyline points="55.36 6.46 55.36 7.06 62.66 7.06" />
        <polyline points="55.36 6.46 62.66 6.46 62.66 7.06" />
        <polyline points="45.36 6.46 45.36 7.06 55.36 7.06" />
        <polyline points="45.36 6.46 55.36 6.46 55.36 7.06" />
        <polyline points="9.16 6.46 9.16 7.06 16.56 7.06" />
        <polyline points="9.16 6.46 16.56 6.46 16.56 7.06" />
        <polyline points=".36 6.46 .36 7.06 9.16 7.06" />
        <polyline points=".36 6.46 9.16 6.46 9.16 7.06" />
        <polyline points="539.16 6.46 539.16 7.06 546.56 7.06" />
        <polyline points="539.16 6.46 546.56 6.46 546.56 7.06" />
        <polyline points="535.76 6.46 535.76 7.06 539.16 7.06" />
        <polyline points="535.76 6.46 539.16 6.46 539.16 7.06" />
        <polyline points="171.06 6.46 171.06 7.06 178.76 7.06" />
        <polyline points="171.06 6.46 178.76 6.46 178.76 7.06" />
        <polyline points="109.66 6.46 109.66 7.06 117.16 7.06" />
        <polyline points="109.66 6.46 117.16 6.46 117.16 7.06" />
        <polyline points="102.16 6.46 102.16 7.06 109.66 7.06" />
        <polyline points="102.16 6.46 109.66 6.46 109.66 7.06" />
        <polyline points="385.16 6.46 385.16 7.06 392.16 7.06" />
        <polyline points="385.16 6.46 392.16 6.46 392.16 7.06" />
        <polyline points="377.46 6.46 377.46 7.06 385.16 7.06" />
        <polyline points="377.46 6.46 385.16 6.46 385.16 7.06" />
        <polyline points="437.86 7.06 437.86 7.36 445.26 7.36" />
        <polyline points="437.86 7.06 445.26 7.06 445.26 7.36" />
        <polyline points="430.46 7.06 430.46 7.36 437.86 7.36" />
        <polyline points="430.46 7.06 437.86 7.06 437.86 7.36" />
        <polyline points="216.76 7.06 216.76 7.36 224.26 7.36" />
        <polyline points="216.76 7.06 224.26 7.06 224.26 7.36" />
        <polyline points="210.46 7.06 210.46 7.36 216.76 7.36" />
        <polyline points="210.46 7.06 216.76 7.06 216.76 7.36" />
        <polyline points="171.06 7.06 171.06 7.36 178.76 7.36" />
        <polyline points="171.06 7.06 178.76 7.06 178.76 7.36" />
        <polyline points="163.46 7.06 163.46 7.36 171.06 7.36" />
        <polyline points="163.46 7.06 171.06 7.06 171.06 7.36" />
        <polyline points="156.86 7.06 156.86 7.36 163.46 7.36" />
        <polyline points="156.86 7.06 163.46 7.06 163.46 7.36" />
        <polyline points="109.66 7.06 109.66 7.36 117.16 7.36" />
        <polyline points="109.66 7.06 117.16 7.06 117.16 7.36" />
        <polyline points="102.16 7.06 102.16 7.36 109.66 7.36" />
        <polyline points="102.16 7.06 109.66 7.06 109.66 7.36" />
        <polyline points="62.66 7.06 62.66 7.36 70.46 7.36" />
        <polyline points="62.66 7.06 70.46 7.06 70.46 7.36" />
        <polyline points="55.36 7.06 55.36 7.36 62.66 7.36" />
        <polyline points="55.36 7.06 62.66 7.06 62.66 7.36" />
        <polyline points="45.36 7.06 45.36 7.36 55.36 7.36" />
        <polyline points="45.36 7.06 55.36 7.06 55.36 7.36" />
        <polyline points="9.16 7.06 9.16 7.36 16.56 7.36" />
        <polyline points="9.16 7.06 16.56 7.06 16.56 7.36" />
        <polyline points=".36 7.06 .36 7.36 9.16 7.36" />
        <polyline points=".36 7.06 9.16 7.06 9.16 7.36" />
        <polyline points="659.76 7.06 659.76 7.36 663.26 7.36" />
        <polyline points="659.76 7.06 663.26 7.06 663.26 7.36" />
        <polyline points="654.36 7.06 654.36 7.36 659.76 7.36" />
        <polyline points="654.36 7.06 659.76 7.06 659.76 7.36" />
        <polyline points="476.96 7.06 476.96 7.36 483.66 7.36" />
        <polyline points="476.96 7.06 483.66 7.06 483.66 7.36" />
        <polyline points="423.86 7.06 423.86 7.36 430.46 7.36" />
        <polyline points="423.86 7.06 430.46 7.06 430.46 7.36" />
        <polyline points="331.46 7.06 331.46 7.36 338.96 7.36" />
        <polyline points="331.46 7.06 338.96 7.06 338.96 7.36" />
        <polyline points="324.06 7.06 324.06 7.36 331.46 7.36" />
        <polyline points="324.06 7.06 331.46 7.06 331.46 7.36" />
        <polyline points="317.16 7.06 317.16 7.36 324.06 7.36" />
        <polyline points="317.16 7.06 324.06 7.06 324.06 7.36" />
        <polyline points="279.66 7.06 279.66 7.36 285.56 7.36" />
        <polyline points="279.66 7.06 285.56 7.06 285.56 7.36" />
        <polyline points="267.96 7.06 267.96 7.36 279.66 7.36" />
        <polyline points="267.96 7.06 279.66 7.06 279.66 7.36" />
        <polyline points="263.76 7.06 263.76 7.36 267.96 7.36" />
        <polyline points="263.76 7.06 267.96 7.06 267.96 7.36" />
        <polyline points="539.16 7.06 539.16 7.36 546.56 7.36" />
        <polyline points="539.16 7.06 546.56 7.06 546.56 7.36" />
        <polyline points="535.76 7.06 535.76 7.36 539.16 7.36" />
        <polyline points="535.76 7.06 539.16 7.06 539.16 7.36" />
        <polyline points="385.16 7.06 385.16 7.36 392.16 7.36" />
        <polyline points="385.16 7.06 392.16 7.06 392.16 7.36" />
        <polyline points="377.46 7.06 377.46 7.36 385.16 7.36" />
        <polyline points="377.46 7.06 385.16 7.06 385.16 7.36" />
        <polyline points="539.16 7.36 539.16 7.46 546.56 7.46" />
        <polyline points="539.16 7.36 546.56 7.36 546.56 7.46" />
        <polyline points="535.76 7.36 535.76 7.46 539.16 7.46" />
        <polyline points="535.76 7.36 539.16 7.36 539.16 7.46" />
        <polyline points="476.96 7.36 476.96 7.46 483.66 7.46" />
        <polyline points="476.96 7.36 483.66 7.36 483.66 7.46" />
        <polyline points="437.86 7.36 437.86 7.46 445.26 7.46" />
        <polyline points="437.86 7.36 445.26 7.36 445.26 7.46" />
        <polyline points="430.46 7.36 430.46 7.46 437.86 7.46" />
        <polyline points="430.46 7.36 437.86 7.36 437.86 7.46" />
        <polyline points="423.86 7.36 423.86 7.46 430.46 7.46" />
        <polyline points="423.86 7.36 430.46 7.36 430.46 7.46" />
        <polyline points="385.16 7.36 385.16 7.46 392.16 7.46" />
        <polyline points="385.16 7.36 392.16 7.36 392.16 7.46" />
        <polyline points="377.46 7.36 377.46 7.46 385.16 7.46" />
        <polyline points="377.46 7.36 385.16 7.36 385.16 7.46" />
        <polyline points="370.56 3.56 370.56 7.46 377.46 7.46" />
        <polyline points="370.56 3.56 377.46 3.56 377.46 7.46" />
        <polyline points="331.46 7.36 331.46 7.46 338.96 7.46" />
        <polyline points="331.46 7.36 338.96 7.36 338.96 7.46" />
        <polyline points="317.16 7.36 317.16 7.46 324.06 7.46" />
        <polyline points="317.16 7.36 324.06 7.36 324.06 7.46" />
        <polyline points="279.66 7.36 279.66 7.46 285.56 7.46" />
        <polyline points="279.66 7.36 285.56 7.36 285.56 7.46" />
        <polyline points="267.96 7.36 267.96 7.46 279.66 7.46" />
        <polyline points="267.96 7.36 279.66 7.36 279.66 7.46" />
        <polyline points="263.76 7.36 263.76 7.46 267.96 7.46" />
        <polyline points="263.76 7.36 267.96 7.36 267.96 7.46" />
        <polyline points="224.26 7.06 224.26 7.46 231.96 7.46" />
        <polyline points="224.26 7.06 231.96 7.06 231.96 7.46" />
        <polyline points="216.76 7.36 216.76 7.46 224.26 7.46" />
        <polyline points="216.76 7.36 224.26 7.36 224.26 7.46" />
        <polyline points="210.46 7.36 210.46 7.46 216.76 7.46" />
        <polyline points="210.46 7.36 216.76 7.36 216.76 7.46" />
        <polyline points="171.06 7.36 171.06 7.46 178.76 7.46" />
        <polyline points="171.06 7.36 178.76 7.36 178.76 7.46" />
        <polyline points="163.46 7.36 163.46 7.46 171.06 7.46" />
        <polyline points="163.46 7.36 171.06 7.36 171.06 7.46" />
        <polyline points="156.86 7.36 156.86 7.46 163.46 7.46" />
        <polyline points="156.86 7.36 163.46 7.36 163.46 7.46" />
        <polyline points="117.16 6.46 117.16 7.46 125.16 7.46" />
        <polyline points="117.16 6.46 125.16 6.46 125.16 7.46" />
        <polyline points="109.66 7.36 109.66 7.46 117.16 7.46" />
        <polyline points="109.66 7.36 117.16 7.36 117.16 7.46" />
        <polyline points="102.16 7.36 102.16 7.46 109.66 7.46" />
        <polyline points="102.16 7.36 109.66 7.36 109.66 7.46" />
        <polyline points="62.66 7.36 62.66 7.46 70.46 7.46" />
        <polyline points="62.66 7.36 70.46 7.36 70.46 7.46" />
        <polyline points="55.36 7.36 55.36 7.46 62.66 7.46" />
        <polyline points="55.36 7.36 62.66 7.36 62.66 7.46" />
        <polyline points="45.36 7.36 45.36 7.46 55.36 7.46" />
        <polyline points="45.36 7.36 55.36 7.36 55.36 7.46" />
        <polyline points="9.16 7.36 9.16 7.46 16.56 7.46" />
        <polyline points="9.16 7.36 16.56 7.36 16.56 7.46" />
        <polyline points=".36 7.36 .36 7.46 9.16 7.46" />
        <polyline points=".36 7.36 9.16 7.36 9.16 7.46" />
        <polyline points="441.26 7.46 441.26 8.86 444.66 8.86" />
        <polyline points="441.26 7.46 444.66 7.46 444.66 8.86" />
        <polyline points="437.86 7.46 437.86 8.86 441.26 8.86" />
        <polyline points="437.86 7.46 441.26 7.46 441.26 8.86" />
        <polyline points="430.46 7.46 430.46 8.86 437.86 8.86" />
        <polyline points="430.46 7.46 437.86 7.46 437.86 8.86" />
        <polyline points="427.06 7.46 427.06 8.86 430.46 8.86" />
        <polyline points="427.06 7.46 430.46 7.46 430.46 8.86" />
        <polyline points="377.46 7.46 377.46 8.86 385.16 8.86" />
        <polyline points="377.46 7.46 385.16 7.46 385.16 8.86" />
        <polyline points="374.06 7.46 374.06 8.86 377.46 8.86" />
        <polyline points="374.06 7.46 377.46 7.46 377.46 8.86" />
        <polyline points="334.86 7.46 334.86 8.86 338.16 8.86" />
        <polyline points="334.86 7.46 338.16 7.46 338.16 8.86" />
        <polyline points="331.46 7.46 331.46 8.86 334.86 8.86" />
        <polyline points="331.46 7.46 334.86 7.46 334.86 8.86" />
        <polyline points="279.66 7.46 279.66 8.86 283.06 8.86" />
        <polyline points="279.66 7.46 283.06 7.46 283.06 8.86" />
        <polyline points="267.96 7.46 267.96 8.86 279.66 8.86" />
        <polyline points="267.96 7.46 279.66 7.46 279.66 8.86" />
        <polyline points="264.56 7.46 264.56 8.86 267.96 8.86" />
        <polyline points="264.56 7.46 267.96 7.46 267.96 8.86" />
        <polyline points="224.26 7.46 224.26 8.86 227.66 8.86" />
        <polyline points="224.26 7.46 227.66 7.46 227.66 8.86" />
        <polyline points="216.76 7.46 216.76 8.86 224.26 8.86" />
        <polyline points="216.76 7.46 224.26 7.46 224.26 8.86" />
        <polyline points="213.36 7.46 213.36 8.86 216.76 8.86" />
        <polyline points="213.36 7.46 216.76 7.46 216.76 8.86" />
        <polyline points="163.46 7.46 163.46 8.86 171.06 8.86" />
        <polyline points="163.46 7.46 171.06 7.46 171.06 8.86" />
        <polyline points="160.06 7.46 160.06 8.86 163.46 8.86" />
        <polyline points="160.06 7.46 163.46 7.46 163.46 8.86" />
        <polyline points="120.56 7.46 120.56 8.86 123.96 8.86" />
        <polyline points="120.56 7.46 123.96 7.46 123.96 8.86" />
        <polyline points="117.16 7.46 117.16 8.86 120.56 8.86" />
        <polyline points="117.16 7.46 120.56 7.46 120.56 8.86" />
        <polyline points="109.66 7.46 109.66 8.86 117.16 8.86" />
        <polyline points="109.66 7.46 117.16 7.46 117.16 8.86" />
        <polyline points="62.66 7.46 62.66 8.86 66.06 8.86" />
        <polyline points="62.66 7.46 66.06 7.46 66.06 8.86" />
        <polyline points="55.36 7.46 55.36 8.86 62.66 8.86" />
        <polyline points="55.36 7.46 62.66 7.46 62.66 8.86" />
        <polyline points="602.16 7.06 602.16 9.86 605.66 9.86" />
        <polyline points="602.16 7.06 605.66 7.06 605.66 9.86" />
        <polyline points="594.76 7.06 594.76 9.86 602.16 9.86" />
        <polyline points="594.76 7.06 602.16 7.06 602.16 9.86" />
        <polyline points="591.26 7.06 591.26 9.86 594.76 9.86" />
        <polyline points="591.26 7.06 594.76 7.06 594.76 9.86" />
        <polyline points="587.76 7.06 587.76 9.86 591.26 9.86" />
        <polyline points="587.76 7.06 591.26 7.06 591.26 9.86" />
        <polyline points="539.16 7.46 539.16 9.86 546.56 9.86" />
        <polyline points="539.16 7.46 546.56 7.46 546.56 9.86" />
        <polyline points="535.76 7.46 535.76 9.86 539.16 9.86" />
        <polyline points="535.76 7.46 539.16 7.46 539.16 9.86" />
        <polyline points="441.26 8.86 441.26 9.86 444.66 9.86" />
        <polyline points="441.26 8.86 444.66 8.86 444.66 9.86" />
        <polyline points="437.86 8.86 437.86 9.86 441.26 9.86" />
        <polyline points="437.86 8.86 441.26 8.86 441.26 9.86" />
        <polyline points="430.46 8.86 430.46 9.86 437.86 9.86" />
        <polyline points="430.46 8.86 437.86 8.86 437.86 9.86" />
        <polyline points="377.46 8.86 377.46 9.86 385.16 9.86" />
        <polyline points="377.46 8.86 385.16 8.86 385.16 9.86" />
        <polyline points="374.06 8.86 374.06 9.86 377.46 9.86" />
        <polyline points="374.06 8.86 377.46 8.86 377.46 9.86" />
        <polyline points="334.86 8.86 334.86 9.86 338.16 9.86" />
        <polyline points="334.86 8.86 338.16 8.86 338.16 9.86" />
        <polyline points="331.46 8.86 331.46 9.86 334.86 9.86" />
        <polyline points="331.46 8.86 334.86 8.86 334.86 9.86" />
        <polyline points="324.06 7.36 324.06 9.86 331.46 9.86" />
        <polyline points="324.06 7.36 331.46 7.36 331.46 9.86" />
        <polyline points="320.66 7.46 320.66 9.86 324.06 9.86" />
        <polyline points="320.66 7.46 324.06 7.46 324.06 9.86" />
        <polyline points="317.36 7.46 317.36 9.86 320.66 9.86" />
        <polyline points="317.36 7.46 320.66 7.46 320.66 9.86" />
        <polyline points="279.66 8.86 279.66 9.86 283.06 9.86" />
        <polyline points="279.66 8.86 283.06 8.86 283.06 9.86" />
        <polyline points="267.96 8.86 267.96 9.86 279.66 9.86" />
        <polyline points="267.96 8.86 279.66 8.86 279.66 9.86" />
        <polyline points="264.56 8.86 264.56 9.86 267.96 9.86" />
        <polyline points="264.56 8.86 267.96 8.86 267.96 9.86" />
        <polyline points="224.26 8.86 224.26 9.86 227.66 9.86" />
        <polyline points="224.26 8.86 227.66 8.86 227.66 9.86" />
        <polyline points="216.76 8.86 216.76 9.86 224.26 9.86" />
        <polyline points="216.76 8.86 224.26 8.86 224.26 9.86" />
        <polyline points="213.36 8.86 213.36 9.86 216.76 9.86" />
        <polyline points="213.36 8.86 216.76 8.86 216.76 9.86" />
        <polyline points="163.46 8.86 163.46 9.86 171.06 9.86" />
        <polyline points="163.46 8.86 171.06 8.86 171.06 9.86" />
        <polyline points="160.06 8.86 160.06 9.86 163.46 9.86" />
        <polyline points="160.06 8.86 163.46 8.86 163.46 9.86" />
        <polyline points="120.56 8.86 120.56 9.86 123.96 9.86" />
        <polyline points="120.56 8.86 123.96 8.86 123.96 9.86" />
        <polyline points="117.16 8.86 117.16 9.86 120.56 9.86" />
        <polyline points="117.16 8.86 120.56 8.86 120.56 9.86" />
        <polyline points="109.66 8.86 109.66 9.86 117.16 9.86" />
        <polyline points="109.66 8.86 117.16 8.86 117.16 9.86" />
        <polyline points="62.66 8.86 62.66 9.86 66.06 9.86" />
        <polyline points="62.66 8.86 66.06 8.86 66.06 9.86" />
        <polyline points="55.36 8.86 55.36 9.86 62.66 9.86" />
        <polyline points="55.36 8.86 62.66 8.86 62.66 9.86" />
        <polyline points="51.96 7.46 51.96 9.86 55.36 9.86" />
        <polyline points="51.96 7.46 55.36 7.46 55.36 9.86" />
        <polyline points="659.76 7.36 659.76 10.06 663.26 10.06" />
        <polyline points="659.76 7.36 663.26 7.36 663.26 10.06" />
        <polyline points="602.16 9.86 602.16 10.06 605.66 10.06" />
        <polyline points="602.16 9.86 605.66 9.86 605.66 10.06" />
        <polyline points="594.76 9.86 594.76 10.06 602.16 10.06" />
        <polyline points="594.76 9.86 602.16 9.86 602.16 10.06" />
        <polyline points="591.26 9.86 591.26 10.06 594.76 10.06" />
        <polyline points="591.26 9.86 594.76 9.86 594.76 10.06" />
        <polyline points="587.76 9.86 587.76 10.06 591.26 10.06" />
        <polyline points="587.76 9.86 591.26 9.86 591.26 10.06" />
        <polyline points="539.16 9.86 539.16 10.06 546.56 10.06" />
        <polyline points="539.16 9.86 546.56 9.86 546.56 10.06" />
        <polyline points="535.76 9.86 535.76 10.06 539.16 10.06" />
        <polyline points="535.76 9.86 539.16 9.86 539.16 10.06" />
        <polyline points="437.86 9.86 437.86 10.06 441.26 10.06" />
        <polyline points="437.86 9.86 441.26 9.86 441.26 10.06" />
        <polyline points="430.46 9.86 430.46 10.06 437.86 10.06" />
        <polyline points="430.46 9.86 437.86 9.86 437.86 10.06" />
        <polyline points="427.06 8.86 427.06 10.06 430.46 10.06" />
        <polyline points="427.06 8.86 430.46 8.86 430.46 10.06" />
        <polyline points="377.46 9.86 377.46 10.06 385.16 10.06" />
        <polyline points="377.46 9.86 385.16 9.86 385.16 10.06" />
        <polyline points="374.06 9.86 374.06 10.06 377.46 10.06" />
        <polyline points="374.06 9.86 377.46 9.86 377.46 10.06" />
        <polyline points="324.06 9.86 324.06 10.06 331.46 10.06" />
        <polyline points="324.06 9.86 331.46 9.86 331.46 10.06" />
        <polyline points="320.66 9.86 320.66 10.06 324.06 10.06" />
        <polyline points="320.66 9.86 324.06 9.86 324.06 10.06" />
        <polyline points="317.36 9.86 317.36 10.06 320.66 10.06" />
        <polyline points="317.36 9.86 320.66 9.86 320.66 10.06" />
        <polyline points="279.66 9.86 279.66 10.06 283.06 10.06" />
        <polyline points="279.66 9.86 283.06 9.86 283.06 10.06" />
        <polyline points="267.96 9.86 267.96 10.06 279.66 10.06" />
        <polyline points="267.96 9.86 279.66 9.86 279.66 10.06" />
        <polyline points="264.56 9.86 264.56 10.06 267.96 10.06" />
        <polyline points="264.56 9.86 267.96 9.86 267.96 10.06" />
        <polyline points="224.26 9.86 224.26 10.06 227.66 10.06" />
        <polyline points="224.26 9.86 227.66 9.86 227.66 10.06" />
        <polyline points="216.76 9.86 216.76 10.06 224.26 10.06" />
        <polyline points="216.76 9.86 224.26 9.86 224.26 10.06" />
        <polyline points="213.36 9.86 213.36 10.06 216.76 10.06" />
        <polyline points="213.36 9.86 216.76 9.86 216.76 10.06" />
        <polyline points="163.46 9.86 163.46 10.06 171.06 10.06" />
        <polyline points="163.46 9.86 171.06 9.86 171.06 10.06" />
        <polyline points="160.06 9.86 160.06 10.06 163.46 10.06" />
        <polyline points="160.06 9.86 163.46 9.86 163.46 10.06" />
        <polyline points="120.56 9.86 120.56 10.06 123.96 10.06" />
        <polyline points="120.56 9.86 123.96 9.86 123.96 10.06" />
        <polyline points="117.16 9.86 117.16 10.06 120.56 10.06" />
        <polyline points="117.16 9.86 120.56 9.86 120.56 10.06" />
        <polyline points="62.66 9.86 62.66 10.06 66.06 10.06" />
        <polyline points="62.66 9.86 66.06 9.86 66.06 10.06" />
        <polyline points="55.36 9.86 55.36 10.06 62.66 10.06" />
        <polyline points="55.36 9.86 62.66 9.86 62.66 10.06" />
        <polyline points="51.96 9.86 51.96 10.06 55.36 10.06" />
        <polyline points="51.96 9.86 55.36 9.86 55.36 10.06" />
        <polyline points="494.56 6.46 494.56 10.06 498.06 10.06" />
        <polyline points="494.56 6.46 498.06 6.46 498.06 10.06" />
        <polyline points="491.56 6.46 491.56 10.06 494.56 10.06" />
        <polyline points="491.56 6.46 494.56 6.46 494.56 10.06" />
        <polyline points="385.16 7.46 385.16 10.06 388.56 10.06" />
        <polyline points="385.16 7.46 388.56 7.46 388.56 10.06" />
        <polyline points="109.66 9.86 109.66 10.06 117.16 10.06" />
        <polyline points="109.66 9.86 117.16 9.86 117.16 10.06" />
        <polyline points="106.26 7.46 106.26 10.06 109.66 10.06" />
        <polyline points="106.26 7.46 109.66 7.46 109.66 10.06" />
        <polyline points="546.56 6.46 546.56 10.06 550.16 10.06" />
        <polyline points="546.56 6.46 550.16 6.46 550.16 10.06" />
        <polyline points="480.26 7.46 480.26 10.06 483.66 10.06" />
        <polyline points="480.26 7.46 483.66 7.46 483.66 10.06" />
        <polyline points="441.26 9.86 441.26 10.06 444.66 10.06" />
        <polyline points="441.26 9.86 444.66 9.86 444.66 10.06" />
        <polyline points="385.16 10.06 385.16 10.36 388.56 10.36" />
        <polyline points="385.16 10.06 388.56 10.06 388.56 10.36" />
        <polyline points="377.46 10.06 377.46 10.36 385.16 10.36" />
        <polyline points="377.46 10.06 385.16 10.06 385.16 10.36" />
        <polyline points="374.06 10.06 374.06 10.36 377.46 10.36" />
        <polyline points="374.06 10.06 377.46 10.06 377.46 10.36" />
        <polyline points="334.86 9.86 334.86 10.36 338.16 10.36" />
        <polyline points="334.86 9.86 338.16 9.86 338.16 10.36" />
        <polyline points="331.46 9.86 331.46 10.36 334.86 10.36" />
        <polyline points="331.46 9.86 334.86 9.86 334.86 10.36" />
        <polyline points="324.06 10.06 324.06 10.36 331.46 10.36" />
        <polyline points="324.06 10.06 331.46 10.06 331.46 10.36" />
        <polyline points="320.66 10.06 320.66 10.36 324.06 10.36" />
        <polyline points="320.66 10.06 324.06 10.06 324.06 10.36" />
        <polyline points="216.76 10.06 216.76 10.36 224.26 10.36" />
        <polyline points="216.76 10.06 224.26 10.06 224.26 10.36" />
        <polyline points="213.36 10.06 213.36 10.36 216.76 10.36" />
        <polyline points="213.36 10.06 216.76 10.06 216.76 10.36" />
        <polyline points="120.56 10.06 120.56 10.36 123.96 10.36" />
        <polyline points="120.56 10.06 123.96 10.06 123.96 10.36" />
        <polyline points="117.16 10.06 117.16 10.36 120.56 10.36" />
        <polyline points="117.16 10.06 120.56 10.06 120.56 10.36" />
        <polyline points="441.26 10.06 441.26 10.36 444.66 10.36" />
        <polyline points="441.26 10.06 444.66 10.06 444.66 10.36" />
        <polyline points="437.86 10.06 437.86 10.36 441.26 10.36" />
        <polyline points="437.86 10.06 441.26 10.06 441.26 10.36" />
        <polyline points="317.36 10.06 317.36 10.36 320.66 10.36" />
        <polyline points="317.36 10.06 320.66 10.06 320.66 10.36" />
        <polyline points="267.96 10.06 267.96 10.36 279.66 10.36" />
        <polyline points="267.96 10.06 279.66 10.06 279.66 10.36" />
        <polyline points="264.56 10.06 264.56 10.36 267.96 10.36" />
        <polyline points="264.56 10.06 267.96 10.06 267.96 10.36" />
        <polyline points="109.66 10.06 109.66 10.36 117.16 10.36" />
        <polyline points="109.66 10.06 117.16 10.06 117.16 10.36" />
        <polyline points="55.36 10.06 55.36 10.36 62.66 10.36" />
        <polyline points="55.36 10.06 62.66 10.06 62.66 10.36" />
        <polyline points="51.96 10.06 51.96 10.36 55.36 10.36" />
        <polyline points="51.96 10.06 55.36 10.06 55.36 10.36" />
        <polyline points="441.26 10.36 441.26 10.66 444.66 10.66" />
        <polyline points="441.26 10.36 444.66 10.36 444.66 10.66" />
        <polyline points="437.86 10.36 437.86 10.66 441.26 10.66" />
        <polyline points="437.86 10.36 441.26 10.36 441.26 10.66" />
        <polyline points="385.16 10.36 385.16 10.66 388.56 10.66" />
        <polyline points="385.16 10.36 388.56 10.36 388.56 10.66" />
        <polyline points="377.46 10.36 377.46 10.66 385.16 10.66" />
        <polyline points="377.46 10.36 385.16 10.36 385.16 10.66" />
        <polyline points="374.06 10.36 374.06 10.66 377.46 10.66" />
        <polyline points="374.06 10.36 377.46 10.36 377.46 10.66" />
        <polyline points="331.46 10.36 331.46 10.66 334.86 10.66" />
        <polyline points="331.46 10.36 334.86 10.36 334.86 10.66" />
        <polyline points="324.06 10.36 324.06 10.66 331.46 10.66" />
        <polyline points="324.06 10.36 331.46 10.36 331.46 10.66" />
        <polyline points="320.66 10.36 320.66 10.66 324.06 10.66" />
        <polyline points="320.66 10.36 324.06 10.36 324.06 10.66" />
        <polyline points="317.36 10.36 317.36 10.66 320.66 10.66" />
        <polyline points="317.36 10.36 320.66 10.36 320.66 10.66" />
        <polyline points="267.96 10.36 267.96 10.66 279.66 10.66" />
        <polyline points="267.96 10.36 279.66 10.36 279.66 10.66" />
        <polyline points="264.56 10.36 264.56 10.66 267.96 10.66" />
        <polyline points="264.56 10.36 267.96 10.36 267.96 10.66" />
        <polyline points="216.76 10.36 216.76 10.66 224.26 10.66" />
        <polyline points="216.76 10.36 224.26 10.36 224.26 10.66" />
        <polyline points="213.36 10.36 213.36 10.66 216.76 10.66" />
        <polyline points="213.36 10.36 216.76 10.36 216.76 10.66" />
        <polyline points="171.06 7.46 171.06 10.66 174.46 10.66" />
        <polyline points="171.06 7.46 174.46 7.46 174.46 10.66" />
        <polyline points="163.46 10.06 163.46 10.66 171.06 10.66" />
        <polyline points="163.46 10.06 171.06 10.06 171.06 10.66" />
        <polyline points="117.16 10.36 117.16 10.66 120.56 10.66" />
        <polyline points="117.16 10.36 120.56 10.36 120.56 10.66" />
        <polyline points="109.66 10.36 109.66 10.66 117.16 10.66" />
        <polyline points="109.66 10.36 117.16 10.36 117.16 10.66" />
        <polyline points="55.36 10.36 55.36 10.66 62.66 10.66" />
        <polyline points="55.36 10.36 62.66 10.36 62.66 10.66" />
        <polyline points="51.96 10.36 51.96 10.66 55.36 10.66" />
        <polyline points="51.96 10.36 55.36 10.36 55.36 10.66" />
        <polyline points="430.46 10.06 430.46 10.66 437.86 10.66" />
        <polyline points="430.46 10.06 437.86 10.06 437.86 10.66" />
        <polyline points="427.06 10.06 427.06 10.66 430.46 10.66" />
        <polyline points="427.06 10.06 430.46 10.06 430.46 10.66" />
        <polyline points="120.56 10.36 120.56 10.66 123.96 10.66" />
        <polyline points="120.56 10.36 123.96 10.36 123.96 10.66" />
        <polyline points="106.26 10.06 106.26 10.66 109.66 10.66" />
        <polyline points="106.26 10.06 109.66 10.06 109.66 10.66" />
        <polyline points="62.66 10.06 62.66 10.66 66.06 10.66" />
        <polyline points="62.66 10.06 66.06 10.06 66.06 10.66" />
        <polyline points="334.86 10.36 334.86 10.66 338.16 10.66" />
        <polyline points="334.86 10.36 338.16 10.36 338.16 10.66" />
        <polyline points="441.26 10.66 441.26 10.76 444.66 10.76" />
        <polyline points="441.26 10.66 444.66 10.66 444.66 10.76" />
        <polyline points="437.86 10.66 437.86 10.76 441.26 10.76" />
        <polyline points="437.86 10.66 441.26 10.66 441.26 10.76" />
        <polyline points="430.46 10.66 430.46 10.76 437.86 10.76" />
        <polyline points="430.46 10.66 437.86 10.66 437.86 10.76" />
        <polyline points="427.06 10.66 427.06 10.76 430.46 10.76" />
        <polyline points="427.06 10.66 430.46 10.66 430.46 10.76" />
        <polyline points="377.46 10.66 377.46 10.76 385.16 10.76" />
        <polyline points="377.46 10.66 385.16 10.66 385.16 10.76" />
        <polyline points="374.06 10.66 374.06 10.76 377.46 10.76" />
        <polyline points="374.06 10.66 377.46 10.66 377.46 10.76" />
        <polyline points="334.86 10.66 334.86 10.76 338.16 10.76" />
        <polyline points="334.86 10.66 338.16 10.66 338.16 10.76" />
        <polyline points="331.46 10.66 331.46 10.76 334.86 10.76" />
        <polyline points="331.46 10.66 334.86 10.66 334.86 10.76" />
        <polyline points="324.06 10.66 324.06 10.76 331.46 10.76" />
        <polyline points="324.06 10.66 331.46 10.66 331.46 10.76" />
        <polyline points="320.66 10.66 320.66 10.76 324.06 10.76" />
        <polyline points="320.66 10.66 324.06 10.66 324.06 10.76" />
        <polyline points="317.36 10.66 317.36 10.76 320.66 10.76" />
        <polyline points="317.36 10.66 320.66 10.66 320.66 10.76" />
        <polyline points="267.96 10.66 267.96 10.76 279.66 10.76" />
        <polyline points="267.96 10.66 279.66 10.66 279.66 10.76" />
        <polyline points="264.56 10.66 264.56 10.76 267.96 10.76" />
        <polyline points="264.56 10.66 267.96 10.66 267.96 10.76" />
        <polyline points="171.06 10.66 171.06 10.76 174.46 10.76" />
        <polyline points="171.06 10.66 174.46 10.66 174.46 10.76" />
        <polyline points="163.46 10.66 163.46 10.76 171.06 10.76" />
        <polyline points="163.46 10.66 171.06 10.66 171.06 10.76" />
        <polyline points="117.16 10.66 117.16 10.76 120.56 10.76" />
        <polyline points="117.16 10.66 120.56 10.66 120.56 10.76" />
        <polyline points="109.66 10.66 109.66 10.76 117.16 10.76" />
        <polyline points="109.66 10.66 117.16 10.66 117.16 10.76" />
        <polyline points="106.26 10.66 106.26 10.76 109.66 10.76" />
        <polyline points="106.26 10.66 109.66 10.66 109.66 10.76" />
        <polyline points=".36 7.46 .36 10.76 9.16 10.76" />
        <polyline points=".36 7.46 9.16 7.46 9.16 10.76" />
        <polyline points="480.26 10.06 480.26 10.86 483.66 10.86" />
        <polyline points="480.26 10.06 483.66 10.06 483.66 10.86" />
        <polyline points="441.26 10.76 441.26 10.86 444.66 10.86" />
        <polyline points="441.26 10.76 444.66 10.76 444.66 10.86" />
        <polyline points="437.86 10.76 437.86 10.86 441.26 10.86" />
        <polyline points="437.86 10.76 441.26 10.76 441.26 10.86" />
        <polyline points="430.46 10.76 430.46 10.86 437.86 10.86" />
        <polyline points="430.46 10.76 437.86 10.76 437.86 10.86" />
        <polyline points="427.06 10.76 427.06 10.86 430.46 10.86" />
        <polyline points="427.06 10.76 430.46 10.76 430.46 10.86" />
        <polyline points="385.16 10.66 385.16 10.86 388.56 10.86" />
        <polyline points="385.16 10.66 388.56 10.66 388.56 10.86" />
        <polyline points="377.46 10.76 377.46 10.86 385.16 10.86" />
        <polyline points="377.46 10.76 385.16 10.76 385.16 10.86" />
        <polyline points="374.06 10.76 374.06 10.86 377.46 10.86" />
        <polyline points="374.06 10.76 377.46 10.76 377.46 10.86" />
        <polyline points="334.86 10.76 334.86 10.86 338.16 10.86" />
        <polyline points="334.86 10.76 338.16 10.76 338.16 10.86" />
        <polyline points="331.46 10.76 331.46 10.86 334.86 10.86" />
        <polyline points="331.46 10.76 334.86 10.76 334.86 10.86" />
        <polyline points="324.06 10.76 324.06 10.86 331.46 10.86" />
        <polyline points="324.06 10.76 331.46 10.76 331.46 10.86" />
        <polyline points="320.66 10.76 320.66 10.86 324.06 10.86" />
        <polyline points="320.66 10.76 324.06 10.76 324.06 10.86" />
        <polyline points="317.36 10.76 317.36 10.86 320.66 10.86" />
        <polyline points="317.36 10.76 320.66 10.76 320.66 10.86" />
        <polyline points="279.66 10.06 279.66 10.86 283.06 10.86" />
        <polyline points="279.66 10.06 283.06 10.06 283.06 10.86" />
        <polyline points="267.96 10.76 267.96 10.86 279.66 10.86" />
        <polyline points="267.96 10.76 279.66 10.76 279.66 10.86" />
        <polyline points="264.56 10.76 264.56 10.86 267.96 10.86" />
        <polyline points="264.56 10.76 267.96 10.76 267.96 10.86" />
        <polyline points="224.26 10.06 224.26 10.86 227.66 10.86" />
        <polyline points="224.26 10.06 227.66 10.06 227.66 10.86" />
        <polyline points="216.76 10.66 216.76 10.86 224.26 10.86" />
        <polyline points="216.76 10.66 224.26 10.66 224.26 10.86" />
        <polyline points="213.36 10.66 213.36 10.86 216.76 10.86" />
        <polyline points="213.36 10.66 216.76 10.66 216.76 10.86" />
        <polyline points="171.06 10.76 171.06 10.86 174.46 10.86" />
        <polyline points="171.06 10.76 174.46 10.76 174.46 10.86" />
        <polyline points="160.06 10.06 160.06 10.86 163.46 10.86" />
        <polyline points="160.06 10.06 163.46 10.06 163.46 10.86" />
        <polyline points="120.56 10.66 120.56 10.86 123.96 10.86" />
        <polyline points="120.56 10.66 123.96 10.66 123.96 10.86" />
        <polyline points="117.16 10.76 117.16 10.86 120.56 10.86" />
        <polyline points="117.16 10.76 120.56 10.76 120.56 10.86" />
        <polyline points="109.66 10.76 109.66 10.86 117.16 10.86" />
        <polyline points="109.66 10.76 117.16 10.76 117.16 10.86" />
        <polyline points="106.26 10.76 106.26 10.86 109.66 10.86" />
        <polyline points="106.26 10.76 109.66 10.76 109.66 10.86" />
        <polyline points="62.66 10.66 62.66 10.86 66.06 10.86" />
        <polyline points="62.66 10.66 66.06 10.66 66.06 10.86" />
        <polyline points="55.36 10.66 55.36 10.86 62.66 10.86" />
        <polyline points="55.36 10.66 62.66 10.66 62.66 10.86" />
        <polyline points="51.96 10.66 51.96 10.86 55.36 10.86" />
        <polyline points="51.96 10.66 55.36 10.66 55.36 10.86" />
        <polyline points="6.26 10.76 6.26 10.86 9.56 10.86" />
        <polyline points="6.26 10.76 9.56 10.76 9.56 10.86" />
        <polyline points="2.36 10.76 2.36 10.86 6.26 10.86" />
        <polyline points="2.36 10.76 6.26 10.76 6.26 10.86" />
        <polyline points="1.56 10.76 1.56 10.86 2.36 10.86" />
        <polyline points="1.56 10.76 2.36 10.76 2.36 10.86" />
        <polyline points="594.76 10.06 594.76 12.26 602.16 12.26" />
        <polyline points="594.76 10.06 602.16 10.06 602.16 12.26" />
        <polyline points="539.16 10.06 539.16 12.26 546.56 12.26" />
        <polyline points="539.16 10.06 546.56 10.06 546.56 12.26" />
        <polyline points="491.06 10.06 491.06 12.26 491.56 12.26" />
        <polyline points="491.06 10.06 491.56 10.06 491.56 12.26" />
        <polyline points="6.26 10.86 6.26 12.26 9.56 12.26" />
        <polyline points="6.26 10.86 9.56 10.86 9.56 12.26" />
        <polyline points="2.36 10.86 2.36 12.26 6.26 12.26" />
        <polyline points="2.36 10.86 6.26 10.86 6.26 12.26" />
        <polyline points="483.66 12.26 483.66 12.66 491.56 12.66" />
        <polyline points="483.66 12.26 491.56 12.26 491.56 12.66" />
        <polyline points="6.26 12.26 6.26 12.66 9.56 12.66" />
        <polyline points="6.26 12.26 9.56 12.26 9.56 12.66" />
        <polyline points="2.36 12.26 2.36 12.66 6.26 12.66" />
        <polyline points="2.36 12.26 6.26 12.26 6.26 12.66" />
        <polyline points="654.36 7.36 654.36 13.26 659.76 13.26" />
        <polyline points="654.36 7.36 659.76 7.36 659.76 13.26" />
        <polyline points="648.26 6.46 648.26 13.26 653.66 13.26" />
        <polyline points="648.26 6.46 653.66 6.46 653.66 13.26" />
        <polyline points="6.26 12.66 6.26 13.26 9.56 13.26" />
        <polyline points="6.26 12.66 9.56 12.66 9.56 13.26" />
        <polyline points="2.36 12.66 2.36 13.26 6.26 13.26" />
        <polyline points="2.36 12.66 6.26 12.66 6.26 13.26" />
        <polyline points="6.26 13.26 6.26 14.06 9.56 14.06" />
        <polyline points="6.26 13.26 9.56 13.26 9.56 14.06" />
        <polyline points="2.36 13.26 2.36 14.06 6.26 14.06" />
        <polyline points="2.36 13.26 6.26 13.26 6.26 14.06" />
        <polyline points="1.56 10.86 1.56 14.06 2.36 14.06" />
        <polyline points="1.56 10.86 2.36 10.86 2.36 14.06" />
        <polyline points="109.66 10.86 109.66 14.26 117.16 14.26" />
        <polyline points="109.66 10.86 117.16 10.86 117.16 14.26" />
        <polyline points="2.36 14.06 2.36 14.26 6.26 14.26" />
        <polyline points="2.36 14.06 6.26 14.06 6.26 14.26" />
        <polyline points="1.56 14.06 1.56 14.26 2.36 14.26" />
        <polyline points="1.56 14.06 2.36 14.06 2.36 14.26" />
        <polyline points="55.36 10.86 55.36 14.26 62.66 14.26" />
        <polyline points="55.36 10.86 62.66 10.86 62.66 14.26" />
        <polyline points="267.96 10.86 267.96 14.56 279.66 14.56" />
        <polyline points="267.96 10.86 279.66 10.86 279.66 14.56" />
        <polyline points="163.46 10.76 163.46 14.66 171.06 14.66" />
        <polyline points="163.46 10.76 171.06 10.76 171.06 14.66" />
        <polyline points="216.76 10.86 216.76 14.76 224.26 14.76" />
        <polyline points="216.76 10.86 224.26 10.86 224.26 14.76" />
        <polyline points="430.46 10.86 430.46 14.96 437.86 14.96" />
        <polyline points="430.46 10.86 437.86 10.86 437.86 14.96" />
        <polyline points="377.46 10.86 377.46 15.16 385.16 15.16" />
        <polyline points="377.46 10.86 385.16 10.86 385.16 15.16" />
        <polyline points="324.06 10.86 324.06 15.16 331.46 15.16" />
        <polyline points="324.06 10.86 331.46 10.86 331.46 15.16" />
        <polyline points="2.36 14.26 2.36 15.16 6.26 15.16" />
        <polyline points="2.36 14.26 6.26 14.26 6.26 15.16" />
        <polyline points="1.56 14.26 1.56 15.16 2.36 15.16" />
        <polyline points="1.56 14.26 2.36 14.26 2.36 15.16" />
        <polyline points="433.56 14.96 433.56 17.26 434.76 17.26" />
        <polyline points="433.56 14.96 434.76 14.96 434.76 17.26" />
        <polyline points="2.36 15.16 2.36 17.26 6.26 17.26" />
        <polyline points="2.36 15.16 6.26 15.16 6.26 17.26" />
        <polyline points="1.56 15.16 1.56 17.26 2.36 17.26" />
        <polyline points="1.56 15.16 2.36 15.16 2.36 17.26" />
        <polyline points="2.36 17.26 2.36 17.56 6.26 17.56" />
        <polyline points="2.36 17.26 6.26 17.26 6.26 17.56" />
        <polyline points="1.56 17.26 1.56 17.56 2.36 17.56" />
        <polyline points="1.56 17.26 2.36 17.26 2.36 17.56" />
        <polyline points="1.56 17.56 1.56 18.26 2.36 18.26" />
        <polyline points="1.56 17.56 2.36 17.56 2.36 18.26" />
        <polyline points="1.56 48.76 1.56 49.46 2.36 49.46" />
        <polyline points="1.56 48.76 2.36 48.76 2.36 49.46" />
        <polyline points="2.36 49.46 2.36 53.06 6.26 53.06" />
        <polyline points="2.36 49.46 6.26 49.46 6.26 53.06" />
        <polyline points="6.26 53.06 6.26 54.46 9.26 54.46" />
        <polyline points="6.26 53.06 9.26 53.06 9.26 54.46" />
        <polyline points="2.36 53.06 2.36 54.46 6.26 54.46" />
        <polyline points="2.36 53.06 6.26 53.06 6.26 54.46" />
        <polyline points="6.26 54.46 6.26 54.86 9.26 54.86" />
        <polyline points="6.26 54.46 9.26 54.46 9.26 54.86" />
        <polyline points="2.36 54.46 2.36 54.86 6.26 54.86" />
        <polyline points="2.36 54.46 6.26 54.46 6.26 54.86" />
        <polyline points="6.26 54.86 6.26 56.36 9.26 56.36" />
        <polyline points="6.26 54.86 9.26 54.86 9.26 56.36" />
        <polyline points="2.36 54.86 2.36 56.36 6.26 56.36" />
        <polyline points="2.36 54.86 6.26 54.86 6.26 56.36" />
        <polyline points="1.56 49.46 1.56 56.36 2.36 56.36" />
        <polyline points="1.56 49.46 2.36 49.46 2.36 56.36" />
        <polyline points=".36 56.36 .36 63.46 9.26 63.46" />
        <polyline points=".36 56.36 9.26 56.36 9.26 63.46" />
        <polyline points="5.76 63.46 5.76 66.76 9.26 66.76" />
        <polyline points="5.76 63.46 9.26 63.46 9.26 66.76" />
        <polyline points="2.36 63.46 2.36 66.76 5.76 66.76" />
        <polyline points="2.36 63.46 5.76 63.46 5.76 66.76" />
        <polyline points="2.36 66.76 2.36 70.96 5.76 70.96" />
        <polyline points="2.36 66.76 5.76 66.76 5.76 70.96" />
        <polyline points="1.56 63.46 1.56 70.96 2.36 70.96" />
        <polyline points="1.56 63.46 2.36 63.46 2.36 70.96" />
        <polyline points="1.56 70.96 1.56 71.76 2.36 71.76" />
        <polyline points="1.56 70.96 2.36 70.96 2.36 71.76" />
        <polyline points="1.56 101.96 1.56 102.76 2.36 102.76" />
        <polyline points="1.56 101.96 2.36 101.96 2.36 102.76" />
        <polyline points="2.36 102.76 2.36 106.16 5.76 106.16" />
        <polyline points="2.36 102.76 5.76 102.76 5.76 106.16" />
        <polyline points="5.76 106.16 5.76 107.76 8.96 107.76" />
        <polyline points="5.76 106.16 8.96 106.16 8.96 107.76" />
        <polyline points="2.36 106.16 2.36 107.76 5.76 107.76" />
        <polyline points="2.36 106.16 5.76 106.16 5.76 107.76" />
        <polyline points="5.76 107.76 5.76 108.16 8.96 108.16" />
        <polyline points="5.76 107.76 8.96 107.76 8.96 108.16" />
        <polyline points="2.36 107.76 2.36 108.16 5.76 108.16" />
        <polyline points="2.36 107.76 5.76 107.76 5.76 108.16" />
        <polyline points="5.76 108.16 5.76 108.46 8.96 108.46" />
        <polyline points="5.76 108.16 8.96 108.16 8.96 108.46" />
        <polyline points="2.36 108.16 2.36 108.46 5.76 108.46" />
        <polyline points="2.36 108.16 5.76 108.16 5.76 108.46" />
        <polyline points="1.56 102.76 1.56 108.46 2.36 108.46" />
        <polyline points="1.56 102.76 2.36 102.76 2.36 108.46" />
        <polyline points="525.06 108.46 525.06 109.66 533.56 109.66" />
        <polyline points="525.06 108.46 533.56 108.46 533.56 109.66" />
        <polyline points="5.76 108.46 5.76 109.66 8.96 109.66" />
        <polyline points="5.76 108.46 8.96 108.46 8.96 109.66" />
        <polyline points="2.36 108.46 2.36 109.66 5.76 109.66" />
        <polyline points="2.36 108.46 5.76 108.46 5.76 109.66" />
        <polyline points="1.56 108.46 1.56 109.66 2.36 109.66" />
        <polyline points="1.56 108.46 2.36 108.46 2.36 109.66" />
        <polyline points="552.26 108.46 552.26 110.26 560.76 110.26" />
        <polyline points="552.26 108.46 560.76 108.46 560.76 110.26" />
        <polyline points="525.06 109.66 525.06 110.26 533.56 110.26" />
        <polyline points="525.06 109.66 533.56 109.66 533.56 110.26" />
        <polyline points=".36 109.66 .36 116.56 8.96 116.56" />
        <polyline points=".36 109.66 8.96 109.66 8.96 116.56" />
        <polyline points="594.76 104.66 594.76 116.66 602.16 116.66" />
        <polyline points="594.76 104.66 602.16 104.66 602.16 116.66" />
        <polyline points="6.26 116.56 6.26 116.66 8.96 116.66" />
        <polyline points="6.26 116.56 8.96 116.56 8.96 116.66" />
        <polyline points="2.36 116.56 2.36 116.66 6.26 116.66" />
        <polyline points="2.36 116.56 6.26 116.56 6.26 116.66" />
        <polyline points="1.56 116.56 1.56 116.66 2.36 116.66" />
        <polyline points="1.56 116.56 2.36 116.56 2.36 116.66" />
        <polyline points="483.66 105.86 483.66 117.76 491.06 117.76" />
        <polyline points="483.66 105.86 491.06 105.86 491.06 117.76" />
        <polyline points="6.26 116.66 6.26 117.76 8.96 117.76" />
        <polyline points="6.26 116.66 8.96 116.66 8.96 117.76" />
        <polyline points="2.36 116.66 2.36 117.76 6.26 117.76" />
        <polyline points="2.36 116.66 6.26 116.66 6.26 117.76" />
        <polyline points="6.26 117.76 6.26 119.96 8.96 119.96" />
        <polyline points="6.26 117.76 8.96 117.76 8.96 119.96" />
        <polyline points="2.36 117.76 2.36 123.66 6.26 123.66" />
        <polyline points="2.36 117.76 6.26 117.76 6.26 123.66" />
        <polyline points="1.56 116.66 1.56 123.66 2.36 123.66" />
        <polyline points="1.56 116.66 2.36 116.66 2.36 123.66" />
        <polyline points="1.56 123.66 1.56 124.36 2.36 124.36" />
        <polyline points="1.56 123.66 2.36 123.66 2.36 124.36" />
        <polyline points="560.76 115.16 560.76 127.96 562.66 127.96" />
        <polyline points="560.76 115.16 562.66 115.16 562.66 127.96" />
        <polyline points="523.16 115.16 523.16 127.96 525.06 127.96" />
        <polyline points="523.16 115.16 525.06 115.16 525.06 127.96" />
        <polyline points="560.76 127.96 560.76 132.06 566.96 132.06" />
        <polyline points="560.76 127.96 566.96 127.96 566.96 132.06" />
        <polyline points="518.76 127.96 518.76 132.06 525.06 132.06" />
        <polyline points="518.76 127.96 525.06 127.96 525.06 132.06" />
        <polyline points="560.76 132.06 560.76 133.96 566.96 133.96" />
        <polyline points="560.76 132.06 566.96 132.06 566.96 133.96" />
        <polyline points="525.06 132.06 525.06 133.96 560.76 133.96" />
        <polyline points="525.06 132.06 560.76 132.06 560.76 133.96" />
        <polyline points="518.76 132.06 518.76 133.96 525.06 133.96" />
        <polyline points="518.76 132.06 525.06 132.06 525.06 133.96" />
        <polyline points="1.56 154.66 1.56 155.36 2.36 155.36" />
        <polyline points="1.56 154.66 2.36 154.66 2.36 155.36" />
        <polyline points="2.36 155.36 2.36 155.86 6.26 155.86" />
        <polyline points="2.36 155.36 6.26 155.36 6.26 155.86" />
        <polyline points="1.56 155.36 1.56 155.86 2.36 155.86" />
        <polyline points="1.56 155.36 2.36 155.36 2.36 155.86" />
        <polyline points="6.26 155.86 6.26 156.26 9.26 156.26" />
        <polyline points="6.26 155.86 9.26 155.86 9.26 156.26" />
        <polyline points="2.36 155.86 2.36 156.26 6.26 156.26" />
        <polyline points="2.36 155.86 6.26 155.86 6.26 156.26" />
        <polyline points="1.56 155.86 1.56 156.26 2.36 156.26" />
        <polyline points="1.56 155.86 2.36 155.86 2.36 156.26" />
        <polyline points="2.36 156.26 2.36 156.56 6.26 156.56" />
        <polyline points="2.36 156.26 6.26 156.26 6.26 156.56" />
        <polyline points="1.56 156.26 1.56 156.56 2.36 156.56" />
        <polyline points="1.56 156.26 2.36 156.26 2.36 156.56" />
        <polyline points="595.86 116.66 595.86 156.86 598.06 156.86" />
        <polyline points="595.86 116.66 598.06 116.66 598.06 156.86" />
        <polyline points="6.26 156.26 6.26 157.06 6.56 157.06" />
        <polyline points="6.26 156.26 6.56 156.26 6.56 157.06" />
        <polyline points="2.36 156.56 2.36 157.06 6.26 157.06" />
        <polyline points="2.36 156.56 6.26 156.56 6.26 157.06" />
        <polyline points="1.56 156.56 1.56 157.06 2.36 157.06" />
        <polyline points="1.56 156.56 2.36 156.56 2.36 157.06" />
        <polyline points="6.26 157.06 6.26 157.16 6.56 157.16" />
        <polyline points="6.26 157.06 6.56 157.06 6.56 157.16" />
        <polyline points="2.36 157.06 2.36 157.16 6.26 157.16" />
        <polyline points="2.36 157.06 6.26 157.06 6.26 157.16" />
        <polyline points="1.56 157.06 1.56 157.16 2.36 157.16" />
        <polyline points="1.56 157.06 2.36 157.06 2.36 157.16" />
        <polyline points="2.36 157.16 2.36 157.76 6.26 157.76" />
        <polyline points="2.36 157.16 6.26 157.16 6.26 157.76" />
        <polyline points="1.56 157.16 1.56 157.76 2.36 157.76" />
        <polyline points="1.56 157.16 2.36 157.16 2.36 157.76" />
        <polyline points="2.36 157.76 2.36 158.56 6.26 158.56" />
        <polyline points="2.36 157.76 6.26 157.76 6.26 158.56" />
        <polyline points="1.56 157.76 1.56 158.56 2.36 158.56" />
        <polyline points="1.56 157.76 2.36 157.76 2.36 158.56" />
        <polyline points="6.26 157.16 6.26 158.86 6.56 158.86" />
        <polyline points="6.26 157.16 6.56 157.16 6.56 158.86" />
        <polyline points="2.36 158.56 2.36 158.86 6.26 158.86" />
        <polyline points="2.36 158.56 6.26 158.56 6.26 158.86" />
        <polyline points="1.56 158.56 1.56 158.86 2.36 158.86" />
        <polyline points="1.56 158.56 2.36 158.56 2.36 158.86" />
        <polyline points="648.26 156.76 648.26 158.96 653.66 158.96" />
        <polyline points="648.26 156.76 653.66 156.76 653.66 158.96" />
        <polyline points="648.26 158.96 648.26 159.26 653.66 159.26" />
        <polyline points="648.26 158.96 653.66 158.96 653.66 159.26" />
        <polyline points="644.76 158.96 644.76 159.26 648.26 159.26" />
        <polyline points="644.76 158.96 648.26 158.96 648.26 159.26" />
        <polyline points="2.36 158.86 2.36 159.26 6.26 159.26" />
        <polyline points="2.36 158.86 6.26 158.86 6.26 159.26" />
        <polyline points="1.56 158.86 1.56 159.26 2.36 159.26" />
        <polyline points="1.56 158.86 2.36 158.86 2.36 159.26" />
        <polyline points="648.26 159.26 648.26 159.56 653.66 159.56" />
        <polyline points="648.26 159.26 653.66 159.26 653.66 159.56" />
        <polyline points="644.76 159.26 644.76 159.56 648.26 159.56" />
        <polyline points="644.76 159.26 648.26 159.26 648.26 159.56" />
        <polyline points="2.36 159.26 2.36 159.56 6.26 159.56" />
        <polyline points="2.36 159.26 6.26 159.26 6.26 159.56" />
        <polyline points="1.56 159.26 1.56 159.56 2.36 159.56" />
        <polyline points="1.56 159.26 2.36 159.26 2.36 159.56" />
        <polyline points="8.96 156.26 8.96 159.56 9.26 159.56" />
        <polyline points="8.96 156.26 9.26 156.26 9.26 159.56" />
        <polyline points="6.26 158.86 6.26 159.56 6.56 159.56" />
        <polyline points="6.26 158.86 6.56 158.86 6.56 159.56" />
        <polyline points="648.26 159.56 648.26 159.96 653.66 159.96" />
        <polyline points="648.26 159.56 653.66 159.56 653.66 159.96" />
        <polyline points="644.76 159.56 644.76 159.96 648.26 159.96" />
        <polyline points="644.76 159.56 648.26 159.56 648.26 159.96" />
        <polyline points="6.26 159.56 6.26 159.96 9.26 159.96" />
        <polyline points="6.26 159.56 9.26 159.56 9.26 159.96" />
        <polyline points="2.36 159.56 2.36 159.96 6.26 159.96" />
        <polyline points="2.36 159.56 6.26 159.56 6.26 159.96" />
        <polyline points="1.56 159.56 1.56 159.96 2.36 159.96" />
        <polyline points="1.56 159.56 2.36 159.56 2.36 159.96" />
        <polyline points="648.26 159.96 648.26 161.06 653.66 161.06" />
        <polyline points="648.26 159.96 653.66 159.96 653.66 161.06" />
        <polyline points="644.76 159.96 644.76 161.06 648.26 161.06" />
        <polyline points="644.76 159.96 648.26 159.96 648.26 161.06" />
        <polyline points="648.26 161.06 648.26 161.36 653.66 161.36" />
        <polyline points="648.26 161.06 653.66 161.06 653.66 161.36" />
        <polyline points="644.76 161.06 644.76 161.36 648.26 161.36" />
        <polyline points="644.76 161.06 648.26 161.06 648.26 161.36" />
        <polyline points="648.26 161.36 648.26 161.46 653.66 161.46" />
        <polyline points="648.26 161.36 653.66 161.36 653.66 161.46" />
        <polyline points="644.76 161.36 644.76 161.46 648.26 161.46" />
        <polyline points="644.76 161.36 648.26 161.36 648.26 161.46" />
        <polyline points="648.26 161.46 648.26 161.66 653.66 161.66" />
        <polyline points="648.26 161.46 653.66 161.46 653.66 161.66" />
        <polyline points="644.76 161.46 644.76 161.66 648.26 161.66" />
        <polyline points="644.76 161.46 648.26 161.46 648.26 161.66" />
        <polyline points="159.36 157.16 159.36 161.66 169.66 161.66" />
        <polyline points="159.36 157.16 169.66 157.16 169.66 161.66" />
        <polyline points=".36 159.96 .36 161.66 9.26 161.66" />
        <polyline points=".36 159.96 9.26 159.96 9.26 161.66" />
        <polyline points="165.06 161.66 165.06 161.86 168.56 161.86" />
        <polyline points="165.06 161.66 168.56 161.66 168.56 161.86" />
        <polyline points="161.96 161.66 161.96 161.86 165.06 161.86" />
        <polyline points="161.96 161.66 165.06 161.66 165.06 161.86" />
        <polyline points="648.26 161.66 648.26 161.86 653.66 161.86" />
        <polyline points="648.26 161.66 653.66 161.66 653.66 161.86" />
        <polyline points="644.76 161.66 644.76 161.86 648.26 161.86" />
        <polyline points="644.76 161.66 648.26 161.66 648.26 161.86" />
        <polyline points="648.26 161.86 648.26 161.96 653.66 161.96" />
        <polyline points="648.26 161.86 653.66 161.86 653.66 161.96" />
        <polyline points="644.76 161.86 644.76 161.96 648.26 161.96" />
        <polyline points="644.76 161.86 648.26 161.86 648.26 161.96" />
        <polyline points="165.06 161.86 165.06 161.96 168.56 161.96" />
        <polyline points="165.06 161.86 168.56 161.86 168.56 161.96" />
        <polyline points="161.96 161.86 161.96 161.96 165.06 161.96" />
        <polyline points="161.96 161.86 165.06 161.86 165.06 161.96" />
        <polyline points="9.26 161.66 9.26 161.96 12.16 161.96" />
        <polyline points="9.26 161.66 12.16 161.66 12.16 161.96" />
        <polyline points="648.26 161.96 648.26 162.16 653.66 162.16" />
        <polyline points="648.26 161.96 653.66 161.96 653.66 162.16" />
        <polyline points="644.76 161.96 644.76 162.16 648.26 162.16" />
        <polyline points="644.76 161.96 648.26 161.96 648.26 162.16" />
        <polyline points="165.06 161.96 165.06 162.16 168.56 162.16" />
        <polyline points="165.06 161.96 168.56 161.96 168.56 162.16" />
        <polyline points="164.76 161.96 164.76 162.16 165.06 162.16" />
        <polyline points="164.76 161.96 165.06 161.96 165.06 162.16" />
        <polyline points="648.26 162.16 648.26 162.56 653.66 162.56" />
        <polyline points="648.26 162.16 653.66 162.16 653.66 162.56" />
        <polyline points="644.76 162.16 644.76 162.56 648.26 162.56" />
        <polyline points="644.76 162.16 648.26 162.16 648.26 162.56" />
        <polyline points="594.76 156.86 594.76 162.56 602.16 162.56" />
        <polyline points="594.76 156.86 602.16 156.86 602.16 162.56" />
        <polyline points="539.36 161.46 539.36 162.56 546.46 162.56" />
        <polyline points="539.36 161.46 546.46 161.46 546.46 162.56" />
        <polyline points="165.06 162.16 165.06 162.56 168.56 162.56" />
        <polyline points="165.06 162.16 168.56 162.16 168.56 162.56" />
        <polyline points="164.76 162.16 164.76 162.56 165.06 162.56" />
        <polyline points="164.76 162.16 165.06 162.16 165.06 162.56" />
        <polyline points="654.36 156.76 654.36 162.56 659.76 162.56" />
        <polyline points="654.36 156.76 659.76 156.76 659.76 162.56" />
        <polyline points="648.26 162.56 648.26 162.86 653.66 162.86" />
        <polyline points="648.26 162.56 653.66 162.56 653.66 162.86" />
        <polyline points="642.66 162.56 642.66 162.86 648.26 162.86" />
        <polyline points="642.66 162.56 648.26 162.56 648.26 162.86" />
        <polyline points="165.06 162.56 165.06 162.86 168.56 162.86" />
        <polyline points="165.06 162.56 168.56 162.56 168.56 162.86" />
        <polyline points="164.76 162.56 164.76 162.86 165.06 162.86" />
        <polyline points="164.76 162.56 165.06 162.56 165.06 162.86" />
        <polyline points="648.26 162.86 648.26 163.26 653.66 163.26" />
        <polyline points="648.26 162.86 653.66 162.86 653.66 163.26" />
        <polyline points="642.66 162.86 642.66 163.26 648.26 163.26" />
        <polyline points="642.66 162.86 648.26 162.86 648.26 163.26" />
        <polyline points="165.06 162.86 165.06 163.26 168.56 163.26" />
        <polyline points="165.06 162.86 168.56 162.86 168.56 163.26" />
        <polyline points="164.76 162.86 164.76 163.26 165.06 163.26" />
        <polyline points="164.76 162.86 165.06 162.86 165.06 163.26" />
        <polyline points="165.06 163.26 165.06 164.56 168.56 164.56" />
        <polyline points="165.06 163.26 168.56 163.26 168.56 164.56" />
        <polyline points="164.76 163.26 164.76 164.56 165.06 164.56" />
        <polyline points="164.76 163.26 165.06 163.26 165.06 164.56" />
        <polyline points="161.96 161.96 161.96 164.56 162.26 164.56" />
        <polyline points="161.96 161.96 162.26 161.96 162.26 164.56" />
        <polyline points="11.76 161.96 11.76 164.56 12.16 164.56" />
        <polyline points="11.76 161.96 12.16 161.96 12.16 164.56" />
        <polyline points="9.26 161.96 9.26 164.56 9.36 164.56" />
        <polyline points="9.26 161.96 9.36 161.96 9.36 164.56" />
        <polyline points="161.96 164.56 161.96 164.86 165.06 164.86" />
        <polyline points="161.96 164.56 165.06 164.56 165.06 164.86" />
        <polyline points="9.26 164.56 9.26 164.86 12.16 164.86" />
        <polyline points="9.26 164.56 12.16 164.56 12.16 164.86" />
        <polyline points="648.26 163.26 648.26 164.86 653.66 164.86" />
        <polyline points="648.26 163.26 653.66 163.26 653.66 164.86" />
        <polyline points="642.66 163.26 642.66 164.86 648.26 164.86" />
        <polyline points="642.66 163.26 648.26 163.26 648.26 164.86" />
        <polyline points="590.76 162.56 590.76 164.86 594.76 164.86" />
        <polyline points="590.76 162.56 594.76 162.56 594.76 164.86" />
        <polyline points="546.46 162.56 546.46 164.86 566.96 164.86" />
        <polyline points="546.46 162.56 566.96 162.56 566.96 164.86" />
        <polyline points="520.56 162.56 520.56 164.86 539.36 164.86" />
        <polyline points="520.56 162.56 539.36 162.56 539.36 164.86" />
        <polyline points="602.16 162.56 602.16 164.86 609.86 164.86" />
        <polyline points="602.16 162.56 609.86 162.56 609.86 164.86" />
        <polyline points="659.76 162.56 659.76 164.86 665.36 164.86" />
        <polyline points="659.76 162.56 665.36 162.56 665.36 164.86" />
        <polyline points="322.76 158.86 322.76 164.96 329.86 164.96" />
        <polyline points="322.76 158.86 329.86 158.86 329.86 164.96" />
        <polyline points="267.66 159.56 267.66 164.96 279.26 164.96" />
        <polyline points="267.66 159.56 279.26 159.56 279.26 164.96" />
        <polyline points="602.16 164.86 602.16 166.16 610.36 166.16" />
        <polyline points="602.16 164.86 610.36 164.86 610.36 166.16" />
        <polyline points="594.76 162.56 594.76 166.16 602.16 166.16" />
        <polyline points="594.76 162.56 602.16 162.56 602.16 166.16" />
        <polyline points="322.76 164.96 322.76 166.16 329.86 166.16" />
        <polyline points="322.76 164.96 329.86 164.96 329.86 166.16" />
        <polyline points="279.26 164.96 279.26 166.16 322.76 166.16" />
        <polyline points="279.26 164.96 322.76 164.96 322.76 166.16" />
        <polyline points="267.66 164.96 267.66 166.16 279.26 166.16" />
        <polyline points="267.66 164.96 279.26 164.96 279.26 166.16" />
        <polyline points="223.06 164.96 223.06 166.16 267.66 166.16" />
        <polyline points="223.06 164.96 267.66 164.96 267.66 166.16" />
        <polyline points="215.66 159.26 215.66 166.16 223.06 166.16" />
        <polyline points="215.66 159.26 223.06 159.26 223.06 166.16" />
        <polyline points="602.16 166.16 602.16 166.46 610.36 166.46" />
        <polyline points="602.16 166.16 610.36 166.16 610.36 166.46" />
        <polyline points="594.76 166.16 594.76 166.46 602.16 166.46" />
        <polyline points="594.76 166.16 602.16 166.16 602.16 166.46" />
        <polyline points="223.06 166.16 223.06 166.46 267.66 166.46" />
        <polyline points="223.06 166.16 267.66 166.16 267.66 166.46" />
        <polyline points="215.66 166.16 215.66 166.46 223.06 166.46" />
        <polyline points="215.66 166.16 223.06 166.16 223.06 166.46" />
        <polyline points="648.26 164.86 648.26 166.46 653.66 166.46" />
        <polyline points="648.26 164.86 653.66 164.86 653.66 166.46" />
        <polyline points="642.06 164.86 642.06 166.46 648.26 166.46" />
        <polyline points="642.06 164.86 648.26 164.86 648.26 166.46" />
        <polyline points="279.26 166.16 279.26 166.46 322.76 166.46" />
        <polyline points="279.26 166.16 322.76 166.16 322.76 166.46" />
        <polyline points="267.66 166.16 267.66 166.46 279.26 166.46" />
        <polyline points="267.66 166.16 279.26 166.16 279.26 166.46" />
        <polyline points="648.26 166.46 648.26 166.96 653.66 166.96" />
        <polyline points="648.26 166.46 653.66 166.46 653.66 166.96" />
        <polyline points="642.06 166.46 642.06 166.96 648.26 166.96" />
        <polyline points="642.06 166.46 648.26 166.46 648.26 166.96" />
        <polyline points="602.16 166.46 602.16 166.96 610.36 166.96" />
        <polyline points="602.16 166.46 610.36 166.46 610.36 166.96" />
        <polyline points="594.76 166.46 594.76 166.96 602.16 166.96" />
        <polyline points="594.76 166.46 602.16 166.46 602.16 166.96" />
        <polyline points="279.26 166.46 279.26 166.96 322.76 166.96" />
        <polyline points="279.26 166.46 322.76 166.46 322.76 166.96" />
        <polyline points="267.66 166.46 267.66 166.96 279.26 166.96" />
        <polyline points="267.66 166.46 279.26 166.46 279.26 166.96" />
        <polyline points="223.06 166.46 223.06 166.96 267.66 166.96" />
        <polyline points="223.06 166.46 267.66 166.46 267.66 166.96" />
        <polyline points="215.66 166.46 215.66 166.96 223.06 166.96" />
        <polyline points="215.66 166.46 223.06 166.46 223.06 166.96" />
        <polyline points="602.16 166.96 602.16 167.26 610.36 167.26" />
        <polyline points="602.16 166.96 610.36 166.96 610.36 167.26" />
        <polyline points="594.76 166.96 594.76 167.26 602.16 167.26" />
        <polyline points="594.76 166.96 602.16 166.96 602.16 167.26" />
        <polyline points="322.76 166.16 322.76 167.26 329.86 167.26" />
        <polyline points="322.76 166.16 329.86 166.16 329.86 167.26" />
        <polyline points="279.26 166.96 279.26 167.26 322.76 167.26" />
        <polyline points="279.26 166.96 322.76 166.96 322.76 167.26" />
        <polyline points="267.66 166.96 267.66 167.26 279.26 167.26" />
        <polyline points="267.66 166.96 279.26 166.96 279.26 167.26" />
        <polyline points="223.06 166.96 223.06 167.26 267.66 167.26" />
        <polyline points="223.06 166.96 267.66 166.96 267.66 167.26" />
        <polyline points="215.66 166.96 215.66 167.26 223.06 167.26" />
        <polyline points="215.66 166.96 223.06 166.96 223.06 167.26" />
        <polyline points="648.26 166.96 648.26 167.26 653.66 167.26" />
        <polyline points="648.26 166.96 653.66 166.96 653.66 167.26" />
        <polyline points="642.06 166.96 642.06 167.26 648.26 167.26" />
        <polyline points="642.06 166.96 648.26 166.96 648.26 167.26" />
        <polyline points="590.26 164.86 590.26 167.26 594.76 167.26" />
        <polyline points="590.26 164.86 594.76 164.86 594.76 167.26" />
        <polyline points="546.46 164.86 546.46 167.26 567.56 167.26" />
        <polyline points="546.46 164.86 567.56 164.86 567.56 167.26" />
        <polyline points="539.36 162.56 539.36 167.26 546.46 167.26" />
        <polyline points="539.36 162.56 546.46 162.56 546.46 167.26" />
        <polyline points="519.96 164.86 519.96 167.26 539.36 167.26" />
        <polyline points="519.96 164.86 539.36 164.86 539.36 167.26" />
        <polyline points="659.76 164.86 659.76 167.26 665.96 167.26" />
        <polyline points="659.76 164.86 665.96 164.86 665.96 167.26" />
        <polyline points="322.76 167.26 322.76 167.26 329.86 167.26" />
        <polyline points="322.76 167.26 329.86 167.26 329.86 167.26" />
        <polyline points="279.26 167.26 279.26 167.26 322.76 167.26" />
        <polyline points="279.26 167.26 322.76 167.26 322.76 167.26" />
        <polyline points="267.66 167.26 267.66 167.26 279.26 167.26" />
        <polyline points="267.66 167.26 279.26 167.26 279.26 167.26" />
        <polyline points="223.06 167.26 223.06 167.26 267.66 167.26" />
        <polyline points="223.06 167.26 267.66 167.26 267.66 167.26" />
        <polyline points="215.66 167.26 215.66 167.26 223.06 167.26" />
        <polyline points="215.66 167.26 223.06 167.26 223.06 167.26" />
        <polyline points="267.66 167.26 267.66 167.36 279.26 167.36" />
        <polyline points="267.66 167.26 279.26 167.26 279.26 167.36" />
        <polyline points="223.06 167.26 223.06 167.36 267.66 167.36" />
        <polyline points="223.06 167.26 267.66 167.26 267.66 167.36" />
        <polyline points="215.66 167.26 215.66 167.36 223.06 167.36" />
        <polyline points="215.66 167.26 223.06 167.26 223.06 167.36" />
        <polyline points="8.96 164.86 8.96 167.36 9.26 167.36" />
        <polyline points="8.96 164.86 9.26 164.86 9.26 167.36" />
        <polyline points=".36 161.66 .36 167.36 5.56 167.36" />
        <polyline points=".36 161.66 5.56 161.66 5.56 167.36" />
        <polyline points="267.66 167.36 267.66 168.06 279.26 168.06" />
        <polyline points="267.66 167.36 279.26 167.36 279.26 168.06" />
        <polyline points="223.06 167.36 223.06 168.06 267.66 168.06" />
        <polyline points="223.06 167.36 267.66 167.36 267.66 168.06" />
        <polyline points="215.66 167.36 215.66 168.06 223.06 168.06" />
        <polyline points="215.66 167.36 223.06 167.36 223.06 168.06" />
        <polyline points="223.06 168.06 223.06 168.26 267.66 168.26" />
        <polyline points="223.06 168.06 267.66 168.06 267.66 168.26" />
        <polyline points="215.66 168.06 215.66 168.26 223.06 168.26" />
        <polyline points="215.66 168.06 223.06 168.06 223.06 168.26" />
        <polyline points="165.06 164.56 165.06 168.26 168.56 168.26" />
        <polyline points="165.06 164.56 168.56 164.56 168.56 168.26" />
        <polyline points="5.56 167.36 5.56 168.26 8.96 168.26" />
        <polyline points="5.56 167.36 8.96 167.36 8.96 168.26" />
        <polyline points="594.76 167.26 594.76 168.46 602.16 168.46" />
        <polyline points="594.76 167.26 602.16 167.26 602.16 168.46" />
        <polyline points="223.06 168.26 223.06 168.46 267.66 168.46" />
        <polyline points="223.06 168.26 267.66 168.26 267.66 168.46" />
        <polyline points="215.66 168.26 215.66 168.46 223.06 168.46" />
        <polyline points="215.66 168.26 223.06 168.26 223.06 168.46" />
        <polyline points="223.06 168.46 223.06 168.66 267.66 168.66" />
        <polyline points="223.06 168.46 267.66 168.46 267.66 168.66" />
        <polyline points="215.66 168.46 215.66 168.66 223.06 168.66" />
        <polyline points="215.66 168.46 223.06 168.46 223.06 168.66" />
        <polyline points="654.36 162.56 654.36 168.66 659.76 168.66" />
        <polyline points="654.36 162.56 659.76 162.56 659.76 168.66" />
        <polyline points="648.26 167.26 648.26 168.66 653.66 168.66" />
        <polyline points="648.26 167.26 653.66 167.26 653.66 168.66" />
        <polyline points="539.36 167.26 539.36 168.76 546.46 168.76" />
        <polyline points="539.36 167.26 546.46 167.26 546.46 168.76" />
        <polyline points="267.66 168.06 267.66 168.76 279.26 168.76" />
        <polyline points="267.66 168.06 279.26 168.06 279.26 168.76" />
        <polyline points="223.06 168.66 223.06 168.76 267.66 168.76" />
        <polyline points="223.06 168.66 267.66 168.66 267.66 168.76" />
        <polyline points="267.66 168.76 267.66 168.86 279.26 168.86" />
        <polyline points="267.66 168.76 279.26 168.76 279.26 168.86" />
        <polyline points="223.06 168.76 223.06 168.86 267.66 168.86" />
        <polyline points="223.06 168.76 267.66 168.76 267.66 168.86" />
        <polyline points="167.76 168.26 167.76 168.86 168.56 168.86" />
        <polyline points="167.76 168.26 168.56 168.26 168.56 168.86" />
        <polyline points="5.56 168.26 5.56 168.86 6.26 168.86" />
        <polyline points="5.56 168.26 6.26 168.26 6.26 168.86" />
        <polyline points="267.66 168.86 267.66 169.16 279.26 169.16" />
        <polyline points="267.66 168.86 279.26 168.86 279.26 169.16" />
        <polyline points="223.06 168.86 223.06 169.16 267.66 169.16" />
        <polyline points="223.06 168.86 267.66 168.86 267.66 169.16" />
        <polyline points="215.66 168.66 215.66 169.16 223.06 169.16" />
        <polyline points="215.66 168.66 223.06 168.66 223.06 169.16" />
        <polyline points="322.76 167.26 322.76 169.16 329.86 169.16" />
        <polyline points="322.76 167.26 329.86 167.26 329.86 169.16" />
        <polyline points="223.06 169.16 223.06 169.16 267.66 169.16" />
        <polyline points="223.06 169.16 267.66 169.16 267.66 169.16" />
        <polyline points="215.66 169.16 215.66 169.16 223.06 169.16" />
        <polyline points="215.66 169.16 223.06 169.16 223.06 169.16" />
        <polyline points="329.86 169.16 329.86 169.46 331.76 169.46" />
        <polyline points="329.86 169.16 331.76 169.16 331.76 169.46" />
        <polyline points="322.76 169.16 322.76 169.46 329.86 169.46" />
        <polyline points="322.76 169.16 329.86 169.16 329.86 169.46" />
        <polyline points="223.06 169.16 223.06 169.46 267.66 169.46" />
        <polyline points="223.06 169.16 267.66 169.16 267.66 169.46" />
        <polyline points="215.66 169.16 215.66 169.46 223.06 169.46" />
        <polyline points="215.66 169.16 223.06 169.16 223.06 169.46" />
        <polyline points="55.76 158.36 55.76 169.46 63.16 169.46" />
        <polyline points="55.76 158.36 63.16 158.36 63.16 169.46" />
        <polyline points="329.86 169.46 329.86 169.56 331.76 169.56" />
        <polyline points="329.86 169.46 331.76 169.46 331.76 169.56" />
        <polyline points="322.76 169.46 322.76 169.56 329.86 169.56" />
        <polyline points="322.76 169.46 329.86 169.46 329.86 169.56" />
        <polyline points="267.66 169.16 267.66 169.56 279.26 169.56" />
        <polyline points="267.66 169.16 279.26 169.16 279.26 169.56" />
        <polyline points="223.06 169.46 223.06 169.56 267.66 169.56" />
        <polyline points="223.06 169.46 267.66 169.46 267.66 169.56" />
        <polyline points="215.66 169.46 215.66 169.56 223.06 169.56" />
        <polyline points="215.66 169.46 223.06 169.46 223.06 169.56" />
        <polyline points="428.96 158.76 428.96 170.36 436.26 170.36" />
        <polyline points="428.96 158.76 436.26 158.76 436.26 170.36" />
        <polyline points="375.86 158.86 375.86 170.36 383.36 170.36" />
        <polyline points="375.86 158.86 383.36 158.86 383.36 170.36" />
        <polyline points="329.86 169.56 329.86 170.36 331.76 170.36" />
        <polyline points="329.86 169.56 331.76 169.56 331.76 170.36" />
        <polyline points="322.76 169.56 322.76 170.36 329.86 170.36" />
        <polyline points="322.76 169.56 329.86 169.56 329.86 170.36" />
        <polyline points="109.46 158.26 109.46 170.76 116.76 170.76" />
        <polyline points="109.46 158.26 116.76 158.26 116.76 170.76" />
        <polyline points="328.46 170.36 328.46 173.86 331.76 173.86" />
        <polyline points="328.46 170.36 331.76 170.36 331.76 173.86" />
        <polyline points="486.56 173.96 486.66 173.86 486.76 173.96 486.66 173.96" />
        <polyline points="486.56 173.96 486.66 173.86 486.76 173.96" />
        <polyline points="489.96 174.46 490.16 174.36 490.16 174.46 490.16 174.46" />
        <polyline points="489.96 174.46 490.16 174.36 490.16 174.46" />
        <polyline points="331.46 168.26 331.56 168.16 331.56 168.26 331.56 168.26" />
        <polyline points="331.46 168.26 331.56 168.16 331.56 168.26" />
        <polyline points="328.06 170.36 328.16 170.26 328.26 170.36 328.16 170.36" />
        <polyline points="328.06 170.36 328.16 170.26 328.26 170.36" />
        <rect x="8.96" y="161.66" width="3.2" height="3.2" />
        <line x1="162.86" y1="165.06" x2="116.76" y2="165.06" />
        <line x1="109.46" y1="165.06" x2="97.66" y2="165.06" />
        <line x1="96.56" y1="165.06" x2="63.16" y2="165.06" />
        <line x1="55.76" y1="165.06" x2="9.26" y2="165.06" />
        <line x1="165.06" y1="166.16" x2="116.76" y2="166.16" />
        <line x1="109.46" y1="166.16" x2="63.16" y2="166.16" />
        <line x1="55.76" y1="166.16" x2="8.96" y2="166.16" />
        <polyline points="164.96 168.26 165.06 168.16 165.16 168.26 165.06 168.26" />
        <polyline points="164.96 168.26 165.06 168.16 165.16 168.26" />
        <polyline points="168.36 168.86 168.56 168.76 168.56 168.86 168.56 168.86" />
        <polyline points="168.36 168.86 168.56 168.76 168.56 168.86" />
        <rect x="159.36" y="157.06" width="10.3" height="4.6" />
        <rect x="161.96" y="161.66" width="3.2" height="3.2" />
        <rect x="162.26" y="162.06" width="2.5" height="2.5" />
        <line x1="164.76" y1="164.56" x2="162.96" y2="163.66" />
        <line x1="162.96" y1="163.66" x2="162.26" y2="161.96" />
        <rect x="9.36" y="162.06" width="2.5" height="2.5" />
        <polyline points="11.76 164.56 9.96 163.96 9.36 161.96" />
        <polyline points="8.86 168.26 8.96 168.16 9.06 168.26 8.96 168.26" />
        <polyline points="8.86 168.26 8.96 168.16 9.06 168.26" />
        <polyline points="5.46 168.86 5.56 168.76 5.66 168.86 5.56 168.86" />
        <polyline points="5.46 168.86 5.56 168.76 5.66 168.86" />
        <polyline points="483.66 105.86 483.66 111.56 491.06 111.56" />
        <polyline points="483.66 105.86 491.06 105.86 491.06 111.56" />
        <polyline points="478.66 111.56 478.66 117.76 491.06 117.76" />
        <polyline points="478.66 111.56 491.06 111.56 491.06 117.76" />
        <polyline points="486.86 117.76 486.86 162.56 489.06 162.56" />
        <polyline points="486.86 117.76 489.06 117.76 489.06 162.56" />
        <polyline points="486.66 170.36 486.66 173.96 490.16 173.96" />
        <polyline points="486.66 170.36 490.16 170.36 490.16 173.96" />
        <polyline points="489.36 173.96 489.36 174.46 490.16 174.46" />
        <polyline points="489.36 173.96 490.16 173.96 490.16 174.46" />
        <polygon points="490.16 170.36 486.66 170.36 486.66 173.96 489.36 173.96 489.36 174.46 490.16 174.46 490.16 170.36" />
        <polygon points="8.96 161.66 5.56 161.66 5.56 168.86 6.26 168.86 6.26 168.26 8.96 168.26 8.96 161.66" />
        <polygon points="168.56 161.66 168.56 168.86 167.76 168.86 167.76 168.26 165.06 168.26 165.06 161.66 168.56 161.66" />
        <line x1="102.16" y1="7.46" x2="70.46" y2="7.46" />
        <line x1="102.76" y1="2.26" x2="69.86" y2="2.26" />
        <line x1="71.06" y1="2.86" x2="101.66" y2="2.86" />
        <line x1="370.56" y1="7.46" x2="338.96" y2="7.46" />
        <line x1="338.36" y1="2.26" x2="371.06" y2="2.26" />
        <line x1="339.46" y1="2.86" x2="369.96" y2="2.86" />
        <rect x="483.66" y="1.66" width="7.9" height="11" />
        <line x1="392.16" y1="7.46" x2="423.86" y2="7.46" />
        <line x1="391.66" y1="2.26" x2="424.46" y2="2.26" />
        <line x1="392.66" y1="2.86" x2="423.36" y2="2.86" />
        <line x1="445.26" y1="7.46" x2="476.96" y2="7.46" />
        <line x1="444.66" y1="2.26" x2="477.46" y2="2.26" />
        <line x1="445.86" y1="2.86" x2="476.36" y2="2.86" />
        <line x1="477.46" y1="2.86" x2="477.46" y2="2.26" />
        <rect x="430.46" y="1.66" width="7.4" height="13.3" />
        <line x1="424.46" y1="2.86" x2="424.46" y2="2.26" />
        <line x1="444.66" y1="2.86" x2="444.66" y2="2.26" />
        <rect x="377.46" y="1.76" width="7.7" height="13.4" />
        <line x1="391.66" y1="2.86" x2="391.66" y2="2.26" />
        <line x1="371.06" y1="2.86" x2="371.06" y2="2.26" />
        <rect x="216.76" y="1.66" width="7.5" height="13.1" />
        <line x1="285.56" y1="7.46" x2="317.16" y2="7.46" />
        <line x1="284.96" y1="2.26" x2="317.66" y2="2.26" />
        <line x1="286.16" y1="2.86" x2="316.56" y2="2.86" />
        <line x1="338.36" y1="2.86" x2="338.36" y2="2.26" />
        <rect x="324.06" y="1.76" width="7.3" height="13.4" />
        <line x1="317.66" y1="2.86" x2="317.66" y2="2.26" />
        <line x1="284.96" y1="2.86" x2="284.96" y2="2.26" />
        <line x1="231.96" y1="7.46" x2="263.76" y2="7.46" />
        <line x1="231.36" y1="2.26" x2="264.26" y2="2.26" />
        <line x1="232.56" y1="2.86" x2="263.16" y2="2.86" />
        <line x1="264.26" y1="2.86" x2="264.26" y2="2.26" />
        <rect x="267.96" y="1.76" width="11.7" height="12.8" />
        <line x1="231.36" y1="2.86" x2="231.36" y2="2.26" />
        <line x1="156.86" y1="7.46" x2="125.16" y2="7.46" />
        <line x1="157.46" y1="2.26" x2="124.56" y2="2.26" />
        <line x1="125.76" y1="2.86" x2="156.36" y2="2.86" />
        <line x1="178.76" y1="7.46" x2="210.46" y2="7.46" />
        <line x1="178.16" y1="2.26" x2="211.06" y2="2.26" />
        <line x1="179.36" y1="2.86" x2="209.96" y2="2.86" />
        <line x1="211.06" y1="2.86" x2="211.06" y2="2.26" />
        <rect x="163.46" y="1.66" width="7.6" height="13" />
        <line x1="157.46" y1="2.86" x2="157.46" y2="2.26" />
        <path d="M178.16,2.86v-.6s0,.6,0,.6Z" />
        <line x1="124.56" y1="2.26" x2="124.56" y2="2.86" />
        <line x1="102.76" y1="2.86" x2="102.76" y2="2.26" />
        <rect x="109.66" y="1.76" width="7.5" height="12.5" />
        <line x1="16.56" y1="7.46" x2="45.36" y2="7.46" />
        <line x1="17.06" y1="2.86" x2="44.76" y2="2.86" />
        <line x1="45.86" y1="2.26" x2="15.96" y2="2.26" />
        <line x1="69.86" y1="2.26" x2="69.86" y2="2.86" />
        <rect x="55.36" y="1.76" width="7.3" height="12.5" />
        <line x1="45.86" y1="2.86" x2="45.86" y2="2.26" />
        <line x1="5.76" y1="102.76" x2="5.76" y2="70.96" />
        <line x1=".96" y1="103.36" x2=".96" y2="70.46" />
        <line x1="1.56" y1="101.96" x2="1.56" y2="71.76" />
        <rect x="1.56" y="48.76" width=".8" height="7.6" />
        <rect x="2.36" y="49.46" width="3.9" height="6.9" />
        <polyline points=".96 16.96 .96 50.06 1.56 50.06" />
        <rect x="1.56" y="63.46" width=".8" height="8.3" />
        <rect x="2.36" y="63.36" width="3.5" height="7.6" />
        <line x1="1.56" y1="70.46" x2=".96" y2="70.46" />
        <rect x=".36" y="56.46" width="8.8" height="7" />
        <rect x="2.36" y="10.76" width="3.9" height="6.8" />
        <rect x="1.56" y="10.76" width=".8" height="7.5" />
        <line x1="1.56" y1="16.96" x2=".96" y2="16.96" />
        <line x1="6.26" y1="49.46" x2="6.26" y2="17.56" />
        <line x1="1.56" y1="48.76" x2="1.56" y2="18.26" />
        <line x1="9.16" y1="10.76" x2=".36" y2="10.76" />
        <rect x=".36" y="1.66" width="8.8" height="9.1" />
        <line x1="15.96" y1="2.86" x2="15.96" y2="2.26" />
        <rect x=".36" y="109.56" width="8.6" height="7" />
        <line x1=".96" y1="155.96" x2=".96" y2="123.16" />
        <line x1="6.26" y1="155.36" x2="6.26" y2="123.66" />
        <line x1="1.56" y1="154.66" x2="1.56" y2="124.36" />
        <rect x="6.56" y="156.16" width="2.4" height="3.4" />
        <polyline points="8.96 159.56 7.16 158.96 6.56 156.26" />
        <polygon points="6.26 159.96 6.26 155.86 9.26 155.86 9.26 159.96 6.26 155.36 6.26 159.96" />
        <polyline points="6.26 159.96 2.36 159.96 2.36 155.36 6.26 155.36" />
        <rect x="1.56" y="154.66" width=".8" height="5.3" />
        <line x1="1.56" y1="155.96" x2=".96" y2="155.96" />
        <rect x=".36" y="159.96" width="8.9" height="7.4" />
        <line x1="1.56" y1="123.16" x2=".96" y2="123.16" />
        <rect x="1.56" y="116.56" width=".8" height="7.8" />
        <rect x="2.36" y="116.56" width="3.9" height="7.1" />
        <rect x="1.56" y="102.06" width=".8" height="7.6" />
        <rect x="2.36" y="102.76" width="3.5" height="6.9" />
        <line x1="1.56" y1="103.36" x2=".96" y2="103.36" />
        <polygon points="483.66 7.46 483.66 2.86 476.36 2.86 476.36 3.56 476.96 3.56 476.96 7.46 483.66 7.46" />
        <polygon points="437.86 7.46 445.26 7.46 445.26 3.56 445.86 3.56 445.86 2.86 437.86 2.86 437.86 7.46" />
        <polygon points="430.46 7.46 430.46 2.86 423.36 2.86 423.36 3.56 423.86 3.56 423.86 7.46 430.46 7.46" />
        <polygon points="385.16 2.86 392.66 2.86 392.66 3.56 392.16 3.56 392.16 7.46 385.16 7.46 385.16 2.86" />
        <polygon points="377.46 7.46 377.46 2.86 369.96 2.86 369.96 3.56 370.56 3.56 370.56 7.46 377.46 7.46" />
        <polygon points="331.46 7.46 331.46 2.86 339.46 2.86 339.46 3.56 338.96 3.56 338.96 7.46 331.46 7.46" />
        <polygon points="324.06 7.46 324.06 2.86 316.56 2.86 316.56 3.56 317.16 3.56 317.16 7.46 324.06 7.46" />
        <polygon points="279.66 7.46 279.66 2.86 286.16 2.86 286.16 3.56 285.56 3.56 285.56 7.46 279.66 7.46" />
        <polygon points="267.96 7.46 267.96 2.86 263.16 2.86 263.16 3.56 263.76 3.56 263.76 7.46 267.96 7.46" />
        <polygon points="224.26 2.86 232.56 2.86 232.56 3.56 231.96 3.56 231.96 7.46 224.26 7.46 224.26 2.86" />
        <polygon points="216.76 7.46 210.46 7.46 210.46 3.56 209.96 3.56 209.96 2.86 216.76 2.86 216.76 7.46" />
        <polygon points="171.06 7.46 171.06 2.86 179.36 2.86 179.36 3.56 178.76 3.56 178.76 7.46 171.06 7.46" />
        <polygon points="163.46 2.86 163.46 7.46 156.86 7.46 156.86 3.56 156.36 3.56 156.36 2.86 163.46 2.86" />
        <polygon points="117.16 7.46 117.16 2.86 125.76 2.86 125.76 3.56 125.16 3.56 125.16 7.46 117.16 7.46" />
        <polygon points="109.66 7.46 109.66 2.86 101.66 2.86 101.66 3.56 102.16 3.56 102.16 7.46 109.66 7.46" />
        <polygon points="62.66 7.46 62.66 2.86 71.06 2.86 71.06 3.56 70.46 3.56 70.46 7.46 62.66 7.46" />
        <polygon points="55.36 7.46 55.36 2.86 44.76 2.86 44.76 3.56 45.36 3.56 45.36 7.46 55.36 7.46" />
        <polygon points="9.16 7.46 9.16 2.86 17.06 2.86 17.06 3.56 16.56 3.56 16.56 7.46 9.16 7.46" />
        <polyline points="483.66 117.76 478.66 117.76 478.66 111.56 483.66 111.56" />
        <rect x="215.66" y="159.26" width="7.4" height="10.3" />
        <rect x="223.06" y="164.96" width="44.6" height="4.6" />
        <rect x="267.66" y="159.56" width="11.6" height="10" />
        <line x1="186.16" y1="168.36" x2="168.56" y2="168.36" />
        <rect x="109.46" y="158.26" width="7.4" height="12.5" />
        <rect x="55.76" y="158.26" width="7.4" height="11.2" />
        <polyline points="59.56 50.56 59.56 14.26 58.46 14.26 58.46 53.96 59.56 53.96 59.56 51.66" />
        <rect x="106.26" y="7.46" width="3.4" height="3.4" />
        <rect x="51.96" y="7.46" width="3.4" height="3.4" />
        <rect x="6.26" y="10.66" width="3.4" height="3.4" />
        <rect x="62.66" y="7.46" width="3.4" height="3.4" />
        <polyline points="59.56 51.66 100.46 51.66 100.46 50.56 59.56 50.56" />
        <line x1="58.46" y1="67.56" x2="96.56" y2="67.56" />
        <line x1="97.66" y1="66.46" x2="59.56" y2="66.46" />
        <polyline points="58.46 67.56 58.46 64.16 59.56 64.16 59.56 66.46" />
        <rect x="117.16" y="7.46" width="3.4" height="3.4" />
        <rect x="120.56" y="7.46" width="3.4" height="3.4" />
        <polygon points="112.96 50.56 112.96 14.26 114.06 14.26 114.06 50.56 116.36 50.56 116.36 51.66 110.66 51.66 110.66 50.56 112.96 50.56" />
        <polygon points="167.86 50.56 170.06 50.56 170.06 51.66 126.56 51.66 126.56 50.56 166.76 50.56 166.76 14.66 167.86 14.66 167.86 50.56" />
        <polygon points="221.06 50.56 223.36 50.56 223.36 51.66 180.36 51.66 180.36 50.56 219.96 50.56 219.96 14.76 221.06 14.76 221.06 50.56" />
        <rect x="160.06" y="7.46" width="3.4" height="3.4" />
        <rect x="171.06" y="7.46" width="3.4" height="3.4" />
        <rect x="213.36" y="7.46" width="3.4" height="3.4" />
        <rect x="224.26" y="7.46" width="3.4" height="3.4" />
        <polyline points="274.86 50.56 314.76 50.56 314.76 51.66 274.86 51.66" />
        <polyline points="273.76 51.66 233.56 51.66 233.56 50.56 273.76 50.56" />
        <rect x="264.56" y="7.46" width="3.4" height="3.4" />
        <polyline points="273.76 50.56 273.76 14.56 274.86 14.56 274.86 50.56" />
        <rect x="279.66" y="7.46" width="3.4" height="3.4" />
        <line x1="97.66" y1="66.46" x2="97.66" y2="129.86" />
        <polyline points="97.66 131.06 97.66 148.06 96.56 148.06 96.56 67.56" />
        <line x1="111.26" y1="66.46" x2="111.26" y2="129.86" />
        <line x1="111.26" y1="131.06" x2="111.26" y2="142.36" />
        <line x1="112.36" y1="141.26" x2="112.36" y2="67.56" />
        <line x1="311.96" y1="67.56" x2="212.76" y2="67.56" />
        <line x1="211.56" y1="67.56" x2="112.36" y2="67.56" />
        <line x1="111.26" y1="66.46" x2="273.76" y2="66.46" />
        <line x1="274.86" y1="66.46" x2="313.16" y2="66.46" />
        <rect x="6.26" y="52.96" width="3" height="3.4" />
        <rect x="5.76" y="63.36" width="3.4" height="3.4" />
        <rect x="5.76" y="106.26" width="3.2" height="3.4" />
        <rect x="6.26" y="116.56" width="2.8" height="3.4" />
        <polyline points="96.56 165.06 96.56 158.26 97.66 158.26 97.66 165.06" />
        <polyline points="112.36 141.26 199.16 141.26 199.16 142.36 111.26 142.36" />
        <line x1="313.16" y1="66.46" x2="313.16" y2="103.86" />
        <line x1="313.16" y1="104.96" x2="313.16" y2="141.26" />
        <line x1="311.96" y1="67.56" x2="311.96" y2="141.26" />
        <line x1="212.76" y1="67.56" x2="212.76" y2="141.26" />
        <line x1="211.56" y1="67.56" x2="211.56" y2="141.26" />
        <polyline points="212.76 141.26 215.06 141.26 215.06 142.36 209.36 142.36 209.36 141.26 211.56 141.26" />
        <line x1="433.56" y1="141.26" x2="313.16" y2="141.26" />
        <polyline points="311.96 141.26 225.26 141.26 225.26 142.36 434.76 142.36" />
        <polyline points="274.86 51.66 274.86 53.96 273.76 53.96 273.76 51.66" />
        <polyline points="274.86 66.46 274.86 64.16 273.76 64.16 273.76 66.46" />
        <rect x="320.66" y="7.46" width="3.4" height="3.4" />
        <rect x="317.36" y="7.46" width="3.4" height="3.4" />
        <rect x="334.86" y="7.46" width="3.4" height="3.4" />
        <rect x="331.46" y="7.46" width="3.4" height="3.4" />
        <rect x="374.06" y="7.46" width="3.4" height="3.4" />
        <rect x="385.16" y="7.46" width="3.4" height="3.4" />
        <rect x="427.06" y="7.46" width="3.4" height="3.4" />
        <polyline points="327.26 50.56 327.26 15.16 328.26 15.16 328.26 50.56" />
        <polyline points="327.26 50.56 324.96 50.56 324.96 51.66 330.56 51.66 330.56 50.56 328.26 50.56" />
        <polygon points="381.86 50.56 381.86 51.66 340.76 51.66 340.76 50.56 380.76 50.56 380.76 15.16 381.86 15.16 381.86 50.56" />
        <rect x="433.56" y="15.06" width="1.1" height="2.2" />
        <polyline points="434.76 76.66 434.76 85.16 433.56 85.16 433.56 27.46 434.76 27.46 434.76 75.46" />
        <polyline points="313.16 103.86 373.36 103.86 373.36 104.96 313.16 104.96" />
        <line x1="433.56" y1="141.26" x2="433.56" y2="104.96" />
        <polyline points="433.56 103.86 433.56 95.36 434.76 95.36 434.76 142.36 433.56 142.36" />
        <polyline points="433.56 104.96 383.56 104.96 383.56 103.86 433.56 103.86" />
        <rect x="441.26" y="7.46" width="3.4" height="3.4" />
        <rect x="437.86" y="7.46" width="3.4" height="3.4" />
        <rect x="480.26" y="7.46" width="3.4" height="3.4" />
        <polyline points="434.76 75.46 455.76 75.46 455.76 76.66 434.76 76.66" />
        <polyline points="487.06 75.46 487.06 12.66 488.16 12.66 488.16 87.96 487.06 87.96 487.06 76.66" />
        <polyline points="487.06 75.46 465.96 75.46 465.96 76.66 487.06 76.66" />
        <polyline points="452.86 117.46 452.86 148.06 451.76 148.06 451.76 116.36 452.86 116.36" />
        <line x1="489.06" y1="117.76" x2="489.06" y2="162.56" />
        <line x1="486.86" y1="162.56" x2="486.86" y2="117.76" />
        <rect x="451.76" y="158.26" width="1.1" height="9.7" />
        <polyline points="452.86 116.36 478.66 116.36 478.66 117.46 452.86 117.46" />
        <rect x="279.26" y="164.96" width="43.5" height="2.3" />
        <rect x="322.76" y="158.86" width="7.1" height="11.5" />
        <polyline points="329.86 169.16 329.86 170.36 328.96 170.36" />
        <line x1="417.06" y1="170.96" x2="426.16" y2="170.96" />
        <polyline points="484.26 162.56 484.26 164.86 494.06 164.86" />
        <polyline points="484.26 162.56 494.06 162.56 494.06 164.86" />
        <polyline points="484.26 164.86 484.26 167.26 494.66 167.26" />
        <polyline points="484.26 164.86 494.66 164.86 494.66 167.26" />
        <polyline points="436.26 167.96 436.26 168.56 484.26 168.56" />
        <polyline points="436.26 167.96 484.26 167.96 484.26 168.56" />
        <polyline points="484.26 167.26 484.26 168.56 490.76 168.56" />
        <polyline points="484.26 167.26 490.76 167.26 490.76 168.56" />
        <polyline points="484.26 168.56 484.26 169.16 490.76 169.16" />
        <polyline points="484.26 168.56 490.76 168.56 490.76 169.16" />
        <polyline points="436.26 168.56 436.26 169.16 484.26 169.16" />
        <polyline points="436.26 168.56 484.26 168.56 484.26 169.16" />
        <polyline points="484.26 169.16 484.26 170.36 490.76 170.36" />
        <polyline points="484.26 169.16 490.76 169.16 490.76 170.36" />
        <rect x="436.26" y="167.96" width="47.9" height="1.2" />
        <polyline points="333.96 169.16 329.86 169.16 329.86 167.96 333.96 167.96" />
        <rect x="428.96" y="158.76" width="7.4" height="11.6" />
        <line x1="331.76" y1="170.86" x2="331.76" y2="169.16" />
        <polygon points="328.86 173.56 331.36 173.56 331.36 169.16 330.86 172.96 328.86 173.56" />
        <polygon points="328.46 173.86 331.76 173.86 331.76 169.16 329.86 169.16 329.86 170.36 328.46 170.36 328.46 173.86" />
        <polyline points="328.86 173.56 331.36 173.56 331.36 169.16" />
        <polyline points="329.86 169.56 329.86 170.36 328.86 170.36 328.86 173.56" />
        <rect x="383.36" y="167.96" width="45.6" height="1.2" />
        <line x1="351.06" y1="167.96" x2="351.06" y2="169.16" />
        <line x1="333.96" y1="167.96" x2="333.96" y2="169.16" />
        <polyline points="351.06 167.96 375.86 167.96 375.86 169.16 351.06 169.16" />
        <line x1="351.06" y1="169.16" x2="333.96" y2="169.16" />
        <line x1="351.06" y1="167.96" x2="333.96" y2="167.96" />
        <polygon points="351.86 167.96 351.86 167.86 350.96 167.86 350.96 171.16 351.86 171.16 351.86 170.96 351.06 170.96 351.06 167.96 351.86 167.96" />
        <rect x="334.16" y="168.16" width="9.4" height=".5" />
        <rect x="343.76" y="168.16" width="7.1" height=".5" />
        <line x1="350.96" y1="168.86" x2="350.56" y2="169.16" />
        <line x1="350.96" y1="168.36" x2="350.86" y2="168.46" />
        <polyline points="350.06 169.16 350.66 168.66 350.86 168.46" />
        <line x1="350.76" y1="167.96" x2="350.66" y2="168.16" />
        <line x1="349.56" y1="169.16" x2="350.66" y2="168.16" />
        <line x1="350.26" y1="167.96" x2="350.16" y2="168.16" />
        <line x1="349.06" y1="169.16" x2="350.16" y2="168.16" />
        <line x1="349.76" y1="167.96" x2="349.66" y2="168.16" />
        <polyline points="348.56 169.16 349.06 168.66 349.66 168.16" />
        <line x1="349.26" y1="167.96" x2="349.16" y2="168.16" />
        <line x1="348.06" y1="169.16" x2="349.16" y2="168.16" />
        <line x1="348.76" y1="167.96" x2="348.66" y2="168.16" />
        <polyline points="347.46 169.16 348.06 168.66 348.66 168.16" />
        <line x1="348.26" y1="167.96" x2="348.06" y2="168.16" />
        <line x1="347.06" y1="169.16" x2="348.06" y2="168.16" />
        <line x1="347.76" y1="167.96" x2="347.66" y2="168.16" />
        <polyline points="346.46 169.16 347.06 168.66 347.66 168.16" />
        <line x1="347.16" y1="167.96" x2="347.06" y2="168.16" />
        <line x1="345.96" y1="169.16" x2="347.06" y2="168.16" />
        <line x1="346.76" y1="167.96" x2="346.56" y2="168.16" />
        <polyline points="345.46 169.16 345.96 168.66 346.56 168.16" />
        <line x1="346.16" y1="167.96" x2="346.06" y2="168.16" />
        <line x1="344.96" y1="169.16" x2="346.06" y2="168.16" />
        <line x1="345.66" y1="167.96" x2="345.56" y2="168.16" />
        <polyline points="344.46 169.16 344.96 168.66 345.56 168.16" />
        <line x1="345.16" y1="167.96" x2="345.06" y2="168.16" />
        <line x1="343.96" y1="169.16" x2="345.06" y2="168.16" />
        <line x1="344.66" y1="167.96" x2="344.56" y2="168.16" />
        <polyline points="343.46 169.16 343.96 168.66 344.56 168.16" />
        <line x1="344.16" y1="167.96" x2="344.06" y2="168.16" />
        <line x1="343.46" y1="168.66" x2="342.96" y2="169.16" />
        <line x1="344.06" y1="168.16" x2="343.76" y2="168.46" />
        <line x1="343.46" y1="168.66" x2="343.76" y2="168.46" />
        <line x1="343.66" y1="167.96" x2="343.56" y2="168.06" />
        <line x1="342.96" y1="168.66" x2="342.36" y2="169.16" />
        <polyline points="343.56 168.06 343.56 168.16 342.96 168.66" />
        <line x1="343.16" y1="167.96" x2="342.96" y2="168.16" />
        <line x1="341.96" y1="169.16" x2="342.96" y2="168.16" />
        <line x1="342.66" y1="167.96" x2="342.56" y2="168.16" />
        <polyline points="341.36 169.16 341.96 168.66 342.56 168.16" />
        <line x1="342.16" y1="167.96" x2="341.96" y2="168.16" />
        <line x1="340.86" y1="169.16" x2="341.96" y2="168.16" />
        <line x1="341.66" y1="167.96" x2="341.46" y2="168.16" />
        <polyline points="340.36 169.16 340.86 168.66 341.46 168.16" />
        <line x1="341.16" y1="167.96" x2="340.96" y2="168.16" />
        <line x1="339.86" y1="169.16" x2="340.96" y2="168.16" />
        <line x1="340.56" y1="167.96" x2="340.46" y2="168.16" />
        <polyline points="339.36 169.16 339.86 168.66 340.46 168.16" />
        <line x1="340.16" y1="167.96" x2="339.96" y2="168.16" />
        <line x1="338.86" y1="169.16" x2="339.96" y2="168.16" />
        <line x1="339.56" y1="167.96" x2="339.46" y2="168.16" />
        <polyline points="338.36 169.16 338.86 168.66 339.46 168.16" />
        <line x1="339.06" y1="167.96" x2="338.96" y2="168.16" />
        <line x1="337.86" y1="169.16" x2="338.96" y2="168.16" />
        <line x1="338.56" y1="167.96" x2="338.46" y2="168.16" />
        <polyline points="337.26 169.16 337.86 168.66 338.46 168.16" />
        <line x1="338.06" y1="167.96" x2="337.86" y2="168.16" />
        <line x1="336.86" y1="169.16" x2="337.86" y2="168.16" />
        <line x1="337.56" y1="167.96" x2="337.46" y2="168.16" />
        <polyline points="336.26 169.16 336.86 168.66 337.46 168.16" />
        <line x1="337.06" y1="167.96" x2="336.86" y2="168.16" />
        <line x1="335.76" y1="169.16" x2="336.86" y2="168.16" />
        <line x1="336.56" y1="167.96" x2="336.36" y2="168.16" />
        <polyline points="335.26 169.16 335.76 168.66 336.36 168.16" />
        <line x1="336.06" y1="167.96" x2="335.86" y2="168.16" />
        <line x1="334.76" y1="169.16" x2="335.86" y2="168.16" />
        <line x1="335.46" y1="167.96" x2="335.36" y2="168.16" />
        <polyline points="334.26 169.16 334.76 168.66 335.36 168.16" />
        <line x1="335.06" y1="167.96" x2="334.86" y2="168.16" />
        <line x1="334.16" y1="168.86" x2="334.86" y2="168.16" />
        <line x1="334.46" y1="167.96" x2="334.36" y2="168.16" />
        <polyline points="334.16 168.36 334.16 168.26 334.36 168.16" />
        <line x1="352.46" y1="167.96" x2="352.76" y2="167.96" />
        <line x1="351.06" y1="170.66" x2="480.96" y2="170.66" />
        <line x1="480.96" y1="170.96" x2="333.96" y2="170.96" />
        <polygon points="333.26 167.96 333.26 167.86 334.16 167.86 334.16 171.16 333.26 171.16 333.26 170.96 333.96 170.96 333.96 167.96 333.26 167.96" />
        <rect x="331.76" y="170.56" width="2.3" height=".4" />
        <polyline points="351.06 170.96 351.06 170.66 333.96 170.66" />
        <rect x="375.86" y="158.86" width="7.4" height="11.5" />
        <line x1="490.76" y1="170.36" x2="490.76" y2="170.36" />
        <path d="M96.76,125.06v.3s.1,0,.1,0c.5,0,.4,0,.9-.1h.2" />
        <polyline points="197.96 168.36 195.66 168.36 195.66 164.96" />
        <polyline points="186.16 168.36 186.16 164.96 168.56 164.96" />
        <rect x="594.76" y=".36" width="7.4" height="11.9" />
        <rect x="648.26" y="1.36" width="5.3" height="11.9" />
        <line x1="642.66" y1="6.46" x2="609.86" y2="6.46" />
        <line x1="610.36" y1="1.76" x2="642.06" y2="1.76" />
        <polyline points="610.76 4.46 610.76 4.16 609.96 4.16 609.96 4.66 610.46 4.66" />
        <rect x="610.46" y="4.46" width=".8" height=".5" />
        <rect x="611.16" y="4.46" width="30.1" height=".5" />
        <polyline points="641.76 4.46 641.76 4.16 642.56 4.16 642.56 4.66 642.06 4.66" />
        <rect x="641.36" y="4.46" width=".8" height=".5" />
        <polyline points="642.86 1.76 642.86 1.26 609.86 1.26 609.86 1.76" />
        <polygon points="602.16 6.46 609.86 6.46 609.86 4.16 610.36 4.16 610.36 1.76 602.16 1.76 602.16 6.46" />
        <polygon points="648.26 6.46 642.66 6.46 642.66 4.16 642.06 4.16 642.06 1.76 648.26 1.76 648.26 6.46" />
        <rect x="654.36" y="1.36" width="5.3" height="11.9" />
        <rect x="602.16" y="6.46" width="3.5" height="3.6" />
        <polyline points="666.36 4.66 666.36 4.36 665.56 4.36 665.56 4.96 665.96 4.96" />
        <rect x="665.96" y="4.66" width=".8" height=".6" />
        <polygon points="659.76 6.86 665.36 6.86 665.36 4.36 665.96 4.36 665.96 1.76 659.76 1.76 659.76 6.86" />
        <rect x="594.76" y="156.86" width="7.4" height="11.6" />
        <line x1="596.46" y1="156.86" x2="599.36" y2="156.86" />
        <line x1="642.66" y1="162.56" x2="609.86" y2="162.56" />
        <line x1="610.36" y1="167.26" x2="642.06" y2="167.26" />
        <polyline points="610.76 164.56 610.76 164.86 609.96 164.86 609.96 164.26 610.46 164.26" />
        <rect x="610.46" y="164.06" width=".8" height=".5" />
        <rect x="611.16" y="164.06" width="30.1" height=".5" />
        <polyline points="641.76 164.56 641.76 164.86 642.56 164.86 642.56 164.26 642.06 164.26" />
        <rect x="641.36" y="164.06" width=".8" height=".5" />
        <polyline points="642.86 167.26 642.86 167.76 609.86 167.76 609.86 167.26" />
        <polygon points="602.16 162.56 609.86 162.56 609.86 164.86 610.36 164.86 610.36 167.26 602.16 167.26 602.16 162.56" />
        <polygon points="648.26 162.56 642.66 162.56 642.66 164.86 642.06 164.86 642.06 167.26 648.26 167.26 648.26 162.56" />
        <rect x="648.26" y="156.76" width="5.3" height="11.9" />
        <rect x="654.36" y="156.76" width="5.3" height="11.9" />
        <polyline points="666.36 164.56 666.36 164.86 665.56 164.86 665.56 164.26 665.96 164.26" />
        <rect x="665.96" y="164.06" width=".8" height=".5" />
        <polygon points="659.76 162.56 665.36 162.56 665.36 164.86 665.96 164.86 665.96 167.26 659.76 167.26 659.76 162.56" />
        <rect x="644.76" y="158.96" width="3.5" height="3.6" />
        <rect x="594.76" y="104.76" width="7.4" height="11.9" />
        <rect x="659.76" y="6.46" width="3.5" height="3.6" />
        <rect x="652.46" y="13.26" width="1.1" height="143.5" />
        <line x1="652.06" y1="109.76" x2="652.06" y2="148.36" />
        <rect x="595.86" y="116.56" width="2.2" height="40.3" />
        <polyline points="652.46 108.66 639.56 108.66 639.56 109.76 652.06 109.76" />
        <rect x="602.16" y="108.66" width="2.3" height="1.1" />
        <polyline points="628.26 109.76 629.36 109.76 629.36 108.66 625.96 108.66 625.96 109.76 627.06 109.76 627.06 142.06" />
        <line x1="628.26" y1="141.76" x2="628.26" y2="109.76" />
        <line x1="627.06" y1="142.06" x2="631.36" y2="149.56" />
        <polyline points="628.26 141.76 632.06 148.36 652.06 148.36" />
        <line x1="631.36" y1="149.56" x2="633.86" y2="149.56" />
        <line x1="635.06" y1="149.56" x2="652.06" y2="149.56" />
        <polyline points="633.86 149.56 633.86 151.46 635.06 151.46 635.06 149.56" />
        <rect x="633.86" y="160.56" width="1.1" height="2" />
        <polyline points="615.76 109.76 616.86 109.76 616.86 108.66 613.46 108.66 613.46 109.76 614.66 109.76 614.66 126.36" />
        <polyline points="615.76 109.76 615.76 126.86 608.96 133.66" />
        <polyline points="614.66 126.36 608.46 132.46 598.06 132.46" />
        <line x1="608.96" y1="133.66" x2="598.06" y2="133.66" />
        <rect x="620.76" y="57.46" width="31.7" height="1.1" />
        <polyline points="597.86 57.46 597.86 12.26 599.06 12.26 599.06 57.46" />
        <polyline points="597.86 57.46 586.56 57.46 586.56 58.56 610.56 58.56 610.56 57.46 599.06 57.46" />
        <polyline points="483.66 111.56 483.66 105.86 491.06 105.86 491.06 117.76 483.66 117.76" />
        <rect x="518.76" y="108.36" width="6.2" height="6.8" />
        <rect x="560.76" y="108.36" width="6.2" height="6.8" />
        <polyline points="483.66 117.76 491.06 117.76 491.06 105.86 483.66 105.86 483.66 111.56" />
        <rect x="560.76" y="108.36" width="6.2" height="6.8" />
        <polyline points="483.66 117.76 491.06 117.76 491.06 105.86 483.66 105.86 483.66 111.56" />
        <rect x="518.76" y="108.36" width="6.2" height="6.8" />
        <rect x="552.26" y="108.36" width="8.5" height="1.9" />
        <rect x="525.06" y="108.36" width="8.5" height="1.9" />
        <polygon points="532.56 110.36 532.56 110.36 533.66 110.36 533.66 108.26 532.56 108.26 532.56 108.46 533.56 108.46 533.56 110.26 532.56 110.26 532.56 110.36" />
        <rect x="533.76" y="109.26" width="9.2" height=".5" />
        <line x1="552.26" y1="108.46" x2="533.56" y2="108.46" />
        <polygon points="553.26 110.36 553.26 110.26 552.26 110.26 552.26 108.46 553.26 108.46 553.26 108.26 552.16 108.26 552.16 110.36 553.26 110.36" />
        <rect x="542.96" y="109.26" width="9.2" height=".5" />
        <line x1="552.26" y1="110.26" x2="533.56" y2="110.26" />
        <rect x="518.76" y="127.96" width="6.2" height="6" />
        <rect x="560.76" y="127.96" width="6.2" height="6" />
        <polyline points="518.76 162.56 518.76 133.96 518.76 162.56 518.76 133.96" />
        <line x1="522.06" y1="162.56" x2="522.06" y2="133.96" />
        <line x1="522.36" y1="162.56" x2="522.36" y2="133.96" />
        <line x1="519.16" y1="162.56" x2="519.16" y2="133.96" />
        <path d="M520.16,148.66l-.1-.4-.2-.4c-.7-.5-1.3-.4-1.7.4l-.1.4.1.4.2.4.3.2.4.1.4-.1.4-.2.2-.4.1-.4h0Z" />
        <line x1="516.96" y1="148.66" x2="564.36" y2="148.66" />
        <rect x="525.06" y="132.06" width="35.7" height="1.9" />
        <rect x="539.36" y="161.46" width="7.1" height="7.3" />
        <line x1="525.26" y1="162.56" x2="525.26" y2="133.96" />
        <line x1="525.56" y1="162.56" x2="525.56" y2="133.96" />
        <line x1="528.56" y1="162.56" x2="528.56" y2="133.96" />
        <line x1="528.86" y1="162.56" x2="528.86" y2="133.96" />
        <line x1="531.76" y1="162.56" x2="531.76" y2="133.96" />
        <line x1="532.06" y1="162.56" x2="532.06" y2="133.96" />
        <line x1="534.96" y1="162.56" x2="534.96" y2="133.96" />
        <line x1="535.26" y1="162.56" x2="535.26" y2="133.96" />
        <line x1="538.16" y1="162.56" x2="538.16" y2="133.96" />
        <line x1="538.56" y1="162.56" x2="538.56" y2="133.96" />
        <line x1="541.46" y1="161.46" x2="541.46" y2="133.96" />
        <line x1="541.76" y1="161.46" x2="541.76" y2="133.96" />
        <line x1="544.66" y1="161.46" x2="544.66" y2="133.96" />
        <line x1="545.06" y1="161.46" x2="545.06" y2="133.96" />
        <line x1="547.86" y1="162.56" x2="547.86" y2="133.96" />
        <line x1="548.16" y1="162.56" x2="548.16" y2="133.96" />
        <line x1="551.16" y1="162.56" x2="551.16" y2="133.96" />
        <line x1="551.46" y1="162.56" x2="551.46" y2="133.96" />
        <line x1="554.36" y1="162.56" x2="554.36" y2="133.96" />
        <line x1="554.66" y1="162.56" x2="554.66" y2="133.96" />
        <line x1="557.56" y1="162.56" x2="557.56" y2="133.96" />
        <line x1="557.96" y1="162.56" x2="557.96" y2="133.96" />
        <rect x="523.16" y="115.26" width="1.9" height="12.7" />
        <rect x="560.76" y="115.26" width="1.9" height="12.7" />
        <line x1="520.66" y1="162.56" x2="494.06" y2="162.56" />
        <line x1="494.66" y1="167.26" x2="520.16" y2="167.26" />
        <polyline points="494.96 164.56 494.96 164.86 494.16 164.86 494.16 164.26 494.66 164.26" />
        <rect x="494.66" y="164.06" width=".8" height=".5" />
        <rect x="495.36" y="164.06" width="23.8" height=".5" />
        <polyline points="519.56 164.56 519.56 164.86 520.46 164.86 520.46 164.26 519.96 164.26" />
        <rect x="519.16" y="164.06" width=".8" height=".5" />
        <polyline points="520.66 167.26 520.66 167.76 494.06 167.76 494.06 167.26" />
        <polygon points="539.36 162.56 520.56 162.56 520.56 164.86 519.96 164.86 519.96 167.26 539.36 167.26 539.36 162.56" />
        <line x1="590.76" y1="162.56" x2="566.96" y2="162.56" />
        <line x1="567.56" y1="167.26" x2="590.26" y2="167.26" />
        <polyline points="567.96 164.56 567.96 164.86 567.16 164.86 567.16 164.26 567.56 164.26" />
        <rect x="567.56" y="164.06" width=".8" height=".5" />
        <rect x="568.36" y="164.06" width="20.9" height=".5" />
        <polyline points="590.76 167.26 590.76 167.76 566.96 167.76 566.96 167.26" />
        <polyline points="589.76 164.56 589.76 164.86 590.46 164.86 590.46 164.26 590.16 164.26" />
        <rect x="589.26" y="164.06" width=".8" height=".5" />
        <polygon points="594.76 162.56 590.76 162.56 590.76 164.86 590.26 164.86 590.26 167.26 594.76 167.26 594.76 162.56" />
        <polygon points="546.46 162.56 566.96 162.56 566.96 164.86 567.56 164.86 567.56 167.26 546.46 167.26 546.46 162.56" />
        <polyline points="594.76 108.46 566.96 108.46 594.76 108.46 566.96 108.46" />
        <line x1="594.76" y1="111.66" x2="566.96" y2="111.66" />
        <line x1="594.76" y1="114.96" x2="566.96" y2="114.96" />
        <line x1="595.86" y1="118.26" x2="566.96" y2="118.26" />
        <line x1="595.86" y1="121.56" x2="566.96" y2="121.56" />
        <line x1="595.86" y1="124.86" x2="566.96" y2="124.86" />
        <line x1="595.86" y1="128.16" x2="566.96" y2="128.16" />
        <line x1="595.86" y1="127.76" x2="566.96" y2="127.76" />
        <line x1="595.86" y1="124.46" x2="566.96" y2="124.46" />
        <line x1="595.86" y1="121.16" x2="566.96" y2="121.16" />
        <line x1="595.86" y1="117.86" x2="566.96" y2="117.86" />
        <line x1="594.76" y1="114.66" x2="566.96" y2="114.66" />
        <line x1="594.76" y1="111.36" x2="566.96" y2="111.36" />
        <line x1="594.76" y1="108.06" x2="566.96" y2="108.06" />
        <line x1="595.86" y1="131.36" x2="566.96" y2="131.36" />
        <line x1="595.86" y1="131.06" x2="566.96" y2="131.06" />
        <line x1="566.96" y1="127.96" x2="566.96" y2="115.16" />
        <polygon points="582.56 131.36 582.36 131.06 582.26 130.66 581.86 130.46 581.46 130.36 581.06 130.46 580.76 130.66 580.46 131.06 580.46 131.36 580.46 131.86 580.76 132.16 581.06 132.36 581.46 132.46 581.86 132.36 582.26 132.16 582.36 131.86 582.56 131.36" />
        <line x1="581.46" y1="133.16" x2="581.46" y2="108.46" />
        <polygon points="580.16 108.46 581.46 107.16 582.86 108.46 580.16 108.46" />
        <polygon points="564.36 149.96 564.36 147.26 565.66 148.66 564.36 149.96" />
        <line x1="560.76" y1="162.56" x2="560.76" y2="133.96" />
        <line x1="561.16" y1="162.56" x2="561.16" y2="133.96" />
        <line x1="564.06" y1="162.56" x2="564.06" y2="133.96" />
        <line x1="564.36" y1="162.56" x2="564.36" y2="133.96" />
        <rect x="539.16" y="1.66" width="7.4" height="10.6" />
        <line x1="587.16" y1="6.46" x2="554.26" y2="6.46" />
        <line x1="554.76" y1="1.76" x2="586.56" y2="1.76" />
        <polyline points="555.26 4.46 555.26 4.16 554.46 4.16 554.46 4.66 554.76 4.66" />
        <rect x="554.76" y="4.46" width=".8" height=".5" />
        <rect x="555.66" y="4.46" width="30.1" height=".5" />
        <polyline points="586.16 4.46 586.16 4.16 586.96 4.16 586.96 4.66 586.56 4.66" />
        <rect x="585.76" y="4.46" width=".8" height=".5" />
        <polyline points="587.26 1.76 587.26 1.26 554.26 1.26 554.26 1.76" />
        <polygon points="546.56 6.46 554.26 6.46 554.26 4.16 554.76 4.16 554.76 1.76 546.56 1.76 546.56 6.46" />
        <polygon points="594.76 6.46 587.16 6.46 587.16 4.16 586.56 4.16 586.56 1.76 594.76 1.76 594.76 6.46" />
        <rect x="546.56" y="6.46" width="3.5" height="3.6" />
        <rect x="591.26" y="6.46" width="3.5" height="3.6" />
        <rect x="587.76" y="6.46" width="3.5" height="3.6" />
        <rect x="483.66" y="1.66" width="7.4" height="10.6" />
        <line x1="531.56" y1="6.46" x2="498.66" y2="6.46" />
        <line x1="499.26" y1="1.76" x2="530.96" y2="1.76" />
        <polyline points="499.66 4.46 499.66 4.16 498.86 4.16 498.86 4.66 499.26 4.66" />
        <rect x="499.26" y="4.46" width=".8" height=".5" />
        <rect x="500.06" y="4.46" width="30.1" height=".5" />
        <polyline points="530.66 4.46 530.66 4.16 531.36 4.16 531.36 4.66 530.96 4.66" />
        <rect x="530.16" y="4.46" width=".8" height=".5" />
        <polyline points="531.66 1.76 531.66 1.26 498.66 1.26 498.66 1.76" />
        <polygon points="491.06 6.46 498.66 6.46 498.66 4.16 499.26 4.16 499.26 1.76 491.06 1.76 491.06 6.46" />
        <polygon points="539.16 6.46 531.56 6.46 531.56 4.16 530.96 4.16 530.96 1.76 539.16 1.76 539.16 6.46" />
        <rect x="491.06" y="6.46" width="3.5" height="3.6" />
        <rect x="494.56" y="6.46" width="3.5" height="3.6" />
        <rect x="535.76" y="6.46" width="3.5" height="3.6" />
        <rect x="509.46" y="57.46" width="66.9" height="1.1" />
        <polyline points="488.16 57.46 499.26 57.46 499.26 58.56 488.16 58.56" />
        <path d="M518.76,108.46h-27.7s27.7,0,27.7,0Z" />
        <line x1="491.06" y1="111.66" x2="518.76" y2="111.66" />
        <line x1="491.06" y1="114.96" x2="518.76" y2="114.96" />
        <line x1="489.86" y1="118.26" x2="518.76" y2="118.26" />
        <line x1="489.86" y1="121.56" x2="503.96" y2="121.56" />
        <line x1="489.86" y1="124.86" x2="518.76" y2="124.86" />
        <line x1="489.86" y1="128.16" x2="518.76" y2="128.16" />
        <line x1="489.86" y1="127.76" x2="518.76" y2="127.76" />
        <line x1="489.86" y1="124.46" x2="518.76" y2="124.46" />
        <line x1="489.86" y1="121.16" x2="497.76" y2="121.16" />
        <line x1="489.86" y1="117.86" x2="518.76" y2="117.86" />
        <line x1="491.06" y1="114.66" x2="518.76" y2="114.66" />
        <line x1="491.06" y1="111.36" x2="518.76" y2="111.36" />
        <line x1="489.86" y1="131.36" x2="518.76" y2="131.36" />
        <line x1="489.86" y1="131.06" x2="518.76" y2="131.06" />
        <path d="M505.36,108.46l-.1-.4-.2-.4c-.6-.5-1.4-.3-1.7.4l-.1.4.1.4.2.4.3.2.4.1.4-.1.3-.2.2-.4.2-.4h0Z" />
        <line x1="504.36" y1="106.66" x2="504.36" y2="120.06" />
        <line x1="504.36" y1="121.56" x2="504.36" y2="131.36" />
        <polygon points="505.76 118.86 503.06 118.86 504.36 120.06 505.76 118.86" />
        <line x1="518.76" y1="127.76" x2="518.76" y2="115.16" />
        <line x1="195.66" y1="164.96" x2="215.66" y2="164.96" />
        <line x1="199.96" y1="169.56" x2="215.66" y2="169.56" />
        <polygon points="484.26 162.96 484.26 162.56 494.06 162.56 494.06 164.86 494.66 164.86 494.66 167.26 490.76 167.26 490.76 170.36 484.26 170.36 484.26 162.96" />
        <polygon points="484.26 162.56 494.06 162.56 494.06 164.86 494.66 164.86 494.66 167.26 490.76 167.26 490.76 170.36 484.26 170.36 484.26 162.56" />
        <line x1="489.86" y1="119.26" x2="521.86" y2="121.06" />
        <line x1="489.86" y1="120.76" x2="521.86" y2="122.56" />
        <polygon points="505.76 130.16 503.06 130.16 504.36 131.36 505.76 130.16" />
        <polyline points="322.96 174.96 323.06 174.86 323.16 174.96 323.06 174.96" />
        <polyline points="322.96 174.96 323.06 174.86 323.16 174.96" />
        <polyline points="323.06 174.96 323.06 174.86 323.16 174.96 323.06 174.96" />
        <polyline points="323.06 174.96 323.06 174.86 323.16 174.96" />
      </svg>
    </div>
  );
}
