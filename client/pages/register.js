import {useState} from 'react';
import axios from 'axios';
import Header from '../components/Header';
import styled from 'styled-components';
import {toast} from 'react-toastify';

const SubmitButton = styled.input.attrs(() => ({
  className: 'btn btn-block btn-primary',
}))`
    width: 100%;
`;


const register = () => {
    const [name, setName] = useState('Test USER');
    const [email, setEmail] = useState('testesttest@test.com');
    const [password, setPassword] = useState('testtesttest');

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        try{
            const {data} = await axios.post(`http://localhost:8000/api/register`, {
                name,
                email,
                password
            });
            console.table("REGISTER RESPONSE", data);
            toast.success('Registration successful. Please login');
        }catch(err){
            toast.error(err.response.data);
        }
    };

    toast.success()

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

                    <input
                        type="submit" 
                        className='btn btn-block btn-primary'
                        style={{ width: '100%'}}
                    />
                    
                </form>
            </div>
        </>
    );
}

export default register
