import HeaderComponent from './Components/Header/Header.component';
import { FaBusinessTime, FaCalculator, FaCalendarAlt, FaCashRegister, FaDonate } from "react-icons/fa";

function App() {
  return (
    <>
      <HeaderComponent />
      <div className="container mx-auto px-4 py-4">

        <div className="grid grid-cols-1 text-center">
          <h1 className="text-2xl font-bold">PROXIMAMENTE</h1>
        </div>

        <div className="grid grid-cols-3">
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-center">
                <FaDonate />
              </div>
              <div className="font-bold text-xl mb-2 text-center">MIS FINANZAS</div>
              <p className="text-gray-700 text-base">
                Modulo de finanzas para llevar un control de los ingresos y egresos del consultorio.
              </p>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

export default App;
