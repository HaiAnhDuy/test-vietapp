import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import type { DataType } from '../features/employees/types';
import { data } from '../data';
interface EmployeeContextType {
    employees: DataType[];
    addEmployee: (employee: DataType) => void;
    updateEmployee: (employee: DataType) => void;
    deleteEmployee: (employeeId: string) => void;

}
const EmployeeContext = createContext<EmployeeContextType | undefined>(undefined);
interface EmployeeProviderProps {
    children: ReactNode; // 'children' là các component con
}

export const EmployeeProvider = ({ children }: EmployeeProviderProps) => {
    const [employees, setEmployees] = useState<DataType[]>(data);

    const addEmployee = (employee: DataType) => {
        setEmployees([...employees, employee]);
    };

    const updateEmployee = (updatedEmployee: DataType) => {
        setEmployees(employees.map(emp => emp.id === updatedEmployee.id ? updatedEmployee : emp));
    }
    const deleteEmployee = (employeeId: string) => {
        setEmployees(employees.filter(emp => emp.id !== employeeId));
    }

    const value = {
        employees,
        addEmployee,
        updateEmployee,
        deleteEmployee
    };

    return (
        <EmployeeContext.Provider value={value}>
            {children}
        </EmployeeContext.Provider>
    );
};

export const useEmployee = () => {
    const context = useContext(EmployeeContext);
    if (context === undefined) {
        throw new Error('useEmployee must be used within a EmployeeProvider');
    }

    return context;
};