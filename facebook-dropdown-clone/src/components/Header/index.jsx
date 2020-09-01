import React, { useState } from "react";
import { DropdownMenu } from "../MultiLevelDropdownMenu";
import { BellIcon, CaretIcon, MessengerIcon, PlusIcon } from "../Icons";
import "./index.css";

function Navbar(props) {
  return (
    <nav className="navbar">
      <h1 className="navbar-title">Multilevel dropdown menu demo</h1>
      <ul className="navbar-nav">{props.children}</ul>
    </nav>
  );
}

function NavItem(props) {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </a>

      {open && props.children}
    </li>
  );
}

export default function Header() {
  return (
    <Navbar>
      <NavItem icon={<PlusIcon />} />
      <NavItem icon={<BellIcon />} />
      <NavItem icon={<MessengerIcon />} />
      <NavItem icon={<CaretIcon />}>
        <DropdownMenu />
      </NavItem>
    </Navbar>
  );
}
