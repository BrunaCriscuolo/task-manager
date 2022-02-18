import { Route as RouteRouter, RouteProps as RProps } from 'react-router-dom';
interface RouteProps extends RProps {
  path: string;
  element: React.ReactElement;
}

export const Route = ({ path, element, ...rest }: RouteProps) => (
  <RouteRouter path={path} {...rest} element={element} />
);
