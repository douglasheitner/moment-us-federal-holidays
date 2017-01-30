//Days:   Sunday-Saturday (0-6)
//Months: January-December (0-11)

var year = moment().year();

// New Year's Day - January 1
var newYears = moment('1/1/'+year).day();
switch (newYears) {
  case 0: //Sunday
    newYears = moment('1/1/'+year).day(1).format('L');
    break;
  case 6: //Saturday
    newYears = moment('1/1/'+year).day(5).format('L');
    break;
  default:
    newYears = moment('1/1/'+year).format('L');
}

// Martin Luther King, Jr. Day - Third Monday in January
var martinLutherKingJrDay = moment('1/1/'+year).day(1);
switch (martinLutherKingJrDay.month()) {
  case 11:
    martinLutherKingJrDay = moment('1/1/'+year).day(22).format('L');
    break;
  default:
    martinLutherKingJrDay = moment('1/1/'+year).day(15).format('L');
}


// George Washington’s Birthday - Third Monday in February
var washingtonBirthday = moment('2/1/'+year).day(1);
switch (washingtonBirthday.month()) {
  case 0:
    washingtonBirthday = moment('2/1/'+year).day(22).format('L');
    break;
  default:
    washingtonBirthday = moment('2/1/'+year).day(15).format('L');
}

// Memorial Day - Last Monday in May
var memorialDay = moment('5/31/'+year).day(1);
switch (memorialDay.month()) {
  case 5: //June
    memorialDay = moment('5/31/'+year).day(-6).format('L');
    break;
  default:
    memorialDay = moment('5/31/'+year).day(1).format('L');
}

// Independence Day - July 4
var indepenceDay = moment('7/4/'+year).day();
switch (indepenceDay) {
  case 0: //Sunday
    indepenceDay = moment('7/4/'+year).day(1).format('L');
    break;
  case 6: //Saturday
    indepenceDay = moment('7/4/'+year).day(5).format('L');
    break;
  default:
    indepenceDay = moment('7/4/'+year).format('L');
}

// Labor Day - First Monday in September
var laborDay = moment('9/1/'+year).day(1);
switch (laborDay.month()) {
  case 7: //August
    laborDay = moment('9/1/'+year).day(8).format('L');
    break;
  default:
    laborDay = moment('9/1/'+year).day(1).format('L');
}

// Columbus Day - Second Monday in October
var columbusDay = moment('10/1/'+year).day(1);
switch (columbusDay.month()) {
  case 8: //September
    columbusDay = moment('10/1/'+year).day(15).format('L');
    break;
  default:
    columbusDay = moment('10/1/'+year).day(8).format('L');
}

// Veterans Day - November 11
var veteransDay = moment('11/11/'+year).day();
switch (veteransDay) {
  case 0: //Sunday
    veteransDay = moment('11/11/'+year).day(1).format('L');
    break;
  case 6: //Saturday
    veteransDay = moment('11/11/'+year).day(5).format('L');
    break;
  default:
    veteransDay = moment('11/11/'+year).format('L');
}

// Thanksgiving Day - 4th Thursday in November
var thanksgivingDay = moment('11/1/'+year).day(4);
switch (thanksgivingDay.month()) {
  case 9: //October
    thanksgivingDay = moment('11/1/'+year).day(32).format('L');
    break;
  default:
    thanksgivingDay = moment('11/1/'+year).day(25).format('L');
}
// Christmas Day - December 25
var christmasDay = moment('12/25/'+year).day();
switch (christmasDay) {
  case 0: //Sunday
    christmasDay = moment('12/25/'+year).day(1).format('L');
    break;
  case 6: //Saturday
    christmasDay = moment('12/25/'+year).day(5).format('L');
    break;
  default:
    christmasDay = moment('12/25/'+year).format('L');
}

// Take moment date format L, e.g. "2012"
function isNationalHoliday(date){
  var holidays = [
      newYears,
      martinLutherKingJrDay,
      washingtonBirthday,
      memorialDay,
      indepenceDay,
      laborDay,
      columbusDay,
      veteransDay,
      thanksgivingDay,
      christmasDay
    ];

  return holidays.includes(date);
}
