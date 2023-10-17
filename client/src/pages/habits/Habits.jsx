import { habits_data } from '../../data/habits_data'
import './habits.css'
const Habits = () => {
    document.title = "Habits | The Billionaire "

    return (
        <div className='habits'>

            <div className="banner">
                <h1>The Billionaire&#39;s Habits</h1>
            </div>

            <div className="content-wrapper">
                <div className="full-width content-box">
                    <h2>The Billionaire&#39;s Habits</h2>
                    <p>&#34;The billionaire&#39;s habit&#34; is not a well-known phrase or concept in itself. However, if you are interested in learning about the habits and traits commonly associated with successful and wealthy individuals, there are several well-documented habits and practices that many billionaires and highly successful people tend to exhibit. Some of these habits may include:</p>

                    {
                        habits_data.map((item) => {
                            return (
                                <div key={item.id}>
                                    <h3>{item.id}. {item.title}</h3>
                                    <p>{item.description}</p>
                                </div>
                            )
                        })
                    }

                    <div>
                        <h3>Conclusion</h3>
                        <p>It&#39;s important to note that these habits are not exclusive to billionaires and can be beneficial for anyone looking to achieve their goals. Success is often a result of a combination of factors, including hard work, opportunity, and a bit of luck.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Habits