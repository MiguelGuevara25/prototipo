import { Clientes } from "./components/Clientes";
import Dash from "./components/Dash";

export default function Home() {
  return (
    <div className="flex flex-1 overflow-hidden">
      <Clientes />
      <Dash />
    </div>
  );
}
