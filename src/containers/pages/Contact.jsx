import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layaout from "hocs/layouts/Layout"


function Contact(){
    return(
        <Layaout>
            <Navbar/>
            <div className="pt-28">
            Contact
            <Footer/>
            </div>
        </Layaout>
    )
}
export default Contact