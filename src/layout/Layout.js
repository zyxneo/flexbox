require("./layout.scss");

import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default class Layout extends React.Component {
  render() {
    return (
      <div class="site">
        <Header/>
        <main class="site__main">
          {this.props.children}
        </main>
        <Footer />
      </div>
    )
  }
}
