// See https://github.com/mui-org/material-ui/tree/master/examples/gatsby
import React from "react";
import './installMuiStyles';
import { ThemeProvider } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import getPageContext from "./getPageContext";
import Hidden from "@material-ui/core/Hidden";

function withRoot(Component) {
  class WithRoot extends React.Component {
    constructor(props) {
      super(props);
      this.muiPageContext = getPageContext();
    }

    componentDidMount() {
      // Remove the server-side injected CSS.
      const jssStyles = document.querySelector("#jss-server-side");
      if (jssStyles && jssStyles.parentNode) {
        jssStyles.parentNode.removeChild(jssStyles);
      }
    }

    render() {
      return (
        // ThemeProvider makes the theme available down the React
        // tree thanks to React context.
        <ThemeProvider
          theme={this.muiPageContext.theme}
        >
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Hidden implementation="css">
            <Component {...this.props} />
          </Hidden>
        </ThemeProvider>
      );
    }
  }

  return WithRoot;
}

export default withRoot;
