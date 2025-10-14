let moment=require('moment')
console.log(moment().date(10).toString())
console.log(moment().date().toString())

console.log(moment().format('DD|MM|YYYY'))
let moment1 = moment().year(2019).month(6).date(5);
let date10=moment1.date(-10);
console.log(date10.toString())