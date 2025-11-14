
import { Layout, Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Sider } = Layout;
// Menu item
const items = [
    {
        key: '1',
        icon: <UserOutlined />,
        label: (
            <Link to="/">Quản lý Nhân viên</Link>
        ),
    },
    {
        key: '2',
        icon: <UserOutlined />,
        label: (
            <Link to="/">Khác</Link>
        ),
    },
];

const SideBarLayout = () => {
    return (
        <>
            <Sider collapsible>
                <div className="logo" />
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
            </Sider>
        </>
    )
}

export default SideBarLayout;