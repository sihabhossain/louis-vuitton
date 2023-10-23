const Footer = () => {
  return (
    <div>
      {/* Footer details */}
      <div className="border-t border-solid border-gray-300 border-b">
        <div className="grid md:grid-cols-4 grid-cols-1 md:mx-20 mx-5 text-[11px] gap-10 text-gray-500 py-10 ">
          {/* Help */}
          <div className="space-y-5">
            <h2 className="text-[10px] font-semibold">HELP</h2>
            <p>
              Our Client Advisors are available to assist you by phone at
              +1.866.VUITTON . You can also chat or email us.
            </p>
            <p>FAQs</p>
            <p>Product Care</p>
            <p>Stores</p>
          </div>

          {/* Services */}
          <div className="space-y-5">
            <h2 className="text-[10px] font-semibold">SERVICES</h2>
            <p>Repairs</p>
            <p>Personalization</p>
            <p>Art of Gifting</p>
            <p>Download our Apps</p>
          </div>

          {/* About */}
          <div className="space-y-5">
            <h2 className="text-[10px] font-semibold">ABOUT LOUIS VUITTON</h2>
            <p>Fashion Shows</p>
            <p>Arts & Culture</p>
            <p>La Maison</p>
            <p>Sustainability</p>
            <p>Latest News</p>
            <p>Careers</p>
            <p>Foundation Louis Vuitton</p>
          </div>

          {/* Email signup */}
          <div className="space-y-5">
            <h2 className="text-[10px] font-semibold">EMAIL SIGN-UP</h2>
            <p>
              Sign up for Louis Vuitton emails and receive the latest news from
              the Maison, including exclusive online pre-launches and new
              collections.
            </p>
            <p>Follow Us</p>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-[11px] text-gray-500 md:flex justify-between py-10 md:mx-20 mx-5 space-y-5 md:space-y-0">
        <div>Ship to: United States</div>
        <div>
          <ul className="md:flex gap-5 ">
            <li>Sitemap</li>
            <li>Legal Notices</li>
            <li>Privacy Policy</li>
            <li>California Supply Chains Act</li>
            <li>Do Not Sell or Share My Personal Information</li>
            <li>Accessibility</li>
          </ul>
        </div>
      </div>

      {/* Logo */}
      <div>
        <p className="font-bold text-2xl text-center pb-10">LOUIS VUITTON</p>
      </div>
    </div>
  );
};

export default Footer;
