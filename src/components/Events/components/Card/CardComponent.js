import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import moment from 'moment';

const CardComponent = (props) => {
  const { expanded, handleExpandClick, event } = props;

  return (
    <Card >
      <CardHeader
        avatar={
          <Avatar aria-label="Recipe" className="avatar">
            {event.createdBy[0].toUpperCase()}
          </Avatar>
        }
        title={event.name}
        subheader={moment(event.date).format('LL')}
      />
      <CardMedia
        className="media"
        image={event.image}
        title="Contemplative Reptile"
      />
      <CardActions>
        <Button size="small" color="primary">
          Assist
        </Button>
        <Button size="small" color="primary">
          {event.attending} are going
        </Button>
        <IconButton
          // className={classnames(classes.expand, {
          //   [classes.expandOpen]: this.state.expanded,
          // })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="Show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Event would take place in {event.place} at {event.time} </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default CardComponent;