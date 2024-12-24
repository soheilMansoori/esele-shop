import { useEffect, useState, useCallback } from 'react'

// import components start
import Navbar from './Navbar/Navbar'
import Menu from './Menu/Menu'
import MobileBottomMenu from './MobileBottomMenu/MobileBottomMenu'
import NavbarMobile from './Navbar/NavbarMobile'
import MenuMobile from './Menu/MenuMobile'
// import components end


function Header() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const [megaMenuItems, setMegaMenuItems] = useState([])


    // get mega menu items from the server
    const getMegaMenuData = useCallback(() => {
        fetch(`${process.env.REACT_APP_BACKEND_BASE_URL}/megaMenu`)
            .then(res => res.json())
            .then(data => setMegaMenuItems(data))
            .catch(error => console.log(error.message));
    }, []);

    useEffect(() => {
        // get all the menu items 
        getMegaMenuData();

        // responseHandler for response Header
        const responseHandler = () => {
            setWindowWidth(window.innerWidth);
        }

        // save performance 
        window.addEventListener('resize', responseHandler)
        return () => window.removeEventListener('resize', responseHandler)
    }, [windowWidth, getMegaMenuData])


    return (
        <div div className="header-main w-100" >
            <div>
                {windowWidth > 1024 ? (
                    <>
                        {/* md xl xxl*/}
                        <div div className="d-flex web-view">
                            <div className="header w-100">
                                <Navbar />
                                <Menu megaMenuItems={megaMenuItems} />
                            </div>
                        </div>
                    </>

                ) : (
                    <>
                        {/* md sm */}
                        <div className="phone-view shadow-sm">
                            {/* logo  */}
                            <NavbarMobile />

                            {/* Hamburger menu */}
                            <MenuMobile megaMenuItems={megaMenuItems} />

                            {/* bottom menu */}
                            <MobileBottomMenu />
                        </div>
                    </>
                )}

            </div>
        </div >

    )
}

export default Header



