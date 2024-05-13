import React, {useEffect} from "react";
import Header from "./components/layout/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/layout/Footer";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUp } from "@fortawesome/free-solid-svg-icons";

const LayoutBlock = styled.div`
  .go__to__top {
    position: fixed;
    bottom: 30px;
    right: 40px;
    z-index: 99999;
    div {
      font-size: 30px;
      cursor: pointer;
      color: #669933;
    }
  }
`;

const Layout = () => {
  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <LayoutBlock>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <div className="go__to__top">
        <div onClick={goToTop}>
          <FontAwesomeIcon icon={faCircleUp} />
        </div>
      </div>
    </LayoutBlock>
  );
};

export default Layout;
