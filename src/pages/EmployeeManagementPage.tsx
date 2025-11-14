import { useState } from 'react';
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import {
    EmployeeTable
} from '../features/employees';
import EmployeeModal from '../features/employees/components/EmployeeModal';

const EmployeeManagementPage: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <div style={{ marginBottom: 16 }}>
                <Button
                    type="primary"
                    icon={<PlusOutlined />}
                    onClick={showModal}
                >
                    Thêm Nhân Viên
                </Button>
            </div>
            <EmployeeTable />
            <EmployeeModal
                open={isModalOpen}
                onCancel={handleCancel}
                editData={null}
            />
        </>
    )
}

export default EmployeeManagementPage;