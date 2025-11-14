import { Layout } from 'antd';
import { Routes, Route } from 'react-router-dom';
import FooterLayout from './components/layout/Footer';
import HeaderLayout from './components/layout/Header';
import SideBarLayout from './components/layout/SideBar';
import EmployeeManagementPage from './pages/EmployeeManagementPage';

const { Content } = Layout;


const App = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <SideBarLayout />
      <Layout>
        <HeaderLayout />
        <Content style={{ margin: '16px' }}>
          <div style={{ padding: 24, minHeight: 360, background: '#fff' }}>
            <Routes>
              <Route path="/" element={<EmployeeManagementPage />} />
            </Routes>

          </div>
        </Content>

        <FooterLayout />
      </Layout>
    </Layout>
  );
};

export default App;