import { Avatar, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export interface IPOEntryInterface {
  id: number;
  img: string;
  name: string;
  date: string;
}

const IPOEntry: React.FC<IPOEntryInterface> = ({ id, img, name, date }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Advantage MUI: Avatar replaces Image with styled enhancements */}
      <Avatar src={img} />

      <Box sx={{ marginLeft: "20px" }}>
        {/* Linkable title styled with Typography, routed using React Router */}
        <Typography variant="h6" component="p">
          <Link
            to={`/${id}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            {name}
          </Link>
        </Typography>
        <Typography>{date}</Typography>
      </Box>
    </Box>
  );
};

export default IPOEntry;
