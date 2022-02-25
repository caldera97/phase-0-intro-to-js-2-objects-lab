const employee = {
    "name": null,
    "streetAddress": null
};

const updateEmployeeWithKeyAndValue = (employee, key, value) => {
    let update= {...employee}
    //Object.defineProperty(update, key, {value: value})
    update[key] = value;
    return update
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

const deleteFromEmployeeByKey = (employee, key) => {
    let update = {...employee}
    delete update[key]
    return update
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]
    return employee
}