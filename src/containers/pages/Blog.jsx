import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layaout from "hocs/layouts/Layaout"


function Blog(){
    return(
        <Layaout>
            <Navbar/>
            <div className="pt-28">
            Blog
            <Footer/>
            </div>
        </Layaout>
    )
}
export default Blog