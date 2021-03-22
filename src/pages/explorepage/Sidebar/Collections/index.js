import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';

import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    paddingBottom: '6px',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    paddingLeft: 20,
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  collectionSvgDiv: {
    display: 'flex',
    alignItems: 'center',
  },
  collectionExpandDiv: {
    border: '1px solid gray',
    borderRadius: '8px',
    width: '100%',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    width: '80%',
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

const ExploreCollections = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <Accordion
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <div className={classes.collectionSvgDiv}>
            <PlaylistPlayIcon></PlaylistPlayIcon>
            <span className={classes.heading}>Collections</span>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <div className={classes.collectionExpandDiv}>
            <InputBase
              className={classes.input}
              placeholder="Filter"
              inputProps={{ 'aria-label': 'search google maps' }}
            />
            <IconButton
              type="submit"
              className={classes.iconButton}
              aria-label="search"
            >
              <SearchIcon />
            </IconButton>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default ExploreCollections;
