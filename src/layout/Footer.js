require("./footer.scss");

import React from "react";

export default class Footer extends React.Component {
  render() {
    return (
      <footer class="site__footer">
        <div class="container">
          <div class="row">

            <ul class="list-unstyled list-inline col-md-6 row">
              <li class="col-sm-4">
                <a class="github-button" href="https://github.com/zyxneo" data-count-href="/zyxneo/followers" data-count-api="/users/zyxneo#followers" data-count-aria-label="# followers on GitHub" aria-label="Follow @zyxneo on GitHub">Follow @zyxneo</a>
              </li>
              <li class="col-sm-4">
                <a class="github-button" href="https://github.com/zyxneo/flexbox/subscription" data-icon="octicon-eye" data-count-href="/zyxneo/flexbox/watchers" data-count-api="/repos/zyxneo/flexbox#subscribers_count" data-count-aria-label="# watchers on GitHub" aria-label="Watch zyxneo/flexbox on GitHub">Watch</a>
              </li>
              <li class="col-sm-4">
                <a class="github-button" href="https://github.com/zyxneo/flexbox" data-icon="octicon-star" data-count-href="/zyxneo/flexbox/stargazers" data-count-api="/repos/zyxneo/flexbox#stargazers_count" data-count-aria-label="# stargazers on GitHub" aria-label="Star zyxneo/flexbox on GitHub">Star</a>
              </li>
            </ul>

            <div class="col-md-6 text-md-right">
              <p>It is a demonstrational page of CSS flexbox
              <br/>
              Hosted on <a href="https://pages.github.com/">GitHub Pages</a></p>
            </div>
          </div>

        </div>
      </footer>
    )
  }
}
