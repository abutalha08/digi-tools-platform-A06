import React from 'react';

const Tabs = ({ setActiveTab}) => {
    return (
        <div>
            {/* name of each tab group should be unique */}
<div className="tabs tabs-box  justify-center bg-transparent">
  <input type="radio" name="my_tabs_1" className="tab rounded-full w-40 " aria-label="Products" onClick={() => setActiveTab("product")} defaultChecked />
  <input type="radio" name="my_tabs_1" className="tab rounded-full w-40 " aria-label="Cart" onClick={() => setActiveTab("cart")}  />
 
</div>
        </div>
    );
};

export default Tabs;