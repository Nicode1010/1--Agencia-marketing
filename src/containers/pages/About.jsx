import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layaout from "hocs/layouts/Layaout"


function About(){
    return(
        <Layaout>
            <Navbar/>
            <div className="pt-28">
            About
        
            <Footer/>
            </div>
        </Layaout>
    )
}
export default About