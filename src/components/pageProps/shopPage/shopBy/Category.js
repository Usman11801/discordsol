import React, { useState, useEffect } from "react";
import { ImPlus } from "react-icons/im";
import NavTitle from "./NavTitle";
import { useDispatch, useSelector } from "react-redux";
import { toggleCategory } from "../../../../redux/orebiSlice";
import { useLocation } from "react-router-dom"; // Import useLocation

const Category = () => {
  const [showSubCatOne, setShowSubCatOne] = useState(false);
  const checkedCategorys = useSelector((state) => state.orebiReducer.checkedCategorys);
  const dispatch = useDispatch();
  const location = useLocation(); // Get the current location

  const category = [
    {
      _id: 9007,
      title: "Encre",
      name: "Mobile Application",
    },
    {
      _id: 9008,
      title: "Ruban",
      name: "Web Application",
    },
  ];

  // Extract query params from the URL
  const queryParams = new URLSearchParams(location.search);
  const selectedCategory = queryParams.get("category");

  // Automatically check the box if the category is in query params
  useEffect(() => {
    if (selectedCategory) {
      const matchedCategory = category.find((item) => item.name === selectedCategory);
      if (matchedCategory && !checkedCategorys.some((cat) => cat._id === matchedCategory._id)) {
        dispatch(toggleCategory(matchedCategory)); // Toggle the category if it's in the query params
      }
    }
  }, [selectedCategory, category, checkedCategorys, dispatch]);

  const handleToggleCategory = (category) => {
    dispatch(toggleCategory(category));
  };

  return (
    <div className="w-full">
      <NavTitle title="Software Services" icons={true} />
      <div>
        <ul className="flex flex-col gap-4 text-sm lg:text-base text-[#767676]">
          {category.map((item) => (
            <li
              key={item._id}
              className="border-b-[1px] border-b-[#F0F0F0] pb-2 flex items-center gap-2 hover:text-primeColor hover:border-gray-400 duration-300"
            >
              <input
                type="checkbox"
                id={item._id}
                checked={checkedCategorys.some((b) => b._id === item._id)}
                onChange={() => handleToggleCategory(item)}
              />
              {item?.name}
              {item.icons && (
                <span
                  onClick={() => setShowSubCatOne(!showSubCatOne)}
                  className="text-[10px] lg:text-xs cursor-pointer text-gray-400 hover:text-primeColor duration-300"
                >
                  <ImPlus />
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Category;
