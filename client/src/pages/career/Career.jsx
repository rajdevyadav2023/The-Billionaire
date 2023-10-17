import { career_data } from '../../data/career_data'
import './career.css'

const Career = () => {
    return (
        <div className='career'>
            <div className="banner">
                <h1>The Billionaire&#39;s Career</h1>
            </div>

            <section className="content-wrapper">
                <div className="full-width content-box">
                    <h2>The Billionaire&#39;s Career</h2>
                    <p>A billionaire&#39;s career typically involves a combination of factors such as entrepreneurship, investments, innovation, and sometimes a bit of luck. While there&#39;s no one-size-fits-all path to becoming a billionaire, here are some common elements and career strategies that many billionaires have pursued:</p>

                    {
                        career_data.map((item) => {
                            return (
                                <div key={item.id}>
                                    <h3> {item.id}. {item.title}</h3>
                                    <p>{item.discription}</p>
                                </div>
                            )
                        })
                    }

                    <div>
                        <h3>Conclution</h3>
                        <p>It&#39;s important to note that becoming a billionaire often requires a combination of factors, including hard work, determination, risk-taking, timing, and sometimes even a bit of luck. Additionally, not everyone who aspires to be a billionaire will achieve that level of wealth, as the path to such extraordinary financial success is inherently challenging and often involves a high degree of uncertainty and risk.</p>
                    </div>
                </div>


            </section>
        </div>
    )
}

export default Career