import { Button } from "@mui/material";

const Component = ({ children, customProps }) => {
  return <Button {...customProps}>{children}</Button>;
};

export default Component;
