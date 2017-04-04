
import React from "react";
import Teaser from "../layout/Teaser";
import examples from "../articles/examples.html";

export default class ExamplesPage extends React.Component {

  componentDidMount () {
    var clickable = document.getElementsByClassName("tabBox__title");
    for(var i = 0; i < clickable.length; i++) {
      clickable[i].onclick = function() {
        for(var i = 0; i < clickable.length; i++) {
          clickable[i].classList.remove("is-active");
        }
        this.classList.add("is-active");
      }
    }
  }

  render() {

      return (
        <main class="site__main">
          <div class="container">
            <h1>Flexbox Examples</h1>

            <section>
              <article className="article" dangerouslySetInnerHTML={{__html: examples}}>
              </article>
            </section>
          </div>
          <Teaser/>
        </main>
      )
  }
}
