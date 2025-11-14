import React, { useState } from 'react';
import { Space, Table, message } from 'antd';
import type { TableProps } from 'antd';
import type { DataType } from '../types';
import { useEmployee } from '../../../contexts/EmployeeContext';
import EmployeeModal from './EmployeeModal';
import { Popconfirm } from 'antd';

const EmployeeTable: React.FC = () => {
    const { employees, deleteEmployee } = useEmployee();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingEmployee, setEditingEmployee] = useState<DataType | null>(null);
    const [messageApi, contextHolder] = message.useMessage();

    const text = 'Are you sure to delete this employee?';
    const description = 'Delete the employee';

    const handleEdit = (record: DataType) => {
        setEditingEmployee(record);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setEditingEmployee(null);
    };

    const handleDelete = (employeeId: string) => {
        deleteEmployee(employeeId);
        messageApi.success('Xóa nhân viên thành công!');
    };

    const columns: TableProps<DataType>['columns'] = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            sorter: (a, b) => a.name.localeCompare(b.name),
            sortDirections: ['ascend', 'descend'],
        },
        {
            title: 'Date of Birth',
            dataIndex: 'dateOfBirth',
            key: 'dateOfBirth',
        },
        {
            title: 'Gender',
            dataIndex: 'gender',
            key: 'gender',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
            sorter: (a, b) => a.address.localeCompare(b.address),
            sortDirections: ['ascend', 'descend'],
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <a onClick={() => {
                        handleEdit(record);
                    }}>Edit</a>
                    <Popconfirm
                        placement="topLeft"
                        title={text}
                        description={description}
                        okText="Yes"
                        cancelText="No"
                        onConfirm={() => handleDelete(record.id)}
                    >
                        <a>Delete</a>
                    </Popconfirm>
                </Space>
            ),
        },
    ];

    return (
        <>{contextHolder}
            <h2 style={{ marginBottom: 16 }}>Quản lý Nhân Viên</h2>
            <Table<DataType> columns={columns} dataSource={employees} />
            <EmployeeModal
                open={isModalOpen}
                onCancel={handleCloseModal}
                editData={editingEmployee}
            />
        </>
    )
}




export default EmployeeTable;