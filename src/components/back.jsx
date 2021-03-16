import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';

 function Back (props) {
   let history = useHistory();
   return(
     <>
     <Button 
      onClick={() => history.goBack()}
      variant="outlined" 
      color="primary"
      style={{
        color: "#fff",
      }}>
      <ArrowBackIosRoundedIcon style={{
                    color: "#fff",
                    verticalAlign: "middle",
                     }} />
        Back
      </Button>
     </>
     )
 }
 export default Back;