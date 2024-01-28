import { useAppStore } from "@/store/session";

export default function Footer() {
  const timer = useAppStore.use.timer();
  const showPub = useAppStore.use.showPub();
  const showResult = useAppStore.use.showResult();

  return (
    <>
      <footer
        className="footer"
        style={{
          position: "absolute",
          zIndex: "1",
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
            showResult: {(showResult && "true") || "false"}
          </p>
        </div>
      </footer>
    </>
  );
}
