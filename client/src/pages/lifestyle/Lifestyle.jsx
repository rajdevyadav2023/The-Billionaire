import { lifestyle_data } from '../../data/lifestyle_data';
import './lifestyle.css';

const Lifestyle = () => {
    return (
        <div className='lifestyle'>
            <div className="banner">
                <h1>The Billionaire&#39;s Lifestyle</h1>
            </div>

            <div className="content-wrapper">
                <div className="full-width content-box">
                    <h2>The Billionaire&#39;s Lifestyle</h2>
                    <p>The lifestyle of a billionaire varies greatly depending on their personal preferences, interests, and priorities. However, there are some common elements that can be associated with the lives of many billionaires:</p>


                    {
lifestyle_data.map((item)=>{
    return(
        <div key={item.id}>
            <h3>{item.id}. {item.title}</h3>
            <p>{item.description}</p>
        </div>
    )
})
                    }

                    <div>
                        <h3>Conclusion</h3>
                        <p>It&#39;s important to note that not all billionaires lead the same lifestyle, and many are known for their philanthropic efforts and contributions to society. Additionally, maintaining such a lifestyle can be demanding and comes with its own set of responsibilities and challenges, including managing immense wealth, dealing with public scrutiny, and making strategic decisions to preserve and grow their assets.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Lifestyle