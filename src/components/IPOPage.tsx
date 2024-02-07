import { Link, useParams } from "react-router-dom";
import itemsList from "../data/ipos.json";
import { useEffect, useState } from "react";
import { Common, IpoType } from "../types/constants";
import PageNotFound from "./PageNotFound";
import {
  AppBar,
  Box,
  Button,
  Card,
  CircularProgress,
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";
import Avatar from "@mui/material/Avatar";

const IPOPage = () => {
  const { productId } = useParams();
  const [loading, setLoading] = useState(true);
  const [ipo, setIpo] = useState<IpoType>();
  const productNumber = parseInt(productId ?? "", 10); //Converting string productId from useParams to integer

  //Sets IPO state if product with ID exists
  useEffect(() => {
    const selectedProduct = itemsList.find((item) => item.id === productNumber);
    if (selectedProduct) {
      setIpo(selectedProduct);
      setLoading(false);
    }
  }, [productNumber]);

  return (
    <>
      {loading && <CircularProgress />}
      {ipo ? (
        <Box>
          {/* AppBar resembles NavBar with custom shadow removal via elevation */}
          <AppBar
            position="static"
            color="transparent"
            elevation={0}
            sx={{ backgroundColor: "#ffffff", padding: "0.5rem" }}
          >
            <Toolbar>
              <Link to="/">
                <IconButton
                  edge="start"
                  color="inherit"
                  sx={{ marginRight: ["0px", "20px"] }}
                >
                  <ArrowBackIosIcon />
                </IconButton>
              </Link>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexGrow: "1",
                }}
              >
                <Avatar alt="Ipo Logo" src={ipo.logo} />
                <Box sx={{ marginLeft: ["8px", "16px"] }}>
                  <Typography
                    variant="h6"
                    sx={{ fontSize: ["1rem", "1.25rem"] }}
                  >
                    {ipo.name}
                  </Typography>
                  <Typography sx={{ fontSize: ["0.7rem", "1rem"] }}>
                    {ipo.subname}
                  </Typography>
                </Box>
              </Box>
              <Box>
                {/* Note: The download button is inactive; additionally, the style property overrides the default size as sx did not update it*/}
                <Button
                  color="inherit"
                  startIcon={
                    <DownloadForOfflineIcon style={{ fontSize: "30px" }} />
                  }
                />
              </Box>
            </Toolbar>
          </AppBar>
          {/* Each element is rendered separately due to unique styling as only values we rendered from JSON */}
          <Card
            sx={{
              padding: "1.5rem",
              margin: "2rem 0",
            }}
          >
            <Box
              sx={{
                typography: "subtitle2",
                fontWeight: "bold",
                marginBottom: "10px",
              }}
            >
              {Common.IPODetailTitle}
            </Box>
            <Card
              sx={{
                padding: "1rem",
              }}
              style={{ display: "flex", flexDirection: "row" }}
            >
              <Grid container spacing={12}>
                <Grid item sm={6} md={3}>
                  {Common.IssueSize}
                  <Typography
                    component="p"
                    sx={{
                      fontWeight: "500",
                      fontSize: "14px",
                    }}
                  >
                    ${ipo.issue_size_min} - ${ipo.issue_size_max}
                  </Typography>
                </Grid>
                <Grid item sm={6} md={3}>
                  {Common.PriceRange}
                  <Typography sx={{ fontWeight: "500", fontSize: "14px" }}>
                    ${ipo.price_range_start}-{ipo.price_range_end}
                  </Typography>
                </Grid>
                <Grid item sm={6} md={3}>
                  {Common.MinAmount}
                  <Typography
                    component="p"
                    sx={{ fontWeight: "500", fontSize: "14px" }}
                  >
                    ${ipo.min_invest}
                  </Typography>
                </Grid>
                <Grid item sm={6} md={3}>
                  {Common.LotSize}
                  <Typography sx={{ fontWeight: "500", fontSize: "14px" }}>
                    {ipo.shares_per_qty}
                  </Typography>
                </Grid>
                <Grid item sm={6} md={3}>
                  {Common.IssueDate}
                  <Typography sx={{ fontWeight: "500", fontSize: "14px" }}>
                    {ipo.issue_date}
                  </Typography>
                </Grid>
                <Grid item sm={6} md={3}>
                  {Common.ListedOn}
                  <Typography sx={{ fontWeight: "500", fontSize: "14px" }}>
                    {ipo.listed_on}
                  </Typography>
                </Grid>
                <Grid item sm={6} md={3}>
                  {Common.ListedPrice}
                  <Typography sx={{ fontWeight: "500", fontSize: "14px" }}>
                    ${ipo.price_range_start}
                  </Typography>
                </Grid>
                <Grid item sm={6} md={3}>
                  {Common.ListingGains}
                  <Typography sx={{ fontWeight: "500", fontSize: "14px" }}>
                    ${ipo.gains}
                    <span style={{ color: "orange" }}>
                      ({ipo.gains_percentage}%)
                    </span>
                  </Typography>
                </Grid>
              </Grid>
            </Card>
          </Card>
          <Box
            sx={{
              border: "0.6px solid grey",
              padding: "1rem",
              borderRadius: "10px",
            }}
          >
            <Typography
              component="h6"
              sx={{ fontWeight: "500", marginBottom: "1rem" }}
            >
              {Common.AboutCompany}
            </Typography>
            <Typography>{ipo.about_company}</Typography>
          </Box>
        </Box>
      ) : (
        <PageNotFound />
      )}
    </>
  );
};

export default IPOPage;
