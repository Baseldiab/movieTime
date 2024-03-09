"use client";

import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import SearchForm from "./SearchForm";
import { IconButton } from "@mui/material";
import { LocalProps } from "../interfaces/local.props.interface";
import HomeIcon from "@mui/icons-material/Home";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import InfoIcon from "@mui/icons-material/Info";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";

const drawerWidth = 240;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
}));

export default function MainNavbar({ params: { locale } }: LocalProps) {
  const t = useTranslations();

  const pathname = usePathname();
  const [openNav, setOpenNav] = React.useState(false);

  // React.useEffect(() => {
  //   window.addEventListener("resize", () => window.innerWidth > 640 && setOpenNav(false));
  // }, []);

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const navList = (
    <ul className="nav__list py-2 flex flex-col  sm:mb-0 sm:mt-0 sm:flex-row sm:items-center gap-4 sm:gap-6">
      <li>
        <Link className={`nav__link ${pathname === `/${locale}` ? "active" : ""}`} href="/">
          {t("pages.home")}
        </Link>
      </li>
      <li>
        <Link
          className={`nav__link ${pathname === `/${locale}/about` ? "active" : ""}`}
          href="/about"
        >
          {t("pages.about")}
        </Link>
      </li>
    </ul>
  );

  return (
    <nav className="text-primary sm:py-4 md:py-6 py-2 sticky top-0 z-50 shadow-md">
      <div className="nav__container myContainer  rounded-none border-0 px-4  lg:px-8  bg-transparent">
        <div className="nav__content grid md:grid-cols-4 grid-cols-2 items-center justify-between">
          <Logo />
          <div className="md:col-span-2 col-span-4 md:order-none order-last">
            <SearchForm
              params={{
                locale: locale,
              }}
            />
          </div>
          <div className="nav__lgScreen flex  justify-end gap-4">
            <div className="mr-4 hidden sm:block">{navList}</div>
            <Toolbar className="sm:!hidden">
              <IconButton
                className="sm:!hidden"
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerOpen}
                sx={{ ...(open && { display: "none" }) }}
              >
                <MenuIcon className={"text-white sm:!hidden"} fontSize="medium" />
              </IconButton>
            </Toolbar>
          </div>
        </div>
      </div>

      <Box sx={{ display: "flex" }}>
        <CssBaseline />

        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              backgroundColor: "#02020fe0",
              borderInlineStart: "1px solid #ffffff78",
              // backdropFilter: "blur(39px)",
            },
            "& .MuiListItemIcon-root": {
              minWidth: "39px",
            },
          }}
          variant="persistent"
          anchor="right"
          open={open}
        >
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronLeftIcon sx={{ color: theme.palette.common.white }} />
              ) : (
                <ChevronRightIcon sx={{ color: theme.palette.common.white }} />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider sx={{ borderColor: "#ffffff78" }} />
          <List>
            <ListItem disablePadding>
              <ListItemButton
                sx={{
                  "MuiListItemIcon-root": {
                    minWidth: "35px",
                  },
                }}
              >
                <ListItemIcon>
                  <HomeIcon
                    className={` ${pathname === `/${locale}` ? "text-primary" : "text-white"}`}
                  />
                </ListItemIcon>
                <Link className={`nav__link ${pathname === `/${locale}` ? "active" : ""}`} href="/">
                  <ListItemText primary={t("pages.about")} />
                </Link>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton
                sx={{
                  "MuiListItemIcon-root": {
                    minWidth: "35px",
                  },
                }}
              >
                <ListItemIcon>
                  <InfoIcon
                    className={` ${
                      pathname === `/${locale}/about` ? "text-primary" : "text-white"
                    }`}
                  />
                </ListItemIcon>
                <Link
                  className={`nav__link ${pathname === `/${locale}/about` ? "active" : ""}`}
                  href="/about"
                >
                  <ListItemText primary={t("pages.about")} />
                </Link>
              </ListItemButton>
            </ListItem>
          </List>
        </Drawer>
      </Box>
    </nav>
  );
}
