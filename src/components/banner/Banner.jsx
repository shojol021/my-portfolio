import banner from '../../assets/banner.png'

const Banner = () => {
    return (
        <div>
            <div className="bg-cover bg-gradient-to-r from-teal-400 to-green-400 bg-blend-screen bg-center h-[600px]" style={{ backgroundImage: `url(${banner})` }}>
                <h1 className="text-white text-center text-2xl py-4">My Website</h1>
            </div>
        </div>
    );
};

export default Banner;