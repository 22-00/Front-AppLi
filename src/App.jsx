import { Route, Routes } from 'react-router-dom'
import './App.css'
import { useState } from 'react';
import { TableAnt } from './components/TableAnt/TableAnt'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';

import { Breadcrumb, Button, Layout, theme } from 'antd';
import { Logo } from './components/Navigation/Logo';
import { MenuList } from './components/Navigation/MenuList';
import { ToggleThemeButton } from './components/Navigation/ToggleThemeButton';
import { Home } from './components/Home/Home';
import { UserMenu } from './components/TopBar/UserMenu';

const { Header, Content, Footer, Sider } = Layout;

function App() {

  const [collapsed, setCollapsed] = useState(false);
  const [darkTheme, setDarkTheme] = useState(true);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme)
  }
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider 
        collapsed={collapsed}
        trigger={null}
        collapsible
        className='text-white'
        theme={darkTheme ? 'dark' : 'light' } >
        <Logo />
        <MenuList darkTheme={darkTheme} />
        <ToggleThemeButton darkTheme={darkTheme} toggleTheme={toggleTheme}/>
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
            display:'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <Button
             type='text'
              icon={ collapsed ?
             <MenuUnfoldOutlined/> :
             <MenuFoldOutlined/>
             }
             onClick={() => setCollapsed(!collapsed)}
             className=''
             >
             </Button>
             <UserMenu/> 
        </Header>
        <Content
          style={{
            margin: '0 16px',
          }}
        >
          <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/TableAnt' element={<TableAnt/>} />
            </Routes>
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Horacio Cano ©{new Date().getFullYear()} Creacion de Horacio
        </Footer>
      </Layout>
    </Layout>

  )
}

export default App
