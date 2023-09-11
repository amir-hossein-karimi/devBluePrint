import { Box, Typography } from "@mui/material";

const PageName = ({ customPropsName }) => {
  return (
    <Box>
      <header>{{ headerText }}</header>

      <Typography>{customPropsName}</Typography>
    </Box>
  );
};

export default PageName;
