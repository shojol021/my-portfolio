
const Projects = () => {
    return (
        <div>
            <h1 data-aos="fade-up" className='text-center font-bold text-6xl mb-10 mt-20'>Projects</h1>

            <div className="mx-12 grid grid-cols-3 gap-12">
                <div data-aos="fade-right" className="">
                    <div className="border w-[380px] h-[450px] rounded flex flex-col">
                        <div className="">
                            <img src="https://i.postimg.cc/hhRSmqFq/pro1.jpg" alt="" className=" mx-auto border w-[350px] h-[210px] mt-5" />
                        </div>
                        <div className="text-center my-2 font-bold">
                            Toy Store - Online Robot Toys Store
                        </div>
                        <div className="ml-2 flex-grow">
                            <span className="font-bold">Technologies</span> - TailwindCSS, Daisy UI, React, Node JS, Express JS, MongoDB, Firebase, AOS animation.
                        </div>
                        <div className="text-center mb-3 text-teal-400 font-bold">
                            <a target='_blank' rel="noopener noreferrer" href="https://toy-store-d8df7.web.app">Live Site</a> |
                            <a target='_blank' rel="noopener noreferrer" href="https://github.com/shojol021/toy-store-client"> Github (Client)</a> |
                            <a target='_blank' rel="noopener noreferrer" href="https://github.com/shojol021/toy-store-server"> Github (Server)</a>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-right" data-aos-delay="100">
                    <div className="border w-[370px] h-[450px] rounded flex flex-col">
                        <div className="">
                            <img src="https://i.postimg.cc/h4zTVbFC/pro2.jpg" alt="" className=" mx-auto border w-[350px] h-[210px] mt-5" />
                        </div>
                        <div className="text-center my-2 font-bold">
                            Toy Store - Online Robot Toys Store
                        </div>
                        <div className="ml-2 flex-grow">
                            <span className="font-bold">Technologies</span> - TailwindCSS, DaisyUI, React JS, Node JS, Express JS, MongoDB, Firebase,
                            React animation, Axios, React Stripe, Tanstack Query, React Router, React Hook Form, Vercel
                        </div>
                        <div className="text-center mb-3 text-teal-400 font-bold">
                            <a target='_blank' rel="noopener noreferrer" href="https://summer-school-c376f.web.app/">Live Site</a> |
                            <a target='_blank' rel="noopener noreferrer" href="https://github.com/shojol021/summer-camp-client"> Github (Client)</a> |
                            <a target='_blank' rel="noopener noreferrer" href="https://github.com/shojol021/summer-camp-server"> Github (Server)</a>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-right" data-aos-delay="200">
                    <div className="border w-[370px] h-[450px] rounded flex flex-col">
                        <div className="">
                            <img src="https://i.postimg.cc/vTVYDZNz/pro3.jpg" alt="" className=" mx-auto border w-[350px] h-[210px] mt-5" />
                        </div>
                        <div className="text-center my-2 font-bold">
                            Toy Store - Online Robot Toys Store
                        </div>
                        <div className="ml-2 flex-grow">
                            <span className="font-bold">Technologies</span> - TailwindCSS, DaisyUI, React JS, Node JS, Express JS, Firebase, Vercel
                        </div>
                        <div className="text-center mb-3 text-teal-400 font-bold">
                            <a target='_blank' rel="noopener noreferrer" href="https://chef-assignment10.web.app/">Live Site</a> |
                            <a target='_blank' rel="noopener noreferrer" href="https://github.com/shojol021/chef-master-client"> Github (Client)</a> |
                            <a target='_blank' rel="noopener noreferrer" href="https://github.com/shojol021/chef-master-server"> Github (Server)</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;