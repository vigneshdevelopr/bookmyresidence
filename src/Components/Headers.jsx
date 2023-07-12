import React from 'react'
import { styled } from 'styled-components'
import HotelIcon from '@mui/icons-material/Hotel';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import TaxiAlertIcon from '@mui/icons-material/TaxiAlert';
import SearchIcon from '@mui/icons-material/Search';
import DateRangeIcon from '@mui/icons-material/DateRange';
import EscalatorWarningIcon from '@mui/icons-material/EscalatorWarning';

function Headers() {
  return (
    <Container>
<Main>
<Icons>
<Icon className='Active'><IconSpan>Book Hotel:</IconSpan><HotelIcon /></Icon>  
<Icon><IconSpan>Book Flight:</IconSpan>   <FlightTakeoffIcon /></Icon>  
<Icon><IconSpan>Hire Taxi:</IconSpan>   <TaxiAlertIcon /></Icon>  
</Icons>
</Main>
{/* SearchBox */}
  <Inputs>
  <InputIcons>
  <InputIcon><SearchIcon /><SearchSpan type='text' placeholder='Search Here!' /></InputIcon>
  <InputIcon>
  <DateRangeIcon /><DateSpan>CheckIn-Check-Out</DateSpan>
  </InputIcon>
  <InputIcon>
  <EscalatorWarningIcon /><DateSpan>CheckIn-Check-Out</DateSpan>
  </InputIcon>
  <InputIcon>
  <ButtonSpan>Search</ButtonSpan>
  </InputIcon>
  </InputIcons>
 
  </Inputs>
</Container>
    )

}

export default Headers
//styling:
const Container = styled.div`
  
`

const Main = styled.div`
  background-color: #caccce;
  display: flex;
  justify-content: center;
  height: 40px;
`
const Icons = styled.div`
  width: 100%;
  max-width: 1024px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const Icon = styled.div`
  display: flex;
  &.Active{
   border: 1px solid black;
   padding: 0 20px;
   border-radius: 10px;
   &:hover{
    background-color: whitesmoke;
   }
  }
  &:hover{
    cursor: pointer;
  };
`
const IconSpan = styled.span`
margin-right: 1rem;
font-size: large;
font-family: 'Ysabeau SC', sans-serif;
font-weight: 800;
 
`
const Inputs = styled.div`
margin: 10px 0;
`
const InputIcons = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 30px;
 
`
const InputIcon = styled.div`
  display: flex;
`
const SearchSpan = styled.input`
  
`
const DateSpan = styled.span`

`
const ButtonSpan = styled.button`
  border: none;
  background-color: #38435a;
  color: #ffffff;
&:hover{
  cursor: pointer;
}
`

