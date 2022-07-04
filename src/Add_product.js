import React, { Component } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
// import  Item from '@mui/material';
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";

export default class Add_product extends Component {
  constructor(props) {
    super(props);
    this.state = {
        count:this.props.value
    };
  }

  Remove_product = (id) =>{
    const get_receive_data = this.state.count;
    const remove_product = get_receive_data.filter((item) => {
      return item.id !== id;
    });
    console.log('remove_product',remove_product)

    this.setState({
        count:remove_product
    })

   const Slice_method = get_receive_data.slice(remove_product,1)

         
  }

//   componentDidMount(){
//     this.props.passvalue(this.state.count.length)
//   }

//   PassToParent = (e) =>{
//     e.preventDefault ()
//     this.props.passvalue(this.state.count.length)
    
// }



  render() {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
        ...theme.typography.body2,
        padding: theme.spacing(2),
        textAlign: "center",
        color: theme.palette.text.secondary,
      }));
    console.log("id", this.props.value);
    console.log("count", this.state.count);
    return (
      <div>
        {/* <p>nhfgh</p>
        {this.props.value && this.props.value.map((item, index) => {
          return (
            <div key={index}>
              <h2>{item.id}</h2>
              <img style={{ width: "100px" }} src={item.image}></img>
            </div>
          );
        })} */}
        <Box sx={{ flexGrow: 1, marginTop: "20px" }}>
        {/* <Button
                      sx={{ margin: "27px" }}
                      variant="contained"
                      color="success"
                      onClick={ this.PassToParent}
                    >
                      VIEW TOTAL PRODUCTS
                    </Button> */}
       
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
           
            {this.state.count.map((val, index) => (
              <Grid
                item
                xs={2}
                sm={4}
                md={6}
                key={index}
                sx={{ backgroundColor: "#9CB4CC",marginTop:'-50px' }}
              >
                <Item sx={{ margin: "30px" }}>
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
                      color="error"
                      onClick={() => this.Remove_product(val.id)}
                    >
                      REMOVE
                    </Button>
                   
                  </Box>
                </Item>
              </Grid>
            ))}
          </Grid>
        </Box>
      </div>
    );
  }
}
