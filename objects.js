
const bouncer = (age) => {
    if (age >= 21) {
        console.log('DRINK (at the bar)')
        // do the thing
    } else {
        console.log('SHAME')
        // do the other thing
    }
}

bouncer(12);
bouncer(93);

const me = 'martin';
console.log(me.length);

// objects

const myObject ={
    name: 'john',
    age: '41',
}

console.log(myObject['name'])
console.log(myObject.name)

console.dir(myObject)

// Challenge



const findAndLogEmployeeStatus = (employee) => {
    if (employee.name.charAt(0).toLowerCase() === 'm') {
        employee.status = 'VIP'
    } else {
        employee.status = 'peasant'
    }
    console.log(`${employee.name} is a total ${employee.status}`)
    return employee;
}

const person = {
    name: 'Michael',
    status: ''
}

findAndLogEmployeeStatus(person)
findAndLogEmployeeStatus({
    name: 'lester',
    status: ''
})
findAndLogEmployeeStatus({
    name: 'carl clark',
    status: ''
})
// findAndLogEmployeeStatus({
    // name: prompt('Enter employee name'),
    // status: ''
})

