import { Modal, Form, Input, DatePicker, Select, message } from 'antd';
import { useEffect } from 'react';
import type { DataType } from '../types';
import { useEmployee } from '../../../contexts/EmployeeContext';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);

interface EmployeeModalProps {
    open: boolean;
    onCancel: () => void;
    editData: DataType | null;
}

const EmployeeModal = ({ open, onCancel, editData }: EmployeeModalProps) => {
    const [form] = Form.useForm();
    const { addEmployee, updateEmployee } = useEmployee();
    const [messageApi, contextHolder] = message.useMessage();
    const isEditMode = !!editData;

    useEffect(() => {
        if (open && editData) {
            form.setFieldsValue({
                id: editData.id,
                name: editData.name,
                dateOfBirth: dayjs(editData.dateOfBirth, 'DD/MM/YYYY'),
                gender: editData.gender,
                email: editData.email,
                address: editData.address,
            });
        } else if (open && !editData) {
            form.resetFields();
        }
    }, [open, editData, form]);

    const addSuccessMessage = () => {
        messageApi.success(isEditMode ? 'Cập nhật nhân viên thành công!' : 'Thêm nhân viên thành công!');
    };
    const addFailMessage = () => {
        messageApi.error(isEditMode ? 'Cập nhật nhân viên thất bại!' : 'Thêm nhân viên thất bại!');
    }

    const handleOk = async () => {
        try {
            const values = await form.validateFields();

            if (isEditMode) {
                console.log('Update employee:', values);
                const updatedEmployee: DataType = {
                    key: editData!.key,
                    id: editData!.id,
                    name: values.name,
                    dateOfBirth: values.dateOfBirth.format('DD/MM/YYYY'),
                    gender: values.gender,
                    email: values.email,
                    address: values.address,

                }
                updateEmployee(updatedEmployee)
                messageApi.success('Cập nhật nhân viên thành công!');
            } else {
                // Tạo employee mới
                const newEmployee: DataType = {
                    key: Date.now().toString(),
                    id: Date.now().toString(),
                    name: values.name,
                    dateOfBirth: values.dateOfBirth.format('DD/MM/YYYY'),
                    gender: values.gender,
                    email: values.email,
                    address: values.address,
                };

                addEmployee(newEmployee);
                addSuccessMessage();
            }

            form.resetFields();
            onCancel();
        } catch (error) {
            console.error('Validation failed:', error);
            addFailMessage();
        }
    };

    const handleCancel = () => {
        form.resetFields();
        onCancel();
    };

    return (
        <>
            {contextHolder}
            <Modal
                title={isEditMode ? "Chỉnh Sửa Nhân Viên" : "Thêm Nhân Viên Mới"}
                open={open}
                onOk={handleOk}
                onCancel={handleCancel}
                okText={isEditMode ? "Cập Nhật" : "Thêm"}
                cancelText="Hủy"
                width={600}
            >
                <Form
                    form={form}
                    layout="vertical"
                    autoComplete="off"
                >
                    <Form.Item
                        label="Id"
                        name="id"

                    >
                        <Input disabled />
                    </Form.Item>
                    <Form.Item
                        label="Tên"
                        name="name"
                        rules={[
                            { required: true, message: 'Vui lòng nhập tên nhân viên!' },
                            { min: 2, message: 'Tên phải có ít nhất 2 ký tự!' }
                        ]}
                    >
                        <Input placeholder="Nhập tên nhân viên" />
                    </Form.Item>

                    <Form.Item
                        label="Ngày Sinh"
                        name="dateOfBirth"
                        rules={[
                            { required: true, message: 'Vui lòng chọn ngày sinh!' },
                        ]}
                    >
                        <DatePicker
                            format="DD/MM/YYYY"
                            placeholder="Chọn ngày sinh"
                            style={{ width: '100%' }}
                            disabledDate={(current) => {
                                return current && current > dayjs().endOf('day');
                            }}
                        />
                    </Form.Item>

                    <Form.Item
                        label="Giới Tính"
                        name="gender"
                        rules={[
                            { required: true, message: 'Vui lòng chọn giới tính!' }
                        ]}
                    >
                        <Select placeholder="Chọn giới tính">
                            <Select.Option value="Male">Nam</Select.Option>
                            <Select.Option value="Female">Nữ</Select.Option>
                            <Select.Option value="Other">Khác</Select.Option>
                        </Select>
                    </Form.Item>

                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                            { required: true, message: 'Vui lòng nhập email!' },
                            { type: 'email', message: 'Email không hợp lệ!' }
                        ]}
                    >
                        <Input placeholder="Nhập email" />
                    </Form.Item>

                    <Form.Item
                        label="Địa Chỉ"
                        name="address"
                        rules={[
                            { required: true, message: 'Vui lòng nhập địa chỉ!' },
                            { min: 5, message: 'Địa chỉ phải có ít nhất 5 ký tự!' }
                        ]}
                    >
                        <Input.TextArea
                            rows={3}
                            placeholder="Nhập địa chỉ"
                        />
                    </Form.Item>
                </Form>
            </Modal>

        </>

    );
};

export default EmployeeModal;