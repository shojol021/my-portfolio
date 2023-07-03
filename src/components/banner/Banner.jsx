import './banner.css'
import image from '../../assets/shojol.jpg'

const Banner = () => {
    return (
        <div>
            <div className="bg-cover gradient-bg bg-center h-screen flex justify-center items-center">
                <div data-aos="fade-up" data-aos-delay="300">
                    <h2 className="text-white text-4xl text-start  py-4">Hi, I am</h2>
                    <h1 className="text-white text-6xl font-bold ">Adnan Hossain Shojol</h1>
                    <a target='_blank' rel="noopener noreferrer" href="https://drive.google.com/file/d/15h0F312tF2SVF2ZDV5I_wXjnsvZEfYoC/view?usp=sharing"><button className='btn btn-primary mt-5'>Checkout Resume</button></a>
                </div>
                <div data-aos="fade-left" data-aos-delay="400" className='w-1/4 ms-6'>
                    <img className='h-30' src={image} alt="" />
                </div>
                
            </div>
        </div>
    );
};

export default Banner;