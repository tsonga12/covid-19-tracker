import { FormControl, FormHelperText, InputLabel, NativeSelect, makeStyles} from '@material-ui/core'
import React from 'react'


const useStyles = makeStyles( theme => ({
    formControl: {
        margin: `${theme.spacing(3)}px 0`
    }
}))

const CountrySelector = ({value, handleOnChange, countries}) => {
    const styles = useStyles()
    return (
        <FormControl className = {styles.formControl}>
            <InputLabel htmlFor ="country-selector" shrink> Country</InputLabel>
            <NativeSelect
                value = {value}
                onChange = {handleOnChange}
                inputProps = {{
                    name: 'country',
                    id: 'country-selector'
                }}
            >
            {countries.map((country, index) => {
                return (
                    <option key = {index} value = {country.ISO2}>
                        {country.Country}
                    </option>
                )
            })}
            </NativeSelect>
            <FormHelperText>Select a country</FormHelperText>
        </FormControl>
    )
}

export default CountrySelector