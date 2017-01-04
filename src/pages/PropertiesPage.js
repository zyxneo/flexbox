
require("../script/prettify.js");

import React from "react";
import Teaser from "../layout/Teaser";
import properties from "../articles/properties.html";

export default class PropertiesPage extends React.Component {

  componentDidMount() {
    prettyPrint()
  }

  render() {

      return (
        <main class="site__main">
          <div class="site__container">
            <h1>Flexbox CSS properties</h1>

            <section>
              <article className="article" dangerouslySetInnerHTML={{__html: properties}}>
              </article>
            </section>
          </div>
          <Teaser/>
        </main>
      )
  }
}
