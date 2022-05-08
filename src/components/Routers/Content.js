import React from "react";
import classNames from "classnames";
import { Container } from "reactstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Applications from "../Pages/Applications";
import Authenticationproviders from "../Pages/Authenticationprovider";

import Dashboard from "../Pages/Dashboard";
import Shopify from "../Pages/Shopifystore";
import Providers from "../Pages/Providers";
import ApplicationAddnew from "../Pages/ApplicationAddnew";
import ShopifyStoresAddnew from "../Pages/ShopiftStoresAddnew";
import ProvidersAddnew from "../Pages/ProvidersAddnew";
import AuthenticationAddnew from "../Pages/AuthenticationAddnew";

import ViewShopify from "../Pages/ViewShopify";
import ViewAuthentication from "../Pages/ViewAuthentication";
import ViewApplication from "../Pages/ViewApplication";
import ViewProviders from "../Pages/ViewProviders";
import EditProvider from "../Pages/EditProvider";
const Content = ({ sidebarIsOpen, toggleSidebar }) => (
  <Container
    fluid
    className={classNames("content", { "is-open": sidebarIsOpen })}
  >
    {/* <Topbar toggleSidebar={toggleSidebar} /> */}

    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route exact path="/applications" element={<Applications />} />
      <Route exact path="/applications/viewall" element={<Applications />} />
      <Route exact path="/applications/add" element={<ApplicationAddnew />} />

      <Route
        exact
        path="/applications/viewapplications"
        element={<ViewApplication />}
      />

      <Route exact path="/shopify" element={<Shopify />} />
      <Route exact path="/shopify/viewall" element={<Shopify />} />
      <Route exact path="/shopify/add" element={<ShopifyStoresAddnew />} />

      <Route exact path="/shopify/viewshopify" element={<ViewShopify />} />
      <Route
        exact
        path="/authenticationproviders"
        element={<Authenticationproviders />}
      />
      <Route
        exact
        path="/authenticationproviders/viewall"
        element={<Authenticationproviders />}
      />
      <Route
        exact
        path="/authenticationproviders/add"
        element={<AuthenticationAddnew />}
      />
      <Route
        exact
        path="/authenticationproviders/viewauthentication"
        element={<ViewAuthentication />}
      />
      <Route exact path="/providers" element={<Providers />} />
      <Route exact path="/providers/viewall" element={<Providers />} />
      <Route exact path="/providers/add" element={<ProvidersAddnew />} />
      <Route exact path="/providers/edit" element={<EditProvider/>} />
      <Route
        exact
        path="/providers/viewproviders"
        element={<ViewProviders />}
      />
    </Routes>
  </Container>
);

export default Content;
