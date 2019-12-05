import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import chart from '../../assets/bar-chart.svg';

const { Header, Content, Footer, Sider } = Layout;

class Sidebar extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Layout>
                    <Sider 
                        style = {{overflow: 'auto',
                            background : '#004156',
                            height: '100vh',
                            position: 'fixed',
                            left: 0,
                            
                            }}>
                            <div>
                            <h4 className = 'header-logo' >
                              Colation System
                            </h4>
                            </div>
                            <Menu theme = 'dark' mode = 'inline' >
                                <Menu.Item key = '1'  >
                                    
                                  

                                </Menu.Item>
                            </Menu>

                    </Sider>
                </Layout>
            </div>
         );
    }
}
 
export default Sidebar;