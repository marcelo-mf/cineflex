import styled from "styled-components";
import { BounceLoader } from "react-spinners"; 
import Footer from "../Footer/Footer";

export default function Loading() {
    return(
        <>
            <StyledLoading>
                <BounceLoader loading color="#E8833A" size={100}/>
            </StyledLoading>
            <Footer />
        </>
    )
}

const StyledLoading = styled.div`

    width: 100%;
    height: 100vh;

    background-color: white;

    display: flex;
    justify-content: center;
    align-items: center;

`