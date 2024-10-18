import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Menu.css';
import logo from "./../../Images/IDI-removebg-preview.png";
import base_api_url from './../components/config';

const DropdownMenu = () => {
  const [menuList, setMenuList] = useState([]);
  const [dropdownStates, setDropdownStates] = useState({});

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const response = await axios.post(`${base_api_url}/lfcmenu?user_id=1`);
      const menuData = response.data.response.data;
      setMenuList(menuData);

      const initialState = {};
      menuData.forEach(item => {
        if (item.parent_id === null) {
          initialState[item.Menu_ID] = false;
        }
      });
      setDropdownStates(initialState);
    } catch (error) {
      console.error('Error fetching menu:', error);
    }
  };

  const toggleDropdown = (menuId) => {
    setDropdownStates(prevStates => {
      const updatedStates = { ...prevStates };
      updatedStates[menuId] = !updatedStates[menuId];
      return updatedStates;
    });
  };

  const parentMenus = menuList.filter((item) => item.parent_id === null);
  const childMenus = menuList.filter((item) => item.parent_id !== null);

  return (
    <div>
      <button id="toggleButton">Col</button>
      <Link to="/Home">
        <img className="logo" src={logo} alt="logo" />
      </Link>
      <div className="menu-container">
        {parentMenus.map((parentMenu) => (
          <div key={parentMenu.Menu_ID}>
            <button
              className="menu-button"
              onClick={() => toggleDropdown(parentMenu.Menu_ID)}
            >
              {parentMenu.MenuName}
            </button>
            {dropdownStates[parentMenu.Menu_ID] && (
              <div className="child-buttons">
                {childMenus
                  .filter((child) => child.parent_id === parentMenu.Menu_ID)
                  .map((childMenu) => (
                    <Link
                      to={childMenu.URL}
                      className="custom-link"
                    >
                      <button
                        key={childMenu.Menu_ID}
                        className="menu-button"
                      >
                        {childMenu.MenuName}
                      </button>
                    </Link>
                  ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DropdownMenu;
