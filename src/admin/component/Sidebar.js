import React from "react";
import { Sidebar, SidebarItem } from "react-rainbow-components";
import dashboard from "../assets/dashboard.svg";
import Header from '../../core/component/Header'
import "../styles/styles.css";

const sidebarContainerStyles = {
  width: "88px",
  borderBottomLeftRadius: "0.875rem"
};

class SimpleSidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: "GettingStarted"
    };
    this.handleOnSelect = this.handleOnSelect.bind(this);
  }

  handleOnSelect(e, selectedItem) {
    return this.setState({ selectedItem });
  }

  render() {
    const { selectedItem } = this.state;

    return (
      <div className="">
          <Header />
        <div className="sidenav">
          <Sidebar
            selectedItem={selectedItem}
            onSelect={this.handleOnSelect}
            id="sidebar-1"
          >
            <SidebarItem
              icon={<img src={dashboard} />}
              name="Dashboard"
              label="Dashboard"
            />
            <SidebarItem
              //   icon={<img src={application} />}
              name="Users"
              label="Users"
            />
            <SidebarItem
              //   icon={<img src={puzzle} />}
              name="Courses"
              label="Courses"
            />
            <SidebarItem
              //   icon={<img src={References} />}
              name="References"
              label="References"
            />
            <SidebarItem
              //   icon={<img src={References} />}
              name="Settings"
              label="Settings"
            />
            <SidebarItem name="Charts" label="Charts" />
          </Sidebar>
        </div>
        <div className="main">Main</div>
      </div>
    );
  }
}
export default SimpleSidebar;
