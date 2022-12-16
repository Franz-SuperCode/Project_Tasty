import './Landing.css'
import Circle from '../../assets/img/circleFood.svg'
import { Link } from "react-router-dom";


function Landing() {
    return (
        <div className="landing">
            <img className="centerImg" src={Circle} />
            <section className='whiteSection'>
                <h1 className='lanTitel'>All the recipes you need</h1>
                <h2 className='lanSub'>5000+ healthy recipes made by people, <br />for your healthy life</h2>
                <Link to="/home"> <button className="getStarted">Get Started</button></Link>
            </section>

        </div>
    )
}

export default Landing