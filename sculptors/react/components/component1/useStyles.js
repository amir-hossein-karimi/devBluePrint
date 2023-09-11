import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    // type will change
    color: theme.palette.type.main,
  },
}));

export default useStyles;
