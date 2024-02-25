import { useAppStore } from "@/store/session";
import { GiTeleport } from "react-icons/gi";

export default function DevTools() {
  const timer = useAppStore.use.timer();
  const showPub = useAppStore.use.showPub();
  const showResult = useAppStore.use.showResult();
  const etage = useAppStore.use.etage();
  const showAscenseur = useAppStore.use.showAscenseur();
  const setShowAscenseur = useAppStore.use.setShowAscenseur();

  function teleport() {
    console.log("teleport");
    setShowAscenseur(true);
  }

  return (
    <>
      <footer
        className="footer"
        style={{
          position: "absolute",
          zIndex: "100",
          bottom: "0",
          width: "100%",
          height: "20px",
          lineHeight: "20px",
          backgroundColor: "#1F2A2E",
        }}
      >
        <div className="container-fluid">
          <p className="text-white">
            reset in {timer} sec | showPub: {(showPub && "true") || "false"} |
            showResult: {(showResult && "true") || "false"} | etage: {etage} |
            showAscenseur: {(showAscenseur && "true") || "false"}
          </p>
        </div>
        <button
          className="btn btn-sm btn-primary position-absolute top-0 end-0 translate-middle me-5"
          onClick={() => teleport()}
        >
          <GiTeleport /> Teleport
        </button>
      </footer>
    </>
  );
}
