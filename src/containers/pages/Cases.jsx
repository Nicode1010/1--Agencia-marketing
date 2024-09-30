import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layaout from "hocs/layouts/Layaout"


function Cases(){
    return(
        <Layaout>
            <Navbar/>
            <div className="pt-28">
            Cases
            <Footer/>
            </div>
        </Layaout>
    )
}
export default Cases