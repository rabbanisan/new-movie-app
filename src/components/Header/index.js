import React from 'react';
import { Menu, Button } from 'antd';
import "./style.scss";
export default class Header extends React.Component {

    state = {
        current: 'mail',
    };

    handleClick = e => {
        console.log(e);
        this.setState({ current: e.key });
    };

    render() {
        const { current } = this.state;
        return (
            <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
                <Menu.Item key="logo" className="border-bottom-none">
                    <img
                        src={require("assets/images/movie-app.svg")}
                        alt="Movie App"
                    />
                </Menu.Item>
                <Menu.Item className="flex-grow-1" />
                <Menu.Item key="mail">
                    Home
                </Menu.Item>
                <Menu.Item key="about">
                    About
                </Menu.Item>
                <Menu.Item key="news">
                    News
                </Menu.Item>
                <Menu.Item key="discover">
                    Discover
                </Menu.Item>
                <Menu.Item key="community">
                    Community
                </Menu.Item>
                <Menu.Item key="login">
                    <Button shape="round" type="primary">
                        Login or Register
                    </Button>
                </Menu.Item>
            </Menu>
        );
    }
}
