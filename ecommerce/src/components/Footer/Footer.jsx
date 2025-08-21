const Footer = () => {
  return (
    <footer className="bg-gray-100  text-black">
      <div className="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0">
          {/* Logo & About */}
          <div>
            <h2 className="text-2xl font-bold text-black">ShopMate</h2>
            <p className="mt-2 text-black max-w-xs">
              Your one-stop shop for quality products at unbeatable prices.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-black uppercase tracking-wider">
              Shop
            </h3>
            <ul className="mt-4 space-y-2 text-black">
              <li>All Products</li>
              <li>All Categories</li>
              <li>All Categories</li>
              <li>Cart</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold text-black uppercase tracking-wider">
              Contact
            </h3>
            <ul className="mt-4 space-y-2 text-black">
              <li>Email: support@shopmate.com</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Location: New York, USA</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-sm font-semibold text-black uppercase tracking-wider">
              Follow Us
            </h3>
            <div className="mt-4 flex space-x-4 cursor-pointer">
           
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-instagram"></i>
                <i className="fab fa-linkedin-in"></i>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} ShopMate. All rights reserved.
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
