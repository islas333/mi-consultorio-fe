
const HeaderComponent = () => {
  return (
    <header className="bg-gray-200 text-gray-600 py-4">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-3 gap-4 items-center">
          <div>
            <h1 className="text-2xl font-bold">Mi consultorio</h1>
          </div>
          <div></div>
          <div className="text-right text-sm">Contacto:<br />islas333@gmail.com</div>
        </div>
      </div>
    </header>
  )
}

export default HeaderComponent;