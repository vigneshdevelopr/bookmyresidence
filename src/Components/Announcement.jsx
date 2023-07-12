import React from 'react'
import { styled } from 'styled-components'

function Announcment() {
  return (
    
<Main>
    <Heading>
    Travelling to Japan? Read all updated requirements before you book.

    </Heading>
<Button>
    Learn More !
</Button>
</Main>


    )
}

export default Announcment

const Main = styled.div`
    
background-color: #0077b5;
display: flex;
justify-content: center;
height : 30px ;

`
const Heading = styled.p`
   display: flex;
align-items: center;
font-size: medium;
color: whitesmoke;
`
const Button = styled.button`
    margin-left: 10px;
    background-color: #38435a;
    color:#ffff;
    border:none;
    &:hover{
cursor: pointer;
background-color: #7ea2db;
color: #252525
    }

`