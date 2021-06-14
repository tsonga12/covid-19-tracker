import { Grid } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import HighMaps from '../Charts/HighMaps'
import LineChart from '../Charts/LineChart'

const Summary = ({report, selectedCountry}) => {
  const [mapData, setMapData] = useState({})

  useEffect(() => {
    //let mounted = false;
    //console.log('hello there im here');
    if (selectedCountry){
      import(`@highcharts/map-collection/countries/${selectedCountry}/${selectedCountry}-all.geo.json`)
      .then(res => { 
        setMapData(res)
      })
    }
    //return () => mounted = true;
  },[selectedCountry])
  return ( 
    <div style = {{marginTop: 10}} >
      <Grid container spacing ={3}>
        <Grid item sm = {8} xs = {12}>
          <LineChart data = {report}/>
        </Grid>
        <Grid item sm = {4} xs = {12}>
          <HighMaps mapData = {mapData}/>
        </Grid>
      </Grid>
    </div>
  )
}

export default Summary