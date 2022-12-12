import './Landing.css'
import Circle from '../../assets/img/circleFood.svg'

function Landing() {
    return (
        <div className="landing">
            <img src={Circle} />
            <section>
                <h1>All the recipes you need</h1>
                <h2>5000+ healthy recipes made by people, for your healthy life</h2>
            </section>
        </div>
    )
}

export default Landing