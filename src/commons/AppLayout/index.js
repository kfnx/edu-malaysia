import React from "react";
import styled from "styled-components";
// import { StoreProvider, createStore } from "easy-peasy";
import { Breadcrumb, Icon } from "antd";
import Sider from "./Sider";
import Header from "./Header";

const WindowLayout = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  background-color: white;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const Container = styled.div`
  padding: 24px;
  background-color: #eff1f4;
  overflow: scroll;
  height: 100%;
`;

function getMenuName(path) {
  switch (path) {
    case "/":
      return "Dashboard";
    case "/teacher":
      return "Guru";
    case "/clc":
      return "CLC";
    case "/assembly":
      return "Pemasangan";
    default:
      return "Dashboard";
  }
}

const AppLayout = props => {
  const { layout, children, initialPath } = props;
  const initialToggleStatus = layout === "mobile-web" ? true : false;
  // TODO: fix this ugly path
  const initialMenu = getMenuName(initialPath);

  const [activeMenu, setActiveMenu] = React.useState(initialMenu);
  const [toggleSiderStatus, setToggleSiderStatus] = React.useState(initialToggleStatus);

  const handleSiderToggle = () => {
    // const toggleValue = toggleSiderStatus ? 0 : 1; // convert to binary
    setToggleSiderStatus(!toggleSiderStatus);
  };

  // React.useEffect(() => {
  //   console.log("AppLayout useEffect render!");

  //   return () => {
  //     console.log("AppLayout useEffect cleanup!");
  //   };
  // });

  return (
    <WindowLayout>
      <Sider
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
        toggleSiderStatus={toggleSiderStatus}
      />
      <Content>
        <Header
          onSiderToggleClick={handleSiderToggle}
          toggleSiderStatus={toggleSiderStatus}
        />
        <Container>
          <Breadcrumb style={{ marginBottom: 16 }}>
            <Breadcrumb.Item>
              <Icon type="home" />
            </Breadcrumb.Item>
            <Breadcrumb.Item>{activeMenu}</Breadcrumb.Item>
            <Breadcrumb.Item>Data</Breadcrumb.Item>
          </Breadcrumb>
          {children}
          <br />
          <span style={{ float: "right" }}>Edu Malaysia - 2019</span>
        </Container>
      </Content>
    </WindowLayout>
  );
};

export default AppLayout;
