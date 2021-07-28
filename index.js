/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function createEmployeeRecord(employeeData){
    return {
        firstName : employeeData[0],
        familyName: employeeData[1],
        title: employeeData[2],
        payPerHour: employeeData[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

function createEmployeeRecords(records){
    return records.map(record => createEmployeeRecord(record))
}

function createTimeInEvent(dateTime){
    let dataArray = dateTime.split(" ");
    const type = 'TimeIn';
    const date = dataArray[0]
    const hour = parseInt(dataArray[1])
    this.timeInEvents.push(
        {
        type: type, 
        date: date, 
        hour: hour
    })
    return this
}

function createTimeOutEvent(dateTime){
let dataArray = dateTime.split(" ")
const type = 'TimeOut';
const date = dataArray[0];
const hour = dataArray[1];
    this.timeOutEvents.push({
        type: type,
        date: date,
        hour: parseInt(hour)
    })
    return this
}

function hoursWorkedOnDate(date){
    const timeInEvent = this.timeInEvents.filter(event => event.date === date);
    const timeOutEvent = this.timeOutEvents.filter(event => event.date === date);
    let hoursWorked = (timeOutEvent[0].hour - timeInEvent[0].hour) / 100
    return hoursWorked 
}

function wagesEarnedOnDate(date){
    return hoursWorkedOnDate.call(this, date) * this.payPerHour
}

function calculatePayroll(arrayOfEmployees){
    return arrayOfEmployees.reduce((sum, employee) => sum + allWagesFor.call(employee),0)
}

function findEmployeeByFirstName(object, firstName){
    let onePerson = object.filter(person => firstName === person.firstName);
    return onePerson[0]
}