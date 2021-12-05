import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
// import MenuIcon from "@mui/material/MenuIcon";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout"

const navLinks = [ 'Cart', 'Products' ]


const Navbar = (props: any) => {
  return (<nav>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" noWrap component="div" sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}>BUY IT</Typography>
        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            size="large"
            edge="start"
            sx={{ mr: 2 }}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Typography>
            <Button color="inherit">Register</Button>
          </Typography>
          <Typography>
            <Button color="inherit">Login</Button>
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>

  </nav>)
}

export default Navbar;