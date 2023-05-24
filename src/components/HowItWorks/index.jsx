import PhoneImg from '../../assets/img/phone.png';

import './index.scss';

export const HowItWorks = () => {
  return (
    <div className='how-it-works'>
      <p>How does it work</p>

      <div className="wrapper">
        <img src={PhoneImg} alt="phone" />
        <div className="content">
          <h2>REGISTRATION</h2>
          <p>
            Enter your details so that we can provide you with all the <br /> 
            services, enter your details so that we can provide you <br /> with all the services
          </p>
          <button className='try-btn'>Try Now</button>
        </div>
      </div>
    </div>
  )
}