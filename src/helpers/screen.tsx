import { lazy } from "react";
import { Route, useHistory, Redirect } from "react-router-dom";
const ErrorPage = lazy(() => import("src/containers/ErrorPage"));

// Interface for RenderApp
interface RenderAppProps {
  routes: any;
  auth: any;
}

// Interface for render public & protected
interface RenderProps {
  components: any;
  url: string;
  isExact: boolean;
  isProtect: boolean;
  isPublic: boolean;
  auth: any;
}

// Wrapping for public components
const RenderPublic = (props: RenderProps) => {
  const { components, isPublic, url, isExact, auth } = props;
  return (
    <>
      {!auth.isLogin && isPublic ? (
        <Route path={url} exact={isExact} component={components} />
      ) : (
        <></>
      )}
    </>
  );
};

// Wrapping for protected components
const RenderProtect = (props: RenderProps) => {
  const { components, isProtect, url, isExact, auth } = props;
  return (
    <>
      {auth.isLogin && isProtect ? (
        <Route path={url} exact={isExact} component={components} />
      ) : (
        <></>
      )}
    </>
  );
};

// Main Wrapping
export const RenderApp = (props: RenderAppProps) => {
  const { routes, auth } = props;
  return (
    <>
      {/* Render by config from routes */}
      {routes.map((val: any, key: number) => {
        // Decision
        return auth.isLogin ? (
          <RenderProtect key={key} auth={auth} {...val} />
        ) : (
          <RenderPublic key={key} auth={auth} {...val} />
        );
      })}
    </>
  );
};

// Handle page not found
export const NotFound = ({ routes, auth }) => {
  let history = useHistory();
  let pathname = history.location.pathname;
  let pages = routes.filter((res: any) =>
    res.isProtect && auth.isLogin && !res.isSystem
      ? res
      : res.isPublic && !auth.isLogin && !res.isSystem
      ? res
      : null
  );
  let check = pages.filter((res: any) => res.url === pathname);
  return check.length === 0 ? <Redirect to="/page-not-found" /> : <></>;
};

// Handle page error
export const RenderError = () => {
  return <ErrorPage />;
};
