import logo from '../assets/logo.png'


const Navbar = () => {
  return (
    <div className="w-full h-20 bg-pink-200">
      <div className=" h-full flex  flex-row justify-end items-center">
        <div className='flex justify-star w-1/2'> 
          <img src={logo} alt="LOGO" width={100} height={100}/>        
        </div>
        <div className="w-1/2 flex justify-around crimsonpro text-3xl">
          <h2>citas</h2>
          <h2>galeria</h2>
          <h2>servicios</h2>
          <h2>inicio</h2>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
