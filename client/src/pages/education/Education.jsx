import { education_data } from '../../data/education_data';
import './education.css';

const Education = () => {
    return (
        <div className='education'>
            <div className="banner">
                <h1>The Billionaire&#39;s Education</h1>
            </div>

            <section className="content-wrapper">
                <div className="full-width content-box">
                    <h2>The Billionaire&#39;s Education</h2>
                    <p>Education for billionaires is not fundamentally different from education for anyone else, but there are some specific considerations and opportunities that may be more accessible to individuals with significant wealth. Here are some aspects to consider:</p>

                    {
                        education_data.map((item) => {
                            return (<div key={item.id}>
                                <h3> {item.id}. {item.title}</h3>
                                <p>{item.description}</p>
                            </div>)
                        })
                    }


                    <div>
                        <h3>Conclusion</h3>
                        <p>It&#39;s important to note that while billionaires have access to unique resources and opportunities, education alone is not the sole reason for their success. Many factors, including hard work, innovation, risk-taking, and a bit of luck, play a role in their achievements. Education is just one piece of the puzzle, albeit an important one.</p>

                        <p>
                            Additionally, not all billionaires pursue formal education in the traditional sense. Some may have succeeded through unconventional paths or by starting their own businesses at a young age. In such cases, their education may be more experiential and practical.
                        </p>
                    </div>



                </div>

            </section>
        </div>
    )
}

export default Education