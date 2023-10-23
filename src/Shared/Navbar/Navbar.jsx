// ICONS
import { HiOutlineBars3 } from "react-icons/hi2";
import { AiOutlineSearch } from "react-icons/ai";
import { HiOutlineShoppingBag } from "react-icons/hi";

const Navbar = () => {
  return (
    <div>
      <div className=" py-6 px-10 flex items-center justify-between ">
        {/* Menu and Search */}
        <div className="flex items-center gap-6">
          {/* menu */}
          <div className="flex items-center gap-3">
            <div>
              <HiOutlineBars3 size={"25px"}></HiOutlineBars3>
            </div>
            <div>
              <p className="text-[13px]">Menu</p>
            </div>
          </div>

          {/* search */}
          <div className="flex items-center gap-3">
            <div>
              <AiOutlineSearch size={"25px"}></AiOutlineSearch>
            </div>
            <div>
              <p className="text-[13px]">Search</p>
            </div>
          </div>
        </div>

        {/* Louis vuitton */}
        <div>
          <h2 className="font-bold text-3xl right-10">LOUIS VUITTON</h2>
        </div>

        {/* Call, wishlist , mylv */}

        {/* call */}
        <div className="flex items-center gap-8">
          <div>
            <p className="text-[13px]">Call us</p>
          </div>
          <div>
            <p className="text-[13px]">Wishlist</p>
          </div>
          <div>
            <p className="text-[13px]">MyLV</p>
          </div>
          <div>
            <HiOutlineShoppingBag size={"20px"}></HiOutlineShoppingBag>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
