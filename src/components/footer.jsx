import React from 'react';
import Button from '@material-ui/core/Button';
import CodeIcon from '@material-ui/icons/Code';

function Footer (props) {
  return(
    <>
    <div style={{textAlign: "center"}}>
       <Button
              className="btn"
              style={{
                textAlign: "center",
                color: "rgb(255, 48, 108)",
                backgroundColor: "rgba(225, 48, 108, 0.1)",
                marginTop: 5,
                width: 180,
                fontSize: 10,
                alignContent: "center",
                fontFamily: "notosans",
              }}
              
            >
              <CodeIcon size="15px" /> Made By Gourab
            </Button>
    </div>
    </>
   )
}
export default Footer;