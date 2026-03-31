import React from 'react';

const Tabs = ({ setActiveTab, carts}) => {
    return (
        <div>
            {/* name of each tab group should be unique */}
<div className="tabs tabs-box  justify-center bg-transparent">
  <input type="radio" name="my_tabs_1" className="tab rounded-full w-40 font-bold " aria-label="Products" onClick={() => setActiveTab("product")} defaultChecked />
  <input type="radio" name="my_tabs_1" className="tab rounded-full w-40 font-bold " aria-label= {`Cart (${carts.length})`} onClick={() => setActiveTab("cart")}  />
 
</div>
        </div>
    );
};

export default Tabs;