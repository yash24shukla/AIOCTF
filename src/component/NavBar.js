import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import '../assets/css/style.css';
import { withStyles } from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import { Button, Collapse } from '@material-ui/core';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import {Link} from 'react-router-dom';
import {Grid , Paper , ButtonBase} from '@material-ui/core';

import 'font-awesome/css/font-awesome.min.css';


const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
   
    display: 'flex',
    
    color: '#edf1e6',
  },
  
  appBar: {
    backgroundColor: '#343c41',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    backgroundColor: '#343c41',
    
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {

    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    marginTop: '6%',
    backgroundColor: '#111314',
    width: drawerWidth,
    color: '#edf1e6',
    
  },
  navText:{
    margin:'10px',
    fontSize:'0.9rem',
    color:'darkGrey'
  },
  drawerHeader: {
    
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
   height:'70vh',
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  navList:{
    marginTop : '30%',
  },
  navText:{
  color:'darkGrey',fontSize:'0.8rem',marginTop:'1.5rem'
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  expansionButtonCommon:{
    fullWidth:'true', 
    display:'block' ,
    width:'100%' ,
    textAlign:'left',
    color: '#edf1e6',
    '&:hover' : {
      color: '#fff'
    }

  },
  expansionHeaderCommon:{
    color: '#edf1e6',
    fontSize:10,

    
  },
  AppTitle_section2:{
  
    
    
  },
  AppTitle_section1:{
  

    
    
  },
  titleContainer:{
    width: '100%',

  },
  titleRoot:{
   
    top:'0',
    
  }, 
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  titleDescription:{
    color:'#3f4447',
  },
}));

export default function PersistentDrawerLeft(props) {
  const [openMain, setopenMain] = React.useState(false);
  const [openRanking, setopenRanking] = React.useState(false);
  const [openEducation, setopenEducation] = React.useState(false);
  const [openLabs, setopenLabs] = React.useState(false);
  const [openSocial, setopenSocial] = React.useState(false);
  const [openOther, setopenOther] = React.useState(false);



  const handleOther = () => {
    setopenOther(!openOther);
  }
  const handleMain = () => {
    setopenMain(!openMain);
  };
  const handleRanking = () => {
    setopenRanking(!openRanking);
  };
  const handleEducation = () => {
    setopenEducation(!openEducation);
  };
  const handleLabs = () => {
    setopenLabs(!openLabs);
  };
  const handleSocial = () => {
    setopenSocial(!openSocial);
  };
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
 
  

  const handleDrawerClose = () => {
    setOpen(!open);
  };
  
  return (
    <div className={classes.root}>
      
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
        style={{flexDirection:'row'}}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerClose}
            edge="start"
            className={clsx(classes.menuButton, open )}
          >
            <MenuIcon />
          </IconButton>
{/* <<<<<<< HEAD*/}
          <Typography variant="h6" noWrap>
            {/* AIOC CTF   */}
            <Grid container
  direction="row"
  
  justifyContent='flex-end'
>
  <Typography   className={classes.navText}>Switch to VIP</Typography>
  <Typography 
   className={classes.navText}
  >Swag Store</Typography>
  <Typography   className={classes.navText}>Gift Card</Typography>
  <Typography   className={classes.navText}>Feedback</Typography>
  <Typography   className={classes.navText}>Testimonial</Typography>
  <Typography  className={classes.navText}>Member Finder </Typography>

  </Grid>
          </Typography>
{/* =======

// >>>>>>> 97cdca3aa998140502e3639285ebd77e4c06ad23 */}
        </Toolbar>
        <div style={{justifyContent:'flex-end',flexDirection:'row',display:'flex',width:'100%' }} className={classes.root}>
          <div style={{width:'50%'}}></div>
          {/* temp fix to slide things  */}
          <Grid xs={1} sm={2} className={classes.navText} style={{color:' #00FF00'}}>
          <i className="fa fa-shopping-cart" aria-hidden="true"></i> Switch to VIP
        </Grid>
        <Grid xs={1} sm={2} className={classes.navText}>
        <i className="fa fa-tshirt"></i>
Swag Store
        </Grid>
        <Grid xs={1} sm={2} className={classes.navText}>
        <i className="fa fa-gift"></i>   Gift Cards
        </Grid>
        <Grid xs={1} sm={2} className={classes.navText}>
        <i className="fa fa-lightbulb"></i>  Feedback
        </Grid>
        <Grid xs={1} sm={2} className={classes.navText}>
        <i className="fa fa-star"></i> Testimonial
        </Grid>
        <Grid xs={1} sm={2} className={classes.navText}>
    Member Finder
        </Grid>
        </div>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        
      >
       
        
       
        <Divider />
        <List className={classes.navList}>
          
          <ListItem button onClick={handleMain}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Main" />
        {openMain ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={openMain} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
            
          </ListItem>  
          <ListItem button className={clsx(classes.nested)} onClick={handleOther}>
          <ListItemIcon>
            
          </ListItemIcon>
          <ListItemText primary="Other" />
          {openOther ? <ExpandLess /> : <ExpandMore />}

        </ListItem> 
        <Collapse in={openOther} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
        
        
        <ListItem button className={classes.nested}> 
        <ListItemIcon>   
        </ListItemIcon>
        <Link to='/rules'><ListItemText primary="Rules" /></Link>
        </ListItem>
  
        
        <ListItem button className={classes.nested}> 
        <ListItemIcon>   
        </ListItemIcon>
        <Link to='/changeLog'> <ListItemText primary="Change Log" /></Link>
        </ListItem>


      
        
        <ListItem button className={classes.nested}> 
        <ListItemIcon>   
        </ListItemIcon>
        <Link to='/badges'><ListItemText primary="Badges" /></Link>
        </ListItem>


      
        
        <ListItem button className={classes.nested}> 
        <ListItemIcon>   
        </ListItemIcon>
        <Link to='/features'><ListItemText primary="Feature Request" /></Link>
        </ListItem>


      
        
        <ListItem button className={classes.nested}> 
        <ListItemIcon>   
        </ListItemIcon>
        <Link to='/announcment'><ListItemText primary="Announcment" /></Link>
        </ListItem>

        <ListItem button className={classes.nested}> 
        <ListItemIcon>   
        </ListItemIcon>
        <Link to='/support'><ListItemText primary="Support" /></Link>
        </ListItem>


    

        </List>
        </Collapse>
        </List>
      </Collapse>






      <ListItem button onClick={handleRanking}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Ranking" />
        {openRanking ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
      <Collapse in={openRanking} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
             
            </ListItemIcon>
            <Link to='/hof'><ListItemText primary="hall of fame" /></Link>
          </ListItem>

          <ListItem button className={classes.nested}>
            <ListItemIcon>
             
            </ListItemIcon>
            <Link to='/team'><ListItemText primary="team" /></Link>
          </ListItem>
          

          <ListItem button className={classes.nested}>
            <ListItemIcon>
             
            </ListItemIcon>
            <Link to='/university'><ListItemText primary="university" /></Link>
          </ListItem>


          <ListItem button className={classes.nested}>
          <ListItemIcon>
           
          </ListItemIcon>
          <Link to='/country'><ListItemText primary="country" /></Link>
        </ListItem>

        <ListItem button className={classes.nested}>
          <ListItemIcon>
           
          </ListItemIcon>
          <Link to='/VIP'><ListItemText primary="VIP" /></Link>
        </ListItem>


          
        </List>
      </Collapse>





      <ListItem button onClick={handleEducation}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Education" />
        {openEducation ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={openEducation} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
             
            </ListItemIcon>
            <Link to='/universities'><ListItemText primary="Universities"/></Link>
          </ListItem>
          
          
        </List>
      </Collapse>
      <ListItem button onClick={handleLabs}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Labs" />
        {openLabs ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={openLabs} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              
            </ListItemIcon>
            <Link to='/startingPoint'><ListItemText primary="Starting Point" /></Link>
          </ListItem>
          

          <ListItem button className={classes.nested}>
            <ListItemIcon>
              
            </ListItemIcon>
            <Link to='/access'><ListItemText primary="Access" /></Link>
          </ListItem>

          <ListItem button className={classes.nested}>
          <ListItemIcon>
            
          </ListItemIcon>
          <Link to='/challenges'><ListItemText primary="Challenges" /></Link>
        </ListItem>
        
          
        </List>
      </Collapse>
      <ListItem button onClick={handleSocial}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Social" />
        {openSocial ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={openSocial} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              
            </ListItemIcon>
            <ListItemText primary="Private Messages" />
          </ListItem>
          
          
          <ListItem button className={classes.nested}>
          <ListItemIcon>
            
          </ListItemIcon>
          <ListItemText primary="Twitter" />
        </ListItem>
        <ListItem button className={classes.nested}>
        <ListItemIcon>
          
        </ListItemIcon>
       <ListItemText primary="Facebook" />
      </ListItem>

      <ListItem button className={classes.nested}>
            <ListItemIcon>
              
            </ListItemIcon>
            <ListItemText primary="Instagram" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              
            </ListItemIcon>
            <ListItemText primary="Linkedin" />
          </ListItem>

        </List>
      </Collapse>
      
        </List>
      </Drawer>
      <div
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
      <div className={classes.titleRoot}>
     
        <Grid container spacing={3}  justify="space-between">
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src="../assets/image/logo4.png" />
            </ButtonBase>
          </Grid>
          <Grid item xs={30} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  AIOC
                </Typography>
                <Typography variant="body2" gutterBottom className={classes.titleDescription}>
                 {props.description}
                </Typography>
                
              </Grid>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  AIOC
                </Typography>
                <Typography variant="body2" gutterBottom className={classes.titleDescription}>
                 {props.description}
                </Typography>
                
              </Grid>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  AIOC
                </Typography>
                <Typography variant="body2" gutterBottom className={classes.titleDescription}>
                 {props.description}
                </Typography>
                
              </Grid>
            </Grid>
            <Grid item xs={1}>
              <Typography variant="subtitle1">CTF <br/> <p>{props.name}</p></Typography>
            </Grid>
          </Grid>
        </Grid>
      <Divider/>
    </div>
      </div>
    </div>
  );
}