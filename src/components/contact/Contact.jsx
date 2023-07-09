import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

const Contact = () => {
    return (
        <div id='contact' className="bg-teal-400">
            <h1 data-aos="fade-up" className='text-center font-bold text-6xl mb-10 mt-20 pt-10'>Contact</h1>

            <footer className="footer p-10">
                <div className="">
                    <h2 className="footer-title">Contact Me</h2>
                    <p>shojol021@gmail.com</p>
                    <p>+8801683180668</p>
                    <span className="footer-title mt-12">Social</span>
                    <div className="grid grid-flow-col gap-4">
                        <a href="https://www.linkedin.com/in/shojol021"><FaLinkedin size='2rem'></FaLinkedin></a>
                        <a href="https://github.com/shojol021"><FaGithub size='2rem'></FaGithub></a>
                    </div>
                </div>
                <div className="">
                    <span className="footer-title">Enter Your Message</span>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Your email?</span>
                        </label>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Message</span>
                        </label>
                        <textarea className="textarea textarea-bordered h-24" placeholder="Type Here"></textarea>

                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Contact;