import React from 'react';
import moment from 'moment';
function Date(  ) {  
  let utctime =moment.utc().format('DD/MM/YYYY hh:mm a') ; 
  console.log("utctime", utctime);
  let date=moment(utctime,'DD/MM/YYYY hh:mm a').format("llll");
  let localtoutc=moment.utc(date).toDate();
  let localtime=moment(localtoutc).format('DD/MM/YYYY hh:mm a')
  console.log("localtime", localtime);
  return (
    <>
    </>
  )
}
export default Date;