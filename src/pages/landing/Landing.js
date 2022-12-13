import './Landing.css'
import Circle from '../../assets/img/circleFood.svg'

function Landing() {
    return (
        <div className="landing">
            <img className="centerImg" src={Circle} />
            <section>
                <h1>All the recipes you need</h1>
                <h2>5000+ healthy recipes made by people, <br />for your healthy life</h2>
                <button>Get Started</button>
            </section>
        </div>
    )
}

export default Landing