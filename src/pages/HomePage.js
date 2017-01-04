import React from "react";
import Teaser from "../layout/Teaser";
import homepage from "../articles/homepage.html";

export default class HomePage extends React.Component {
  render() {

      return (
        <main class="site__main">
          <div class="site__container">
            <h1>Flexbox resources</h1>

            <section>
              <article className="article" dangerouslySetInnerHTML={{__html: homepage}}>
              </article>
            </section>

          </div>
        </main>
      )
  }
}
