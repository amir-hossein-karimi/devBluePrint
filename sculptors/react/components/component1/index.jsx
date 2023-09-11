import { Button } from "@mui/material";

import useStyles from "./useStyles";

const ComponentName = ({ children, logEntry }) => {
  const classes = useStyles();

  console.log(logEntry);

  return <Button className={classes.container}>{children}</Button>;
};

export default ComponentName;
