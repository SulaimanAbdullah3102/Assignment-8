

const Footer = () => {
    return (
        <div className="flex items-center flex-col">
            <div className="text-center">
                <h1 className="text-4xl font-semibold" >
                    Gadget Heaven
                </h1>
                <p>
                    Leading the way in cutting-edge technology and innovation.
                </p>
            </div>
            <footer className="mx-auto container footer p-10">
                <nav>
                    <h6 className="text-black font-semibold">Services</h6>
                    <a className="link link-hover text-gray-500">Branding</a>
                    <a className="link link-hover text-gray-500 ">Design</a>
                    <a className="link link-hover text-gray-500">Marketing</a>
                    <a className="link link-hover text-gray-500">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="text-black font-semibold">Company</h6>
                    <a className="link link-hover text-gray-500">About us</a>
                    <a className="link link-hover text-gray-500">Contact</a>
                    <a className="link link-hover text-gray-500" >Jobs</a>
                    <a className="link link-hover text-gray-500">Press kit</a>
                </nav>
                <nav>
                    <h6 className="text-black font-semibold">Legal</h6>
                    <a className="link link-hover text-gray-500">Terms of use</a>
                    <a className="link link-hover text-gray-500">Privacy policy</a>
                    <a className="link link-hover text-gray-500">Cookie policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;