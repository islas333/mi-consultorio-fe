import HeaderComponent from './Components/Header/Header.component';

function App() {
  return (
    <>
      <HeaderComponent />
      <div className="container mx-auto px-4 py-4">
        <div className="grid grid-cols-1">
          <div className='items-center justify-center'>
            <img src={process.env.PUBLIC_URL + "/logo.png"} alt="Logo" className="mx-auto" />
          </div>
          <div>
            Bienvenido a Mi Consultorio V1.0, esta es una aplicación de escritorio para la gestión de consultorios médicos.
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
