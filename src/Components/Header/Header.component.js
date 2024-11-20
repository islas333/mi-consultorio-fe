
const HeaderComponent = () => {
  return (
    <header className="bg-teal-800 text-gray-600 py-4">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-3 gap-4 items-center">
          <div>
            {/* <h1 className="text-2xl font-bold">Mi consultorio</h1> */}
          </div>
          <div></div>
          <div className="text-right text-sm text-white">Contacto:<br />islas333@gmail.com</div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-4">
                
        <div className="grid grid-cols-6">
          <div className='col-start-2 col-span-4 flex justify-center'>
            <img src="/Logo_white_2.png" alt="Logo" width="350" />
          </div>
          <div className='col-start-2 col-span-4 text-white font-bold text-center pt-10'>
            Bienvenido a Mi Consultorio V1.0, esta es una aplicación de escritorio para la gestión de consultorios médicos. En este portal encontraras las actualizaciones y mejoras de la aplicación.
          </div>
        </div>

      </div>
    </header>
  )
}

export default HeaderComponent;