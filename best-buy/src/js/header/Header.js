import React from "react";
import styled from "styled-components";
import linksList from "./HeaderListItem";
import { List } from "./../GlobalElements";

const StyledHeader = styled.header`
  height: 70px;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  display: flex;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  opacity: 1;
  align-items: center;
  justify-content: space-around;
  z-index: 1;
`;

const MainHeader = styled.header`
  text-align: left;
  font-weight: 300;
  font-size: 2rem;
  letter-spacing: 0;
  color: #08a6e4;
`;

const ListItem = styled.li`
  font-family: sans-serif;
  margin-left: 95px;
  text-align: center;
  font-size: 0.93rem;
  letter-spacing: 3.28px;
  height: 70px;
  opacity: 1;
  padding: 28px 0;
  &:hover {
    border-bottom: 4px solid var(--main-color);
  }
`;

const HeaderLink = styled.a`
  text-decoration: none;
  color: #a5a5a5;
  
  }
`;

export default class Header extends React.Component {
  createListItems = (file) => {
    return file.list.map((listItem) => (
      <ListItem key={listItem.text}>
        <HeaderLink href={listItem.href}>{listItem.text}</HeaderLink>
      </ListItem>
    ));
  };

  render() {
    return (
      <StyledHeader className="container">
        <MainHeader>BestShop</MainHeader>
        <List>{this.createListItems(linksList)}</List>
      </StyledHeader>
    );
  }
}
