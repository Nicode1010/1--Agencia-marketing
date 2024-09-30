import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layaout from "hocs/layouts/Layaout"


function Services(){
    return(
        <Layaout>
            <Navbar/>
            <div className="pt-28">
            Services
        
            <Footer/>
            </div>
        </Layaout>
    )
}
export default Services