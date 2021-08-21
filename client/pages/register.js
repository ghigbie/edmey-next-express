import {useState} from 'react';
import Header from '../components/Header';
import styled from 'styled-components';

const SubmitButton = styled.input`
    width: 100%;
`


const register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleOnSubmit = e => {
        e.preventDefault();
        console.table({ name, email, password});
    };

    return (
        <>
            <Header title={'Register'}/>
            <div className="container col-md-4 offset-md-4 pb-5">
                <form onSubmit={handleOnSubmit}>
                    <input 
                        type="text" 
                        className="form-control mb-4 p4"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        placeholder='Enter Name'
                    />

                    <input 
                        type="email" 
                        className="form-control mb-4 p4"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        placeholder='Enter Email'
                    />

                    <input 
                        type="password" 
                        className="form-control mb-4 p4"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        placeholder="Enter password"
                    />

                    <SubmitButton
                        type="submit"
                        className="btn btn-block btn-primary"
                    />
                    
                </form>
            </div>
        </>
    );
}

export default register
