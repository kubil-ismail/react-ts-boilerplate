import { PureComponent, ReactNode, Suspense } from "react";

// Use React Router
import Routes from "./router";
import { BrowserRouter as Router } from "react-router-dom";
import { RenderApp, NotFound, RenderError } from "src/helpers/screen";

// Use redux
import { connect } from "react-redux";

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
        {!this.state.hasError ? (
          <Router basename={process.env.PUBLIC_URL}>
            <RenderApp routes={Routes} auth={auth} />
            <NotFound routes={Routes} auth={auth} />
          </Router>
        ) : (
          <RenderError />
        )}
      </Suspense>
    );
  }
}

const mapStateToProps = (state: any) => ({
  auth: state.auth,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(MainApp);
