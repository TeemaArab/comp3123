const express = require ('express');
const getEmployees = require('../controllers/employeeController').getEmployees;
const addEmployee = require('../controllers/employeeController').addEmployee;
const getEmployee = require('../controllers/employeeController').getEmployee;
const updateEmployee = require('../controllers/employeeController').updateEmployee;
const deleteEmployee = require('../controllers/employeeController').deleteEmployee;

const router = express.Router();

router.get('/', getEmployees);
router.post('/', addEmployee);
router.get('/:eid', getEmployee);
router.put('/:eid', updateEmployee);// update employee details by Id
router.delete('/:eid', deleteEmployee);// delete employee by Id

module.exports = router;