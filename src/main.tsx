import ReactDOM from "react-dom/client";
import "./assets/css/index.css";
import "./components/language/i18n.ts";
import RouteList from "./components/common/routes/RouteList.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(<RouteList />);
