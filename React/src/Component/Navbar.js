import React, { Component }  from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import SplitButton from 'react-bootstrap/SplitButton';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {
    BrowserRouter, Routes, Route, Link
  } from "react-router-dom";


const Navigation = () => {
  
    return (
    <><>
    </>
        <Navbar bg="primary" expand="lg">
          <Container>
            <Navbar.Brand href="/">YambolHub</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <NavDropdown title="Customers" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/customer/list">
                    Customer
                    </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Product families" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/products/list">Products</NavDropdown.Item>
                  <NavDropdown.Item href="/plans/list">
                    Plans
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/coupon/list">Coupon</NavDropdown.Item>
                  <NavDropdown.Item href="/charges/list">Charges</NavDropdown.Item>
                  <NavDropdown.Item href="/addon/list">Addons</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Subscriptions" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/subscription/list">Subscription</NavDropdown.Item>
                  <NavDropdown.Item href="/orders/list">
                    Orders
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/invoices/list">Inovice</NavDropdown.Item>
                  <NavDropdown.Item href="/CreditNote/list">Credit note</NavDropdown.Item>
                  <NavDropdown.Item href="/billing/list">
                    Billing
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/Charts">Charts</Nav.Link>
                <Nav.Link href="/Logs">Logs</Nav.Link>

                <NavDropdown title="Transaction" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/Transaction/">Transactions</NavDropdown.Item>
                  <NavDropdown.Item href="/Transaction/Taxes">
                    Taxes
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Settings" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/setting/notification/SettingNotificationCreate">Notification settings</NavDropdown.Item>
                  <NavDropdown.Item href="/setting/organization/OrganizationAddressCreate">
                    Organization
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/setting/BillingMQ/BillingMQCreate">Billing MQ</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/settings/integrations/show">
                    Integrations
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>  
          </Container>
        </Navbar>
        </>
      );
    }

export default Navigation;