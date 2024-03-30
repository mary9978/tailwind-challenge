import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import SideBar from "./SideBar";
function AppLayout() {
  const [accordion, setAccordion] = useState([
    {
      key: 1,
      title: "Category",
      subMenu: [
        {
          id: 1,
          title: "Cleanser",
          checked: false,
        },
        {
          id: 2,
          title: "Toner",
          checked: false,
        },
        {
          id: 3,
          title: "Serum",
          checked: false,
        },
        {
          id: 4,
          title: "Moisturize",
          checked: true,
        },
        {
          id: 5,
          title: "Face mask",
          checked: false,
        },
      ],
      isOpen: false,
    },
    {
      key: 2,
      title: "Price",
      subMenu: [
        {
          id: 1,
          title: "Hight to Low",
          checked: true,
        },
        {
          id: 2,
          title: "Low to Hight",
          checked: false,
        },
      ],
      isOpen: false,
    },

    {
      key: 3,
      title: "Location",
      subMenu: [
        {
          id: 1,
          title: "Nearest",
          checked: false,
        },
        {
          id: 2,
          title: "Farthest",
          checked: false,
        },
      ],
      isOpen: false,
    },

    {
      key: 4,
      title: "Rating",
      subMenu: [
        {
          id: 1,
          title: "Highest",
          checked: true,
        },
        {
          id: 2,
          title: "Lowest",
          checked: false,
        },
      ],
      isOpen: false,
    },

    {
      key: 5,
      title: "Shipping",
      subMenu: [
        {
          id: 1,
          title: "Regular",
          checked: false,
        },
        {
          id: 2,
          title: "Next day",
          checked: false,
        },
        {
          id: 3,
          title: "Same day",
          checked: false,
        },
        {
          id: 4,
          title: "Instant",
          checked: true,
        },
      ],
      isOpen: false,
    },
  ]);
  const toggleAccordion = (accordionkey) => {
    const updatedAccordions = accordion.map((accord) => {
      if (accord.key === accordionkey) {
        return { ...accord, isOpen: !accord.isOpen };
      } else {
        return { ...accord, isOpen: false };
      }
    });

    setAccordion(updatedAccordions);
  };
  return (
    // grid-rows-[auto_1fr] grid-cols-[15rem_1fr]
    <div className="grid h-screen ">
      <Header/>
      <SideBar accordion={accordion} toggleAccordion={toggleAccordion} />
      <div className="overflow-y-auto">
        <div className="mx-auto max-w-screen-lg mt-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
