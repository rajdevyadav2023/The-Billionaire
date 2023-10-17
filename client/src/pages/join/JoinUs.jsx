import { join_data } from '../../data/join_data'
import './joinus.css'
import img2 from '../../assets/join/img-02.jpg'
const JoinUs = () => {
  return (
    <div className='joinus'>
      <div className="banner">
        <h1>Join Us</h1>
      </div>

      <div className="content-wrapper">
        <div className="full-width content-box">
          <h2>Join Us, Where Dreams Come True</h2>


          <div className="services-list">
            {
              join_data.map(item => (
                <div key={item.id} className='service'>
                  <h3 className='feature'>{item.feature}</h3>
                </div>
              ))
            }
          </div>
        </div>
      </div>

      <div className="content-wrapper form-container" >
        <div className="content-box">
          <form action="https://formspree.io/f/mbjvqpgv" method='POST'>

            <h2>Contact Us Form</h2>

            <div className="form-control">
              <label htmlFor="name">Full Name</label>
              <input type="text" placeholder='Enter Here' name='name' id='name' autoComplete='off' />
            </div>

            <div className="form-control">
              <label htmlFor="email">Email Id</label>
              <input type="email" placeholder='Enter Here' name='email' id='email' autoComplete='off' />
            </div>

            <div className="form-control">
              <label htmlFor="phone">Phone No</label>
              <input type="tel" placeholder='Enter Here' name='phone' id='phone' autoComplete='off' />
            </div>

            <div className="form-control">
              <label htmlFor="message">Message</label>
              <textarea type="text" placeholder='Enter Here' name='message' id='message' autoComplete='off' ></textarea>
            </div>

            <div className="btn-group">
              <button>Submit</button>
            </div>
          </form>
        </div>

        <div className="img-box">
          <img src={img2} alt="" />
        </div>

      </div>
    </div>
  )
}

export default JoinUs