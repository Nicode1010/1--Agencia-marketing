//import CaseCard from "components/cases/CaseCard"
import CasesList from "components/cases/CasesList"
import Header from "components/cases/Header"
import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layaout from "hocs/layouts/Layout"


function Cases(){
    return(
        <Layaout>
            <Navbar/>
            <div className="pt-28">
                <Header/>
                <CasesList/>
                
            <Footer/>
            </div>
        </Layaout>
    )
}
export default Cases