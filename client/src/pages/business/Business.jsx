import { business_data } from '../../data/business_data'
import './business.css'

const Business = () => {
    document.title = "Business | The Billionaire "

    return (
        <div className='business'>
            <div className="banner">
                <h1>The Billionaire&#39;s Business</h1>
            </div>

            <section className="content-wrapper">
                <div className="full-width content-box">
                    <h2>The Billionaire&#39;s Business</h2>
                    <p>Billionaires often invest their wealth in various businesses and industries to diversify their portfolios and generate additional income. Here are some types of businesses that billionaires may consider:</p>

                    {
                        business_data.map((item)=>{
                            return(
                                <div key={item.id}>
                                <h3> {item.id}. {item.title}</h3>
                                <p>{item.discription}</p>
                            </div>
                            )
                        })
                    }

                    <div>
                        <h3>Conclution</h3>
                        <p>It&#39;s important to note that not all billionaires are solely motivated by profit. Many are also driven by a desire to make a positive impact on society, which can influence their choice of businesses and investments. Additionally, individual billionaire preferences and interests vary widely, so their business ventures can be diverse and unique.</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Business