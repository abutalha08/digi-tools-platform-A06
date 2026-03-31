import React from "react";

const Tabs = ({ activeTab, setActiveTab, carts }) => {
  return (
    <div>
      {/* name of each tab group should be unique */}
      <div className="tabs tabs-box  justify-center bg-transparent">
        <input
          type="radio"
          name="my_tabs_1"
          className={`tab rounded-full w-40 font-bold
                        ${activeTab === "product" ? "tab-active bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white" : ""}`}
          aria-label="Products"
          onClick={() => setActiveTab("product")}
          defaultChecked
        />

        <input
          type="radio"
          name="my_tabs_1"
          className={`tab rounded-full w-40 font-bold
                        ${activeTab === "cart" ? "tab-active bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white" : ""}`}
          aria-label={`Cart (${carts.length})`}
          onClick={() => setActiveTab("cart")}
        />
      </div>
    </div>
  );
};

export default Tabs;
