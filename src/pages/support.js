import React,{useState,useEffect} from 'react';
import clsx from 'clsx';
import NavBar from '../component/NavBar';
//import clsx from 'clsx';
//import NavBar from '../component/NavBar'
//import React from 'react';
import '../assets/css/style.css'
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Typography, List, ListItem, ListItemText} from '@material-ui/core'


const drawerWidth = 240;
const contentWidth = 200 ; 
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        
      },
    content: {
   
    
        height:'auto',
         flexGrow: 1,
         padding: theme.spacing(1),
         transition: theme.transitions.create('margin', {
           easing: theme.transitions.easing.sharp,
           duration: theme.transitions.duration.leavingScreen,
         }),
         marginTop:'0',
         
       },
      contentShift: {
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        
        marginLeft: drawerWidth ,
      },
      gridListItem:{
        width:'100%'
      },
      demo: {
       marginLeft:'10%',
       width:'100%'
      },
      title: {
        marginLeft:'10%',
        fontSize : '1.5rem',
        color:'#fff'
      },
      announcementListItem:{
          backgroundColor:'#3b4046',
          marginBottom:'2%' ,
      },
}))


function Support( ) 





{
const classes = useStyles();
    const [open, setOpen] = React.useState(false);

	const  [support,setsupport] = React.useState({})
  
useEffect(()=>{
      fetch('http://localhost:8000/support', {
        headers: {
            'Authorization': localStorage.getItem('token')
        },
    })
    .then(response => {
        if (response.ok) {
            return response;
        }
        else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
    },
    error => {
        var errmess = new Error(error.message);
        throw errmess;
    })
    .then(response => {
      setsupport(response.data)
    })
    .catch(error => (console.log(error.message)));

            })
    return(
       
       <div>
       <div>
       <NavBar  name='support'  description="is an online platform allowing you to test and advance your skills in cyber security. Use it responsibly and don't hack your fellow members..." /> 
       </div> 
       <div  className={clsx(classes.content, {
        [classes.contentShift]: open
      }, classes.root)}>
      <Grid container spacing={5} >
      <Grid item xs={22} md={10}>
        <Typography variant="h6" className={classes.title}>
          Challenges
        </Typography>
        <div className={classes.demo}>
          <List >
            {support.map( list => (
<ListItem  key={list.id} className={classes.announcementListItem} >
                <ListItemText
                 
                > {list.name}</ListItemText>
              
                <ListItemText
                 
                > {list.email}</ListItemText>
                
              </ListItem>

              )
              )}
              
        
          </List>
        </div>
      </Grid>
</Grid>
       </div>
       </div>



    )
}














export default Support;