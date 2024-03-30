import React from "react";
import { IoIosArrowDown } from "react-icons/io";
function SideBar({ accordion, toggleAccordion }) {
  return (
    <aside className="sidebar__style">
      <div className="sidebar__list">
        {
          accordion.map(item =>{
            return(
              <ul key={item.key}>
              <li>
                  <button
                    type="button"
                    className="flex items-center w-full py-2 text-normal text-Nunito font-bold text-[#A8A9A9] transition duration-75" > 
                    <span className="flex-1 text-left rtl:text-right whitespace-nowrap">
                      {item.title}
                    </span>
                    <IoIosArrowDown />
                  </button>
                  <ul className="submenu">
                    {
                      item.subMenu.map(sub => {
                        return(
                          <li key={sub.id} className="flex items-center">
                          <input type="checkbox" className="checkBox" checked={sub.checked}/>
                          <p
                            className="flex items-center w-full text-sm text-Nunito font-normal p-2 text-[#5C5D60] transition duration-75"
                          >
                           {sub.title}
                          </p>
                        </li>
                        )
                      })
                    }
                          
                  </ul>
              </li>
              </ul>
            )
          })
        }
      </div>
    </aside>
  );
}

export default SideBar;
