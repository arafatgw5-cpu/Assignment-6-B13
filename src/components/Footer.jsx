import React from 'react';

const Footer = () => {
    return (
        <div>
     
            <footer className="footer sm:footer-horizontal bg-[#101727] text-base-content p-10 text-white">
                
     
                <aside>
                    <p className="text-4xl font-bold tracking-tighter">DigiTools</p>
                    <p className="mt-2 text-base opacity-80 max-w-xs">
                        Premium digital tools for creators, professionals, and businesses. 
                        Work smarter with our suite of powerful tools.
                    </p>
                </aside>

          
                <nav>
                    <h6 className="footer-title">Product</h6>
                    <a className="link link-hover">Features</a>
                    <a className="link link-hover">Pricing</a>
                    <a className="link link-hover">Templates</a>
                    <a className="link link-hover">Integrations</a>
                </nav>

        
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About</a>
                    <a className="link link-hover">Blog</a>
                    <a className="link link-hover">Careers</a>
                    <a className="link link-hover">Press</a>
                </nav>

                <nav>
                    <h6 className="footer-title">Resources</h6>
                    <a className="link link-hover">Documentation</a>
                    <a className="link link-hover">Help Center</a>
                    <a className="link link-hover">Community</a>
                    <a className="link link-hover">Contact</a>
                </nav>

             
              <nav>
    <h6 className="footer-title">Social Links</h6>
    <div className="flex gap-6 mt-4">
        

        <a 
            href="#" 
            className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-4xl hover:scale-110 transition-all shadow-md"
            aria-label="Instagram"
        >
            <i className="fa-brands fa-instagram text-[#E4405F]"></i>
        </a>


        <a 
            href="#" 
            className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-4xl hover:scale-110 transition-all shadow-md"
            aria-label="Facebook"
        >
            <i className="fa-brands fa-facebook-f text-[#1877F2]"></i>
        </a>

  
        <a 
            href="#" 
            className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-4xl hover:scale-110 transition-all shadow-md"
            aria-label="X"
        >
            <i className="fa-brands fa-x-twitter text-black"></i>
        </a>

    </div>
</nav>
            </footer>

         
            <div className="bg-[#101727] text-white text-base-content border-t border-base-300 px-10 py-5 flex flex-col md:flex-row justify-between items-center text-sm">
                <p>© 2026 DigiTools. All rights reserved.</p>
                <div className="flex gap-x-8 mt-4 md:mt-0">
                    <a className="link link-hover">Privacy Policy</a>
                    <a className="link link-hover">Terms of Service</a>
                    <a className="link link-hover">Cookies</a>
                </div>
            </div>
        </div>
    );
};

export default Footer;