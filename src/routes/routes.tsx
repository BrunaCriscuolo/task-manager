import React from 'react';
import {
  Route as ReactDomRoute,
  RouteProps as ReactDomRouteProps,
} from 'react-router-dom';

interface RouteProps extends ReactDomRouteProps {
  element: React.ComponentType;
}

const Route = ({ element: Component, ...rest }: RouteProps) => {
  return (
    <ReactDomRoute
      {...rest}
      element={(props: any) => <Component {...props} />}
    />
  );
};

export default Route;
