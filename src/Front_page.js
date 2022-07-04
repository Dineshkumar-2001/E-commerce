import React, { Component } from "react";
import Axios from "axios";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import { display } from "@mui/system";
import AddIcon from '@mui/icons-material/Add';
import MenuIcon from '@mui/icons-material/Menu';

import Add_product from "./Add_product";
import { Link } from "react-router-dom";

// import ChevronLeftIcon from '@mui/icons-material/ChevronLeftIcon';
// import ChevronRightIcon from '@mui/icons-material/ChevronRightIcon';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MenuIcon from '@mui/icons-material/Menu';
// import MailIcon from '@mui/icons-material/Mail';

export default class Front_page extends Component {
  constructor() {
    super();
    this.state = {
      length:'',
      home:true,
      user:true,
      Receive_data: [],
      open: false,
      send_product:''
    };
  }

  handleDrawerOpen = () => {
    this.setState({
      open: true,
    });
  };

  handleDrawerClose = () => {
    this.setState({
      open: false,
    });
  };

  get_val = () => {
    Axios.get("https://fakestoreapi.com/products").then((reponse) => {
      this.setState({
        Receive_data: reponse.data,
      });
      console.log(reponse.data);
    });
  };

  AddProduct = (item) =>{
    const prodect ={
      id:item.id,
      title:item.title,
      rating:item.rating,
      image:item.image
    }
    console.log('prodect',prodect)
    this.setState({
      send_product:[...this.state.send_product,prodect]
    })

     
  }

  // remove_product = (id) => {
  //   const get_receive_data = this.state.Receive_data;
  //   const remove_product = get_receive_data.filter((item) => {
  //     return item.id == id;
  //   });
  //   console.log("remove_product", remove_product);
  //   console.log("id", id);
  // };

  User_product = () =>{
      this.setState({
         home:false
      })
  }

  ReceiveFromChild = (newText) =>{
    this.setState({
        ...this.state,length:newText
    })
}

  render() {
    console.log('send_product',this.state.send_product)
    const drawerWidth = 240;

    const Item = styled(Paper)(({ theme }) => ({
      backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
      ...theme.typography.body2,
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    }));

    const Main = styled("main", {
      shouldForwardProp: (prop) => prop !== "open",
    })(({ theme, open }) => ({
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: `-${drawerWidth}px`,
      ...(open && {
        transition: theme.transitions.create("margin", {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
      }),
    }));

    const AppBar = styled(MuiAppBar, {
      shouldForwardProp: (prop) => prop !== "open",
    })(({ theme, open }) => ({
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(["margin", "width"], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
      }),
    }));

    const DrawerHeader = styled("div")(({ theme }) => ({
      display: "flex",
      alignItems: "center",
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: "flex-end",
    }));

    const { Receive_data } = this.state;
    return (
      <Box>
        <Box sx={{ display: "flex", justifyContent: "space-around" }}>
          <CssBaseline />
          <AppBar position="fixed" open={this.state.open}>
            <Toolbar>
              <Box
                color="inherit"
                aria-label="open drawer"
                onClick={this.handleDrawerOpen}
                edge="start"
                sx={{ mr: 2, ...(this.state.open && { display: "none" }) }}
              >
                {/* <Button sx={{ backgroundColor: "red", color: "white" }}>
                  OPEN
                </Button> */}
                <MenuIcon></MenuIcon>
              </Box>
              <Box></Box>
              <Button
                sx={{ marginLeft: "50px" }}
                variant="contained"
                onClick={this.get_val}
              >
                Click
              </Button>
              <Typography
                sx={{ marginLeft: "30%" }}
           
                noWrap
                component="div"
              >
                WELCOME
              </Typography>
              <Typography
                sx={{ marginLeft: "30%" }}
             
                noWrap
                component="div"
              >
               TOTAL PRODUCT :  {this.state.send_product.length}
                {/* {this.state.length} */}
              </Typography>
            </Toolbar>
          </AppBar>
          <Drawer
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              "& .MuiDrawer-paper": {
                width: drawerWidth,
                boxSizing: "border-box",
              },
            }}
            variant="persistent"
            anchor="left"
            open={this.state.open}
          >
            <DrawerHeader>
              <IconButton onClick={this.handleDrawerClose}>
                {/* <Button>CLOSE</Button> */}
                <AddIcon></AddIcon>
                {/* {theme.direction === 'ltr' ? 'hh': 'll'} */}
              </IconButton>
            </DrawerHeader>
            <Divider />

            <List>
              {/* <Link to='/Add_product'> */}
              <Button onClick={this.User_product}>USER</Button>
              {/* </Link> */}
            
            </List>
          </Drawer>
          <Main open={this.state.open}>
            <DrawerHeader />
          </Main>
        </Box>

        {/* ////////////////////////////////////////////////////////////////////////////////////////////// */}
        {/* <Box
          sx={{
            Color: "White",
            backgroundColor: "#DBDFFD",
            padding: "15px",
            display: "flex",
            justifyContent: "space-around",

          }}
        >
          <Button sx={{}} variant="contained" onClick={this.get_val}>
            Click
          </Button>
          <strong>WELCOME OUR WEBSITE</strong>
          <Button variant="contained">LOG OUT</Button>
        </Box> */}
         {
          this.state.home ?  
          <Box sx={{ flexGrow: 1, marginTop: "-60px" }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {Receive_data.map((val, index) => (
              <Grid
                item
                xs={2}
                sm={4}
                md={6}
                key={index}
                sx={{ backgroundColor: "#92B4EC" }}
              >
                <Item sx={{ margin: "10px" }}>
                  <Box>
                    {" "}
                    <h4> ID : {val.id}</h4>{" "}
                  </Box>
                  <Box>
                    {" "}
                    <h4> TITLE : {val.title}</h4>{" "}
                  </Box>
                  <Box>
                    {" "}
                    <h4> RATING : {val.rating.rate}</h4>{" "}
                  </Box>
                  <img style={{ width: "100px" }} src={val.image}></img>
                  <Box>
                    <Button
                      sx={{ margin: "10px" }}
                      variant="contained"
                      color="success"
                      onClick={() => this.AddProduct(val)}
                    >
                      ADD
                    </Button>
                    {/* <Button
                      sx={{ margin: "10px" }}
                      variant="contained"
                      color="error"
                      onClick={() => this.remove_product(val.id)}
                    >
                      REMOVE
                    </Button> */}
                  </Box>
                </Item>
              </Grid>
            ))}
          </Grid>
        </Box> : <Add_product value={this.state.send_product} passvalue={this.ReceiveFromChild}></Add_product>
         }
        
        
      </Box>

    );
  }
}
