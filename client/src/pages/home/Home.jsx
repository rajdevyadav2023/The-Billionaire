import Carousel from '../../components/carousel/Carousel';
import './home.css';
import img2 from '../../assets/home/img-02.jpg'
import img3 from '../../assets/home/img-03.jpg'
import img4 from '../../assets/home/img-04.jpg'
import img5 from '../../assets/home/img-05.jpg'
import img6 from '../../assets/home/img-06.jpg'
import img7 from '../../assets/home/img-07.jpg'

const Home = () => {
  return (
    <div>

      <section className='hero'>
        <div className="banner">
          <h1>The Billionaire</h1>
        </div>
        <div className="content-wrapper">
          <div className="content-box full-width">
            <h2>What is A Billionaire?</h2>
            <p>A billionaire is an individual whose net worth exceeds one billion units of their country&#39;s currency or one billion US dollars. In other words, a billionaire is someone who possesses assets, investments, and resources that, when combined, have a total value of at least one billion. Becoming a billionaire is often associated with significant wealth and financial success.</p>

            <p>Billionaires typically amass their wealth through various means, such as starting and growing successful businesses, making wise investments, or inheriting substantial assets. They are among the wealthiest individuals in the world, and their financial influence can extend to various industries and philanthropic endeavors. Organizations like Forbes often compile lists of billionaires, ranking and profiling them based on their estimated net worth.</p>

            <p>It&#39;s important to note that an individual&#39;s net worth can fluctuate over time due to changes in the value of their assets and investments, economic factors, and other financial developments.</p>
          </div>

        </div>
      </section>

      <section className='content-wrapper reverse'>
        <div className="content-box">
          <h2>The  Billionaire&#39;s Education</h2>
          <p>Education for billionaires is not fundamentally different from education for anyone else, but there are some specific considerations and opportunities that may be more accessible to individuals with significant wealth. Here are some aspects to consider:</p>

          <h3>1. Formal Education:</h3>
          <p>Many billionaires hold advanced degrees in various fields. They often attend prestigious universities and may even make significant donations to these institutions. Formal education can provide a strong foundation of knowledge and skills.</p>

          <h3>2. Continuous Learning:</h3>
          <p>Billionaires often have a strong commitment to lifelong learning. They might attend seminars, workshops, and conferences on topics of interest. These events can provide networking opportunities and access to experts in various fields.</p>

          <button>Read More</button>
        </div>

        <div className="img-box">
          <img src={img2} alt="education" />
        </div>
      </section>


      <section className='content-wrapper'>

        <div className="img-box">
          <img src={img3} alt="mindset" />

        </div>

        <div className="content-box">
          <h2>The Billionaire Mindset</h2>
          <p>The term &#34;Billionaire Mindset&#34; is often used to describe the attitudes, beliefs, and behaviors that are commonly associated with many successful billionaires. While it&#39;s important to recognize that not all billionaires share the same mindset, there are certain characteristics and principles that some of them tend to embody. Here are some key aspects of a &#34;Billionaire Mindset&#34;:</p>

          <h3>1. Long-Term Vision:</h3>
          <p>Billionaires often have a long-term perspective. They focus on building and scaling businesses or investments that will provide sustained wealth over time, rather than seeking short-term gains.</p>

          <h3>2. Risk-Taking:</h3>
          <p>Many billionaires are willing to take calculated risks. They understand that high rewards often come with high risks and are not afraid to take chances when they see opportunities.</p>

          <button>Read More</button>
        </div>

      </section>

      <section className='content-wrapper reverse'>

        <div className="content-box">
          <h2>The Billionaire&#39;s Career</h2>
          <p>A billionaire&#39;s career typically involves a combination of factors such as entrepreneurship, investments, innovation, and sometimes a bit of luck. While there&#39;s no one-size-fits-all path to becoming a billionaire, here are some common elements and career strategies that many billionaires have pursued:</p>

          <h3>1. Entrepreneurship:</h3>
          <p>Many billionaires have started their own businesses. They identify opportunities in the market, develop innovative products or services, and build successful companies around them. Examples include Elon Musk (Tesla, SpaceX), Jeff Bezos (Amazon), and Mark Zuckerberg (Facebook).</p>

          <h3>2. Technology and Innovation:</h3>
          <p>A significant number of billionaires have made their fortunes in the technology sector by creating groundbreaking innovations. This often involves developing software, hardware, or platforms that disrupt existing industries or create entirely new ones.</p>

          <button>Read More</button>
        </div>

        <div className="img-box">
          <img src={img4} alt="career" />
        </div>
      </section>

      <section className='content-wrapper'>
        <div className="img-box">
          <img src={img5} alt="business" />
        </div>

        <div className="content-box">
          <h2>The Billionaire&#39;s Business</h2>
          <p>Billionaires typically have a diverse range of businesses and investments in various industries. Their specific businesses can vary widely, but here are some common types of businesses that billionaires may be involved in:</p>

          <h3>1. Technology Companies:</h3>
          <p>Many billionaires have made their fortunes in the technology sector. This includes creating and investing in companies like Microsoft (Bill Gates), Amazon (Jeff Bezos), and Tesla (Elon Musk).</p>

          <h3>2. Investment and Finance:</h3>
          <p>Some billionaires are heavily involved in investment and finance, including hedge funds, private equity firms, and investment banking.</p>

          <button>Read More</button>
        </div>

      </section>

      <section className='content-wrapper reverse'>
        <div className="content-box">
          <h2>The Billionaire&#39;s Habits</h2>

          <p>&#34;The Billionaire&#39;s Habit&#34; is not a well-known phrase or concept in itself. However, if you are interested in learning about the habits and traits commonly associated with successful and wealthy individuals, there are several well-documented habits and practices that many billionaires and highly successful people tend to exhibit. Some of these habits may include:</p>

          <h3>1. Rigorous Goal Setting:</h3>
          <p>Setting clear and specific goals and consistently working towards them is a common trait among billionaires. They often have a clear vision of what they want to achieve and a roadmap to get there.</p>

          <h3>2. Continuous Learning:</h3>
          <p>Successful individuals are often voracious readers and lifelong learners. They invest in their education and stay up-to-date with the latest trends and information in their field.</p>

          <button>Read More</button>
        </div>

        <div className="img-box">
          <img src={img6} alt="habits" />
        </div>
      </section>

      <section className='content-wrapper'>
        <div className="img-box">
          <img src={img7} alt="lifestyle" />
        </div>
        <div className="content-box">
          <h2>The Billionaire&#39;s Lifestyle</h2>
          <p>The lifestyle of a billionaire varies greatly depending on their personal preferences, interests, and priorities. However, there are some common elements that can be associated with the lives of many billionaires:</p>

          <h3>1. Luxurious Residences:</h3>
          <p>Billionaires often own multiple lavish homes in different parts of the world. These properties can range from sprawling mansions to private islands, penthouses in upscale urban areas, and high-end estates.</p>

          <h3>2. Private Jets and Yachts:</h3>
          <p>Many billionaires own private jets and yachts for convenient and luxurious travel. These vehicles offer privacy, comfort, and the ability to travel on their own schedule.</p>

          <button>Read More</button>
        </div>

      </section>

      <Carousel />

    </div>
  )
}

export default Home