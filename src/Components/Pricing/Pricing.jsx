import React from "react";
import PriceOption from "../PriceOption/PriceOption";

const Pricing = () => {
  const pricingOption = [
    { id: 1, name: "Free", price: 0, features:  ["One Page Customization", "Content Upload", "One Month Support"] },
    { id: 2, name: "Gold", price: 10, features : ["Three Page Customization", "SEO Optimized", "One Year Support" ] },
    { id: 3, name: "Premium", price: 100, features: [ "Everything on Free and Premium", "' Life Time Support"," Moneyback Guarantee"] },
  ];
  return (
    <div className=" text-center pt-10  text-slate-800  ">
      <h2 className="text-3xl  bg-cyan-300  p-16 ">Best Deal Of the town</h2>
      <div className=" grid grid-cols-3 gap-5    p-3">
        {pricingOption.map((option) => (
          <PriceOption  key={option.id} option={option} />
        ))}
      </div>

    </div>
  );
};

export default Pricing;
