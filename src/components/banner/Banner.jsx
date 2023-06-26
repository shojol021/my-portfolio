import './banner.css'
import image from '../../assets/shojol.jpg'

const Banner = () => {
    return (
        <div>
            <div className="bg-cover gradient-bg bg-center h-screen flex justify-center items-center">
                <div>
                    <h2 className="text-white text-4xl text-start  py-4">Hi, I am</h2>
                    <h1 className="text-white text-6xl font-bold ">Adnan Hossain Shojol</h1>
                    <button className='btn btn-primary mt-5'>Checkout Resume</button>
                </div>
                <div className='w-1/4 ms-6'>
                    <img className='h-30' src={image} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;