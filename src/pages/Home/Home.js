import CardDesign from '../../components/Card/CardDesign'
import Navbar from '../../components/Navbar/Navbar'
import Sponsor from '../../components/Sponsor/Sponsor'
import Store from '../../context/Store'
import SponsorApi from '../../context/SponsorApi'
import Footer from '../../components/Footer/Footer'


function Home() {

    return (
        <div>
            <Store>
                <Navbar />
                <SponsorApi>
                    <Sponsor />
                </SponsorApi>
                    <CardDesign />
                <Footer />
            </Store>
        </div>
    )
}

export default Home