import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import NavTitle from "./NavTitle";
import { useDispatch, useSelector } from "react-redux";
import { toggleBrand } from "../../../../redux/orebiSlice";
import { useLocation } from "react-router-dom"; // Import useLocation

const Brand = () => {
  const [showBrands, setShowBrands] = useState(true);
  const checkedBrands = useSelector((state) => state.orebiReducer.checkedBrands);
  const dispatch = useDispatch();
  const location = useLocation(); // Get the current location to access query params

  const brands = [
    {
      _id: 900,
      title: "Pantum",
      name: "Social Media Management",
    },
    {
      _id: 901,
      title: "Hp",
      name: "Search Engine Optimization (SEO)",
    },
    {
      _id: 902,
      title: "Epson",
      name: "Email Marketing",
    },
    {
      _id: 903,
      title: "Ricoh",
      name: "Pay-Per-Click (PPC) Advertising Management",
    },
    // {
    //   _id: 904,
    //   title: "Usb",
    //   name: "Usb",
    // },
  ];

  // Extract query params from the URL
  const queryParams = new URLSearchParams(location.search);
  const selectedBrand = queryParams.get("category");

  // Automatically check the checkbox if the category is in query params
  useEffect(() => {
    if (selectedBrand) {
      const matchedBrand = brands.find((item) => item.name === selectedBrand);
      if (matchedBrand && !checkedBrands.some((b) => b._id === matchedBrand._id)) {
        dispatch(toggleBrand(matchedBrand)); // Toggle the brand if it's in the query params
      }
    }
  }, [selectedBrand, brands, checkedBrands, dispatch]);

  const handleToggleBrand = (brand) => {
    dispatch(toggleBrand(brand));
  };

  return (
    <div>
      <div onClick={() => setShowBrands(!showBrands)} className="cursor-pointer">
        <NavTitle title="Filter products" icons={true} />
      </div>
      {showBrands && (
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <ul className="flex flex-col gap-4 text-sm lg:text-base text-[#767676]">
            {brands.map((item) => (
              <li
                key={item._id}
                className="border-b-[1px] border-b-[#F0F0F0] pb-2 flex items-center gap-2 hover:text-primeColor hover:border-gray-400 duration-300"
              >
                <input
                  type="checkbox"
                  id={item._id}
                  checked={checkedBrands.some((b) => b._id === item._id)}
                  onChange={() => handleToggleBrand(item)}
                />
                {item?.name}
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </div>
  );
};

export default Brand;
