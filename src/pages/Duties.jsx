import { Box, Typography } from "@mui/material";
import Nav from "../components/Nav";

export default function Duties () {
   return (
      <Box sx={{ bgcolor: 'background.default', mt: 5}}>
         <Nav/>
         <Typography variant="h2">Чем предстоит заниматься?</Typography>
      </Box>
   )
}
