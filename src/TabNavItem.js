import React from "react";
const TabNavItem = ({ id, title, activeTab, setActiveTab }) => {
 
 const handleClick = () => {
   setActiveTab(id);
 };
 
return (
   <button onClick={handleClick} className={activeTab === id ? "active" : ""}>
     { title }
   </button>
 );
};
export default TabNavItem;
