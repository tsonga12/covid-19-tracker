import { Grid } from '@material-ui/core'
import React from 'react'
import HighlightCard  from './HighlightCard'

const Highlight = ({report}) => {
    const data = report && report.length ? report[report.length - 1]: []
    //console.log(report.length);
    const summary = [
        {
            title: 'Total cases',
            count: data.Confirmed,
            type: 'confirmed'
        },
        {
            title: 'Recovered cases',
            count: data.Recovered,
            type: 'recovered'
        },
        {
            title: 'Death',
            count: data.Deaths,
            type: 'death'
        }
    ]
    return (
        <Grid container spacing ={3}>
            {summary.map((item, index) => 
                <Grid item sm ={4} xs ={12} key = {index}>
                    <HighlightCard key = {index} title = {item.title} count ={item.count} type = {item.type}/>
                </Grid>
            )}
        </Grid>
    )
}

export default  Highlight 