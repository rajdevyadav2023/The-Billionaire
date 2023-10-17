import { mindset_data } from '../../data/mindset_data';
import './mindset.css';

const Mindset = () => {
    document.title = "Mindset | The Billionaire "

    return (
        <div className='mindset'>
            <div className="banner">
                <h1>The Billionaire&#39;s Mindset</h1>
            </div>

            <section className="content-wrapper">
                <div className="full-width content-box">
                    <h2>The Billionaire&#39;s Mindset</h2>
                    <p>A billionaire&#39;s mindset is often characterized by specific attitudes, habits, and beliefs that have contributed to their financial success. It&#39;s important to note that not all billionaires share the same mindset, and there are many paths to achieving such wealth. However, some common traits and principles often associated with a billionaire&#39;s mindset include:</p>

                    {

                        mindset_data.map((item) => {
                            return (<div key={item.id}>
                                <h3> {item.id}. {item.title}</h3>
                                <p>{item.description}</p>
                            </div>)
                        })

                    }
                    <div>

                    </div>
                    <h3>Conclusion</h3>
                    <p>It&#39;s important to remember that while these traits are associated with many billionaires, individual characteristics and circumstances can vary widely. Not all billionaires exhibit every one of these traits, and success can be achieved in various ways. Additionally, it&#39;s worth noting that financial success is not the sole measure of a fulfilling and meaningful life.</p>
                </div>

            </section>
        </div>
    )
}

export default Mindset