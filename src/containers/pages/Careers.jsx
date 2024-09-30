import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layaout from "hocs/layouts/Layaout"


function Careers(){
    return(
        <Layaout>
            <Navbar/>
            <div className="pt-28">
            Careers
            <Footer/>
            </div>
        </Layaout>
    )
}
export default Careers