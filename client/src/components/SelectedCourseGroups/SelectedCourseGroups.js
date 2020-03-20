import React, { useState, useEffect } from 'react';
import './SelectedCourseGroups.css';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import CreateGroup from '../CreateGroup/CreateGroup';
import axiosGet from '../../utils/axiosGet.js';
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

function SelectedCourseGroups({ state, setState }) {
  const classes = useStyles();
  const [creating, setCreating] = useState(false);
  const [groups,setGroups] = useState(null);
  const [reqErr,setReqErr] = useState(false);
  const switchCreating = () => setCreating(creating => !creating);

  useEffect(()=>{
    axiosGet(`/groups/get/courseid=${state.selectedCourse.id}`)
    .then(res=>setGroups(res))
    .catch(err=>setReqErr((reqErr=>reqErr=`Failed to get groups`)))
  },[])
console.log(reqErr);
  if(reqErr){
    return (
    <span>{reqErr}</span>
    )
  }
  if(!groups){
    return (
      <span>Loading groups . . . </span>
      )
  }
  return (
    <div className='groups-container-bg'>
      <button onClick={switchCreating} className='createGroup grow'>
        Create group
      </button>
      {creating && (
        <div className='form-container'>
          <CreateGroup
            courseId={state.selectedCourse.id}
            setCreating={setCreating}
          />
        </div>
      )}

      <div className={classes.root}>
        <GridList cellHeight={180} className={classes.gridList}>
          {tileData.map(tile => (
            <GridListTile key={tile.img}>
              <Link className='img-link' to={'/GroupChat'}>
                <img className='group-img' src={tile.img} alt={tile.title} />
              </Link>
              <GridListTileBar
                title={tile.title}
                subtitle={<span>by: {tile.author}</span>}
                actionIcon={
                  <IconButton
                    aria-label={`info about ${tile.title}`}
                    className={classes.icon}
                  >
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
