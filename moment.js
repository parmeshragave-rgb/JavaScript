const moment = require('moment-timezone');

let crnttme=moment().tz("Asia/Kolkata")
console.log("Current time: ",crnttme.format("hh mm ss A z"))
console.log(crnttme.startOf("month").format("dddd-MMMM Do yyyy a z Z  hh=mm=ss"))
//console.log(crnttme.endOf("month").format("dddd -MMMM Do yyyy a z Z"))
console.log(crnttme.add(5,"days").format("dddd -MMMM Do yyyy a z Z"))

/*let antarictic=crnttme.clone().tz("Antarctica/South_Pole").format("hh:mm:ss A z")
console.log("Converted time: ",antarictic)
console.log(moment.tz.names());
let now=moment();
console.log(now.toString())*/
