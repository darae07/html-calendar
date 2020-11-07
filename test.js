const today = new Date();
const year = today.getFullYear();
function thisMonth() {
  const month = today.getMonth();
  return month < 9 ? "0" + month + 1 : month + 1 + "";
}
const month = thisMonth();
const fistDayIndex = new Date(`${year}-${month}-01`).getDay();

const calDic = {
  1: 31,
  2: 28,
  3: 31,
  4: 30,
  5: 31,
  6: 30,
  7: 31,
  8: 31,
  9: 30,
  10: 31,
  11: 30,
  12: 31,
};
const weekDic = ["일", "월", "화", "수", "목", "금", "토"];
var day = 1;
function makeFirstWeek() {
  day = 1;
  let firstWeek = [];
  i = 0;
  while (i < 7) {
    if (i < fistDayIndex) {
      firstWeek.unshift(calDic[month - 1] - i);
    } else {
      firstWeek.push(day);
      day += 1;
    }
    i += 1;
  }
  return firstWeek;
}

function makeCalendar() {
  let calenda = [];
  calenda.push(makeFirstWeek());
  let m = calDic[month * 1];
  let week = [];
  let nDay = 1;
  while (day <= m) {
    week.push(day);
    day += 1;
    if (week.length === 7) {
      calenda.push(week);
      week = [];
    }
  }
  return calenda;
}
let calenda = makeCalendar();
console.log(calenda);
