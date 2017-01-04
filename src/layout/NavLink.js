import React from "react"
import { Link } from "react-router"

export default React.createClass({
  contextTypes: {
    router: React.PropTypes.object
  },
  render() {
    let isActive = this.context.router.isActive(this.props.to, true),
            className = isActive ? "nav__item is-active" : "nav__item";

    return (
      <li className={className}>
        <Link {...this.props} className="nav__link">
          {this.props.children}
        </Link>
      </li>
    )
  }
})
