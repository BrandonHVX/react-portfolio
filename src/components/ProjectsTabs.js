import React, { useState } from "react"

import {Tab, Container, Nav, NavItem, NavLink, TabContent, TabPane, Row, Sonnet } from "react-bootstrap"

import WebDev from "./WebDev"
import Videos from "./Videos"
import AboutMe from "./AboutMe"



const nav = {
  borderColor: "#00387d",

  textAlign: "center",
}

export default function MyTabs(props) {
  const [activeTab, setActiveTab] = useState("1")
  return (
    <div>
      <Tab.Container  defaultActiveKey="first">

   
      <Nav variant="pills" >
      <Nav.Item>
          <Nav.Link eventKey="first">Web Development</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="second">Video Production</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="third">Digital Design</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="fourth">Motion Graphics</Nav.Link>
        </Nav.Item>
      </Nav>
    
  
      <Tab.Content>
        <Tab.Pane eventKey="first">
        <WebDev />
        </Tab.Pane>
        <Tab.Pane eventKey="second">
         <Videos />
        </Tab.Pane>
      </Tab.Content>
    

</Tab.Container>
    </div>
  )
}
