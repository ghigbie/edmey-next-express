import styled from 'styled-components';
import Header from '../components/Header';

const Info = styled.p`
    color: red;
`;

const index = () => {
    return (
        <>
            <Header title={'Edemy Markeplace'}/>
            <Info>from next js...</Info>
        </>
    );
}

export default index
