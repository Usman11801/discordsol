import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  bestSellerOne,
  bestSellerTwo,
  bestSellerThree,
  bestSellerFour,
} from "../../../assets/images/index";

const BestSellers = () => {
  return (
    <div className="w-full pb-20">
      <Heading heading="Web and Mobile Development" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        <Product
          _id="1011"
          img={bestSellerOne}
          productName="Reactjs"
          price="24.99 - 32.50 /hr"
          color="Frontend development with interactive UI"
          badge={true}
          des="Headphones with excellent mic and quality sound with the care of you ear health and good call experiance"
        />
        <Product
          _id="1012"
          img={bestSellerTwo}
          productName="Nodejs"
          price="29.99 - 35.99 /hr"
          color="Backend development and RESTful APIs"
          badge={false}
          des="Mice are known to have a pointed snout, small rounded ears, a body-length scaly tail, and a high breeding rate. The best known mouse species is the common house mouse"
        />
        <Product
          _id="1013"
          img={bestSellerThree}
          productName="Angular"
          price="26.99 - 32.50 /hr"
          color="	Frontend with comprehensive TypeScript support"
          badge={true}
          des="An input device that allows you to type letters, numbers, and symbols into your computer or other electronic device. It usually has a set of keys arranged in a specific layout, such as QWERTY or DVORAK"
        />
        <Product
          _id="1014"
          img={bestSellerFour}
          productName="Nestjs"
          price="36.99 - 44.99 /hr"
          color="Black"
          badge={false}
          des="A set of connectivity specifications developed in collaboration with industry leaders"
        />
      </div>
    </div>
  );
};

export default BestSellers;
