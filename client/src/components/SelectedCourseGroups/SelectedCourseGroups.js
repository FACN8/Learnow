import React ,{useState} from 'react';
import './SelectedCourseGroups.css';

import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import CreateGroup from '../CreateGroup/CreateGroup';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

const tileData = [
    {
      img: '/res/logo-1.png',
      title: 'Group 1',
      author: 'Beast 139',
    },
  ];

function SelectedCourseGroups({state,setState}) { 
const classes = useStyles();
const [creating,setCreating]= useState(false);
const switchCreating = ()=>setCreating( (creating) => !creating );

  return (
    <div className='groups-container-bg'>
    <button onClick={switchCreating} className="createGroup grow">Create group</button>
    {creating &&
    <div className="form-container">
    <CreateGroup 
    courseId={state.selectedCourse.id}
    setCreating={setCreating}
    />
    </div>
    }

    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>

        {tileData.map(tile => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              subtitle={<span>by: {tile.author}</span>}
              actionIcon={
                <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
    </div>
  );

}

export default SelectedCourseGroups;
