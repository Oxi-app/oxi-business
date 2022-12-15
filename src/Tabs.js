import React, { useState } from "react";
import MaterialsTab from "./materialsTab";
import ManufacturingTab from "./manufacturingTab";
import TabNavItem from "./TabNavItem";
import TabContent from "./TabContent";
import LogisticsTab from "./logisticsTab"

const Tabs = () => {

    const [activeTab, setActiveTab] = useState("tab1");

  return (
    <div className="Tabs">
      {/* Tab nav */}
      <ul className="nav">
        <div className="selectButton">Select a Life Cycle Stage:</div>
      <TabNavItem title="Materials" id="tab1" activeTab={activeTab} setActiveTab={setActiveTab}/>
        <TabNavItem title="Logistics" id="tab2" activeTab={activeTab} setActiveTab={setActiveTab}/>
        <TabNavItem title="Manufacturing" id="tab3" activeTab={activeTab} setActiveTab={setActiveTab}/>
      </ul>
        <div className="outlet">
        <TabContent id="tab1" activeTab={activeTab}>
          <MaterialsTab/>
        </TabContent>
        <TabContent id="tab2" activeTab={activeTab}>
          <LogisticsTab/>
        </TabContent>
        <TabContent id="tab3" activeTab={activeTab}>
        <ManufacturingTab/>
        </TabContent>
        </div>
    </div>
  );
};
export default Tabs;