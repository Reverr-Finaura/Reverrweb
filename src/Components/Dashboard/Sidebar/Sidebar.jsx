import "./sidebar.css";
import {
  FaCalendarAlt,
  FaRegEnvelope,
  FaBorderAll,
  FaRegUser,
  FaCog,
} from "react-icons/fa";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <ul className="sidebarList">
            <li className="sidebarListItem ">
              <FaCalendarAlt className="sidebarIcon" />
              Calender
            </li>

            <li className="sidebarListItem">
              <FaBorderAll className="sidebarIcon" />
              Dashboard
            </li>
            <li className="sidebarListItem">
              <FaRegEnvelope className="sidebarIcon" />
              Messages
            </li>
            <li className="sidebarListItem">
              <FaCog className="sidebarIcon" />
              Settings
            </li>
            <li className="sidebarListItem">
              <FaRegUser className="sidebarIcon" />
              Profile
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
