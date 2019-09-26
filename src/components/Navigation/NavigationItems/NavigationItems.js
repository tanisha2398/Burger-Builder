import React, { Component } from "react";
import classes from "./NavigationItems.css";
import NavigationItem from "./NavigationItem/NavigationItem";
import { connect } from "react-redux";
class navigationItems extends Component {
  render() {
    return (
      <ul className={classes.NavigationItems}>
        <NavigationItem link="/" exact>
          Burger Builder
        </NavigationItem>
        {this.props.isAuthenticated ? (
          <NavigationItem link="/orders">Orders</NavigationItem>
        ) : null}
        {!this.props.isAuthenticated ? (
          <NavigationItem link="/auth">Authenticate</NavigationItem>
        ) : (
          <NavigationItem link="/logout">Logout</NavigationItem>
        )}
      </ul>
    );
  }
}
const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  };
};
export default connect(mapStateToProps)(navigationItems);
