import * as React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Link from "@mui/material/Link";

import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" color="default">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Desktop Heading */}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            MakeCode Iceberg
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="default"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {/* ABOUT PAGE*/}
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography
                  textAlign="center"
                  onClick={() => navigate("/iceberg")}
                >
                  About
                </Typography>
              </MenuItem>

              {/* CODE & DESIGN PAGE */}
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography
                  textAlign="center"
                  onClick={() => navigate("/code")}
                >
                  Code
                </Typography>
              </MenuItem>

              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  <Link
                    href="http://kamoamoa.eecs.northwestern.edu/"
                    color="inherit"
                    target="_blank"
                    underline="none"
                  >
                    Ka Moamoa
                  </Link>
                </Typography>
              </MenuItem>
            </Menu>
          </Box>

          {/* Expanded Desktop Navbar */}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            MakeCode Iceberg
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              onClick={() => {
                handleCloseNavMenu();
                navigate("/iceberg");
              }}
              sx={{ my: 2, color: "black", display: "block" }}
            >
              About
            </Button>
            <Button
              onClick={() => {
                handleCloseNavMenu();
                navigate("/code");
              }}
              sx={{ my: 2, color: "black", display: "block" }}
            >
              Getting Started
            </Button>
            <Button
              onClick={() => {
                handleCloseNavMenu();
              }}
              sx={{ my: 2, color: "black", display: "block" }}
            >
              <a
                href="https://github.com/ka-moamoa/makecode-ic"
                target="_blank"
                style={{ textDecoration: "none", color: "black" }}
                rel="noreferrer"
              >
                Ka Moamoa
              </a>
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
