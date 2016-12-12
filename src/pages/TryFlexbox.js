import React from "react";
import Playground from "../components/Playground";

export default class TryFlexbox extends React.Component {
  render() {

      return (
        <main class="site__main">
          <div class="site__container">
            <h1>Try Flexbox</h1>
            <Playground/>
          </div>
        </main>
      )
  }
}
