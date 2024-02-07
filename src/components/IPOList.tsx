import { useEffect, useState } from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { Common, Headings, IpoType } from "../types/constants";
import IPOEntry from "./IPOEntry";
import itemsList from "../data/ipos.json";

// Displays IPO Table
const IPOList = () => {
  const [items, setItems] = useState<IpoType[]>();

  // On Initial render, stored deep copy of itemList from JSON file
  useEffect(() => {
    setItems(JSON.parse(JSON.stringify(itemsList)));
  }, []);

  return (
    <Box>
      {/* minWidth will adapt this table on small screens, additional columns can be scrolled horizontally */}
      <Table style={{ minWidth: 650 }}>
        <TableHead>
          <TableRow sx={{ backgroundColor: "darkgray" }}>
            <TableCell>{Headings.NameAndDate}</TableCell>
            <TableCell align="right">{Common.IssueSize}</TableCell>
            <TableCell align="right">{Common.PriceRange}</TableCell>
            <TableCell align="right">{Headings.MinInvest}</TableCell>
          </TableRow>
        </TableHead>

        {/* IPO list displayed with columns aligning numbers to the right for improved UI */}
        <TableBody>
          {items?.map((row) => (
            <TableRow
              key={row.name}
              sx={{
                backgroundColor: "white",
              }}
            >
              <TableCell>
                <IPOEntry
                  id={row.id}
                  img={row.logo}
                  name={row.name}
                  date={row.issue_date}
                />
              </TableCell>
              <TableCell align="right">{row.issue_size_min}</TableCell>
              <TableCell align="right">{row.price_range_start}</TableCell>
              <TableCell align="right">{row.min_invest}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};

export default IPOList;
