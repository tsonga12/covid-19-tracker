import React, { useEffect, useState } from 'react'
import CountrySelector from './components/CountrySelector'
import Highlight from './components/Highlight'
import Summary from './components/Summary'
import { getCountries, getReportByCountry } from './components/apis'
import { Container, Typography } from '@material-ui/core'
import moment from 'moment'
import '@fontsource/roboto'
function App() {
   const [countries, setCountries] = useState([])
   const [selectedCountryId, setSelectedCountryId] = useState('')
   const [report, setReport] = useState([])

  useEffect(() => {
    getCountries().then( res => {
      setCountries(res.data)
      setSelectedCountryId('CA')
    })
  }, [])

  const handleOnChange = (event) => {
    //console.log(event.target.value);
    setSelectedCountryId(event.target.value)
  }   
  
  useEffect(() => {
    if(selectedCountryId){
      const {Slug} = countries.find(country => country.ISO2 === selectedCountryId)
      //console.log(Slug);
      getReportByCountry(Slug).then(res => {
        res.data.pop()
        setReport(res.data)
      })
    }
  }, [countries, selectedCountryId])

  return (
    <Container style ={{marginTop: 20}}>
      <Typography variant ='h3' component = 'h3'>COVID-19 CORONAVIRUS PANDEMIC</Typography>
      <Typography> {moment().format('LLL')}</Typography>
      <CountrySelector value = {selectedCountryId} countries = {countries} handleOnChange = {handleOnChange}/>
      <Highlight report ={report}/>
      <Summary report ={report} selectedCountry = {selectedCountryId.toLowerCase()}/>
    </Container>
  )
}

export default App;
