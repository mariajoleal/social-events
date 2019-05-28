import React from 'react';
import { ClipLoader } from 'react-spinners';
import Grid from '@material-ui/core/Grid';
import CardContainer from './components/Card/CardContainer';
import Form from './components/Form/FormContainer';
import './Event.css';

const EventsComponent = (props) => {
  const { loading, data, handleCreate } = props;

  return (
    <>
      <div className="spinner">
      <ClipLoader
        sizeUnit={"px"}
        size={150}
        color={'#123abc'}
        loading={loading}
      />
      </div>      
      {!loading && <div className="event">
        <Grid container spacing={8}>
          <Grid item md={3}>
            <Form handleCreate={handleCreate} />
          </Grid>
          <Grid item md={9}>
            <Grid container spacing={8}>
              {
                data && data.map((event, index) => {
                  return (
                    <Grid key={index} item md={4}>
                      <CardContainer data={event} />
                    </Grid>
                  )
                })
              }
            </Grid>
          </Grid>
        </Grid>
      </div>}
  </>
  );
}

export default EventsComponent;
