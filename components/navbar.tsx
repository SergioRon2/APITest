import StyleNavbar from '../styles/navbar.module.css'


const Navbar = () => {
  return (
    <>
        <nav className={StyleNavbar.navbar}>
            <h1 className={StyleNavbar.title}>API Test</h1>
        </nav>
    </>
  );
};

export default Navbar;
