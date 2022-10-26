import styled from "styled-components";

const Container = styled.div`
    height: 50px;
    width: 100%;
    color:white;
    background-color:#212E52;
    display:flex;
    align-items: center;
    justify-content: center;
`;




const Announcement = () => {
  return (
    <Container>
            Calma Calma !! You get 50% off today
    </Container>
  )
};

export default Announcement;
