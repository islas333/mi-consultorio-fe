import HeaderComponent from './Components/Header/Header.component';
import { FaDollyFlatbed, FaComments, FaCalendarAlt, FaCashRegister, FaDonate, FaWifi } from "react-icons/fa";

function App() {
  return (
    <>
      <HeaderComponent />
      <div className="container mx-auto px-4 py-4">

        <div className="grid grid-cols-1 text-center">
          <h1 className="text-2xl font-bold text-gray-500">PROXIMAMENTE</h1>
          <div className="border-b-2 border-gray-300 mr-3"></div>
        </div>

        <div className="grid grid-cols-3 mt-10 gap-6">

          <div className="max-w-sm rounded overflow-hidden shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-slate-100 duration-300">
            <div className="px-6 py-4">
              <div className="flex justify-center items-center mb-2">
                <div className="bg-blue-500 rounded-full p-4">
                  <FaDonate className="text-white text-4xl" />
                </div>
              </div>
              <div className="font-bold text-xl mb-2 text-center mt-4">MIS FINANZAS</div>
              <div className="border-b-2 border-gray-300 mr-3"></div>
              <p className="text-gray-500 text-base text-center mt-4">
                Modulo de finanzas para llevar un control de los ingresos y egresos del consultorio.
              </p>
            </div>
          </div>

          <div className="max-w-sm rounded overflow-hidden shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-slate-100 duration-300">
            <div className="px-6 py-4">
              <div className="flex justify-center items-center mb-2">
                <div className="bg-green-500 rounded-full p-4">
                  <FaCalendarAlt className="text-white text-4xl" />
                </div>
              </div>
              <div className="font-bold text-xl mb-2 text-center mt-4">MIS CITAS</div>
              <div className="border-b-2 border-gray-300 mr-3"></div>
              <p className="text-gray-500 text-base text-center mt-4">
                Modulo de citas, te permite administrar tus citas y programar tu itinerario de mi consultorio.
              </p>
            </div>
          </div>

          <div className="max-w-sm rounded overflow-hidden shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-slate-100 duration-300">
            <div className="px-6 py-4">
              <div className="flex justify-center items-center mb-2">
                <div className="bg-red-500 rounded-full p-4">
                  <FaCashRegister className="text-white text-4xl" />
                </div>
              </div>
              <div className="font-bold text-xl mb-2 text-center mt-4">MI FARMACIA</div>
              <div className="border-b-2 border-gray-300 mr-3"></div>
              <p className="text-gray-500 text-base text-center mt-4">
                Modulo encargado de llevar el inventario de medicamentos de mi consultorio.
              </p>
            </div>
          </div>

          <div className="max-w-sm rounded overflow-hidden shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-slate-100 duration-300">
            <div className="px-6 py-4">
              <div className="flex justify-center items-center mb-2">
                <div className="bg-violet-600 rounded-full p-4">
                  <FaComments className="text-white text-4xl" />
                </div>
              </div>
              <div className="font-bold text-xl mb-2 text-center mt-4">MI MENSAJERIA</div>
              <div className="border-b-2 border-gray-300 mr-3"></div>
              <p className="text-gray-500 text-base text-center mt-4 ">
                Modulo de finanzas para llevar un control de los ingresos y egresos del consultorio.
              </p>
            </div>
          </div>

          <div className="max-w-sm rounded overflow-hidden shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-slate-100 duration-300">
            <div className="px-6 py-4">
              <div className="flex justify-center items-center mb-2">
                <div className="bg-emerald-300 rounded-full p-4">
                  <FaWifi className="text-white text-4xl" />
                </div>
              </div>
              <div className="font-bold text-xl mb-2 text-center mt-4">MIS CONSULTORIO WEB</div>
              <div className="border-b-2 border-gray-300 mr-3"></div>
              <p className="text-gray-500 text-base text-center mt-4">
                MI CONSULTORIO proximamente estara disponible online, espera las noticias en este portal, para futuras actualizaciones.
              </p>
            </div>
          </div>

          <div className="max-w-sm rounded overflow-hidden shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-slate-100 duration-300">
            <div className="px-6 py-4">
              <div className="flex justify-center items-center mb-2">
                <div className="bg-yellow-400 rounded-full p-4">
                  <FaDollyFlatbed className="text-white text-4xl" />
                </div>
              </div>
              <div className="font-bold text-xl mb-2 text-center mt-4">MIS ESPECIALES</div>
              <div className="border-b-2 border-gray-300 mr-3"></div>
              <p className="text-gray-500 text-base text-center mt-4">
                Si te interesa un requerimiento especifico de algun desarrollo a la medida, no dude en contactarnos al correo electronico, o con unos de los medicos referenciados.
              </p>
            </div>
          </div>

        </div>

        <div className="grid grid-cols-6 mt-20">
          <div className='col-start-2 col-span-4 flex justify-center'>
            <img src="/Logo.png" alt="Logo" width="100" />
          </div>
          <div className='col-start-2 col-span-4 text-gray-400 text-center pt-2 text-sm'>
            Desarrollado por HIR 2024, este es un software de uso personal y personalizado para cada medico, el uso de este software es responsabilidad del usuario.
          </div>
        </div>

      </div>
    </>
  );
}

export default App;
