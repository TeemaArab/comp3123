
const Employee = require('../dbModels/employeeModel');

// to get all employees
exports.getEmployees = (req, res) => {
    Employee.find()  // get all employees from the database
    .then(employees => {
        res.status(200).json(employees);
    })
    .catch(error => {
        res.status(500).json({message: 'Server error while getting employees', error});
    });
};

// to add an employee
exports.addEmployee =(req, res) => {
    const{first_name, last_name, email, position, salary, date_of_joining, department} = req.body;//

    // create a new employee
    const newEmployee = new Employee({
        first_name, last_name, email, position, salary, date_of_joining, department});

    // we have to save the employee in the database
    newEmployee.save()
    .then(() => {
        res.status(201).json({message: 'Employee added successfully', employee_id: newEmployee._id});
    })
    .catch(error => {
        res.status(500).json({message: 'Server error while adding employee', error});
    });
    };

    // to get an employee by Id
    exports.getEmployee = (req, res) => {
        const employeeId = req.params.eid;  // get employee from the url

        Employee.findById(employeeId)  // get employee by Id from the database
        .then(employee => {
            if(!employee){
                return res.status(404).json({message: 'Employee not found'});
            }
            res.status(200).json(employee);
        })
        .catch(error => {
            res.status(500).json({message: 'Server error while getting employee', error});
        });
    };

    // to update employee details by Id
    exports.updateEmployee = (req, res) => {
        const employeeId = req.params.eid;  // get employee from the ur

        Employee.findByIdAndUpdate(employeeId, req.body, {new: true})  
        .then(updatedEmployee =>{
            if(!updatedEmployee){
                return res.status(404).json({message: 'Employee not found'});
            }
            res.status(200).json({message: 'Employee updated successfully', updatedEmployee});
        })
        .catch(error => {
            res.status(500).json({message: 'Server error while updating employee'});
        });
    };


    // to delete employee by Id
    exports.deleteEmployee = (req, res) => {
        const employeeId = req.params.eid;  // get employee from the url

        Employee.findByIdAndDelete(employeeId)  // find and delete employee by Id from the database
        .then(deletedEmployee => {
            if(!deletedEmployee){
                return res.status(404).json({message: 'Employee not found'});
            }
            res.status(200).json({message: 'Employee deleted successfully'});
        })
        .catch(error => {
            res.status(500).json({message: 'Server error while deleting employee', error});
        });
    };