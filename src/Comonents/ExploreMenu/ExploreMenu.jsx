import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";
function ExploreMenu({category,setCategory}) {
  return (
    <>
      <div className="explore-menu" id="explore-menu">
        <h1>Explore Our Menu</h1>
        <p className="Explore-menu-text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum
          accusantium repudiandae porro dolore quibusdam modi animi velit illo
          recusandae cumque!
        </p>
        <div className="explore-menu-list">
          {menu_list.map((item, index, array) => {
            return (
              <div onClick={()=>{
                setCategory(prev=>prev===item.menu_name?"All":item.menu_name)
              }}  key={index} className="explore-menu-list-item">
                <img src={item.menu_image} alt="" className={category===item.menu_name?"active":""}/>
                <p>{item.menu_name}</p>
              </div>
            );
          })}
        </div>
        <hr />
      </div>
    </>
  );
}

export default ExploreMenu;
