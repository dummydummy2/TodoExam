import React from "react";
import styled from "styled-components";



function Header() {
    return (
        <StHeaderDiv>
            <div>My Todo List</div>
            <div>React</div>
        </StHeaderDiv>
    )
}

const StHeaderDiv = styled.div`
    align-items: center;
    border: 1px solid #ddd;
    display: flex;
    height: 50px;
    justify-content: space-between;
    padding: 0 20px;
`

export default Header;