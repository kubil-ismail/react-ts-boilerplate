import { PureComponent, ReactNode, Suspense } from "react";

// Use React Router
import Routes from "./router";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { RenderApp, NotFound, RenderError } from "src/helpers/screen";

// Use redux
import { connect } from "react-redux";

// Custome material ui theme
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "src/material-theme";

interface Props {
  auth: any;
}
interface State {
  hasError: boolean;
}

class MainApp extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true };
  }

  render(): ReactNode {
    const { auth } = this.props;
    return (
      <Suspense fallback={<p>Loading...</p>}>
        <ThemeProvider theme={theme}>
          {!this.state.hasError ? (
            <Router basename={process.env.PUBLIC_URL}>
              <Switch>
                <RenderApp routes={Routes} auth={auth} />
                <NotFound routes={Routes} auth={auth} />
              </Switch>
            </Router>
          ) : (
            <RenderError />
          )}
        </ThemeProvider>
      </Suspense>
    );
  }
}

const mapStateToProps = (state: any) => ({
  auth: state.auth,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(MainApp);
