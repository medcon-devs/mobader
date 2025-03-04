"use client"; // Mark this file as a Client Component

import React, { MouseEvent, useState } from "react";
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
import { usePathname, useRouter } from "next/navigation"; // Use new hooks
import themeColor from "@/app/constant/color";
import { Grid } from "@mui/material";

const pages = [
  { title: "Home", action: "/" },
  {
    title: "Scientific Committee",
    action: "/scientific_committee/",
    items: [],
  },
  { title: "Faculty", action: "/faculty/", items: [] },
  {
    title: "Agenda",
    action: "#",
    items: [
      { id: 1, title: "Conference Agenda", action: "/agenda/", items: [] },
      {
        id: 2,
        title: "Pre-Conference Workshop",
        action: "/pre_confrence/",
        items: [],
      },
    ],
  },
  { title: "CME", action: "/cme/", items: [] },
];

function CustomMenu() {
  const router = useRouter();
  const path = usePathname(); // Use usePathname instead of router.asPath
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      elevation={0}
      position="static"
      sx={{ backgroundColor: themeColor.black.dark }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
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
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page, key) =>
                page.items && page.items?.length > 0 ? (
                  <Grid key={key}>
                    <Button
                      key={page.title}
                      onClick={handleClick}
                      color={
                        path == "/agenda/" || path == "/pre_confrence/"
                          ? "yallowdark"
                          : "black"
                      }
                    >
                      <Typography
                        textAlign="center"
                        marginLeft={
                          path == "/agenda/" || path == "/pre_confrence/"
                            ? 1
                            : 1
                        }
                      >
                        {page.title}
                      </Typography>
                    </Button>
                    <Menu
                      id="basic-menu"
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      MenuListProps={{
                        "aria-labelledby": "basic-button",
                      }}
                    >
                      {page.items.map((item) => {
                        return (
                          <MenuItem
                            key={item.id}
                            onClick={() => {
                              router.push(item.action);
                            }}
                          >
                            {item.title}
                          </MenuItem>
                        );
                      })}
                    </Menu>
                  </Grid>
                ) : (
                  <MenuItem
                    key={page.title}
                    onClick={() => router.push(page.action)}
                  >
                    <Typography
                      textAlign="center"
                      color={
                        path == page.action
                          ? themeColor.yallowdark.main
                          : themeColor.black.main
                      }
                    >
                      {page.title}
                    </Typography>
                  </MenuItem>
                )
              )}
            </Menu>
          </Box>
          {/* Add the rest of the desktop and mobile-specific menus */}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default CustomMenu;
