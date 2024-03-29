import React from "react";
import styled from "styled-components";
import { Icon, Popconfirm } from "antd";

const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  height: 56px;
  justify-content: space-between;
  background-color: white;
  padding: 16px;
  box-shadow: 0px 0px 3px #adadad;
  z-index: 99;
`;

const ToggleSiderButton = styled.div`
  &:hover {
    color: #1890ff;
  }
`;

const RightIcons = styled.div`
  overflow: hidden;
`;

export default ({ onSiderToggleClick, toggleSiderStatus, username, onLogout }) => (
  <HeaderContainer>
    <ToggleSiderButton onClick={() => onSiderToggleClick()}>
      {toggleSiderStatus ? (
        <Icon type="menu-unfold" size="lg" style={{ marginRight: 16 }} />
      ) : (
        <Icon type="menu-fold" size="lg" style={{ marginRight: 16 }} />
      )}
    </ToggleSiderButton>
    <b>EDU MALAYSIA</b>
    <RightIcons>
      <Icon type="user" size="lg" style={{ padding: "8px 4px 8px 8px" }} />
      <span style={{ padding: "8px 8px 8px 0px" }}>{username}</span>
      <Icon type="bell" size="lg" style={{ padding: 8 }} />
      <Popconfirm
        title="Logout ?"
        onConfirm={onLogout}
        okText="Ya"
        cancelText="Tidak"
        placement="bottomRight"
      >
        <Icon type="logout" size="lg" style={{ padding: 8 }} />
      </Popconfirm>
    </RightIcons>
  </HeaderContainer>
);
