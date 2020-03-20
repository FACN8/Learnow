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
    backgroundColor: '#433d3d',
  },
  gridList: {
    width: '95vw',
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

function SelectedCourseGroups({ state, setState }) {
  const classes = useStyles();
  const [creating, setCreating] = useState(false);
  const [loading, setLoading] = useState(true);
  const [reqErr, setReqErr] = useState(false);
  const [tileData, setTileData] = useState([]);
  const [columns,setColumns] = useState(Math.floor(window.innerWidth/350));

  window.addEventListener('resize',()=>setColumns(Math.floor(window.innerWidth/350)));

  const switchCreating = () => setCreating(creating => !creating);

  const updateData = () => {
    axiosGet(`/groups/get/courseid=${state.selectedCourse.id}`)
      .then(res => {
        setTileData(
          res.data.map(group => ({
            id: group.id,
            img: '/res/group-logo.jpg',
            title: group.name,
            author: group.creator_name,
            description: group.description,
            activity: group.updated_at,
          })),
        );
        setLoading(false);
      })
      .catch(err => setReqErr(reqErr => (reqErr = `Failed to get groups`)));
  };

  useEffect(() => {
    updateData();
  }, []);
  useEffect(() => {
    updateData();
  }, [creating]);

  console.log('The tile data is');
  console.log(tileData);
  console.log(`error is:${reqErr}`);

  if (reqErr) {
    return <span>{reqErr}</span>;
  }
  if (loading) {
    return <span>Loading groups . . . </span>;
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
        <GridList
          cols={columns}
          spacing={30}
          cellHeight={500}
          className={classes.gridList}
        >
          {tileData.map(tile => (
            <GridListTile key={tile.id}>
              <Link className='img-link' to={'/GroupChat'}>
                <img className='group-img' src={tile.img} alt={tile.title} />
              </Link>
              <ListSubheader>{
                <div>
                <h2 className='group-title'>{tile.title}</h2>
                <p className='group-desc'>{tile.description}</p>
                </div>
                }</ListSubheader>
              <GridListTileBar
                title={`Latest activity ${tile.activity}`}
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
