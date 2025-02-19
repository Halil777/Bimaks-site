import { FC, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Language from "../../language/Language";
// import Toggle from "../../common/theme/ThemeToggle";
import { navItems } from "../../../data/data";
import { useTranslation } from "react-i18next";
import { Drawer, List, ListItem, ListItemText } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "./Logo";
import Header from "../Header";

const Navbar: FC = () => {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Header />
      <div>
        <nav
          className={`fixed w-full dark:text-white py-4 flex justify-between items-center md:px-[10%] z-50 transition-all duration-300 ${
            isScrolled
              ? "bg-white dark:bg-gray-900 shadow-md top-0"
              : "bg-transparent dark:bg-gray-900"
          }`}
        >
          <div className="flex items-center justify-between w-full px-4">
            <Logo />
            <div className="flex items-center">
              <div className="hidden md:flex items-center justify-between gap-4 md:gap-8">
                {navItems.map((item, i) => (
                  <Link
                    key={i}
                    to={item.path}
                    className={`hover:underline ${
                      location.pathname === item.path
                        ? "font-bold underline"
                        : ""
                    }`}
                  >
                    {t(item.title)}
                  </Link>
                ))}
                {isScrolled && <Language />}
                {/* <Toggle /> */}
              </div>
              <button
                className="md:hidden rounded-md focus:outline-none"
                onClick={() => setIsMenuOpen(true)}
              >
                <MenuIcon className="dark:text-gray-500" />
              </button>
            </div>
          </div>

          <Drawer
            anchor="right"
            open={isMenuOpen}
            onClose={() => setIsMenuOpen(false)}
            className="h-screen"
          >
            <List
              sx={{
                width: 200,
              }}
              className="dark:bg-gray-700 dark:text-white h-screen flex flex-col"
            >
              {navItems.map((item, i) => (
                <ListItem
                  sx={{
                    pl: 5,
                  }}
                  key={i}
                  button
                  component={Link}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <ListItemText
                    primary={t(item.title)}
                    primaryTypographyProps={{
                      className:
                        location.pathname === item.path
                          ? "font-bold underline"
                          : "",
                    }}
                  />
                </ListItem>
              ))}
              <hr />
              {/* <div className="flex mt-5 justify-around">
                {isScrolled && <Language />}
                <Toggle />
              </div> */}
            </List>
          </Drawer>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
