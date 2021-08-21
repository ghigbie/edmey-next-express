import { Menu } from 'antd';
import Link from 'next/link';
import {AppstoreOutlined, LoginOutlined, UserAddOutlined} from '@ant-design/icons';

const { Item } = Menu;

const TopNav = () => (
        <Menu mode="horizontal">
            <Item icon={<AppstoreOutlined/>} key={'/'}>
                <Link href="/">
                    <a>Edemy</a>
                </Link>
            </Item>
            <Item icon={<LoginOutlined/>} key={'/login'}>
                <Link href="/login">
                    <a>Login</a>
                </Link>
            </Item>
           <Item icon={<UserAddOutlined/>} key={'/register'}>
                <Link href="/register">
                    <a>Register</a>
                </Link>
            </Item>
        </Menu>
    );

export default TopNav;
