export const getDateFromMiliseconds = (miliseconds)=>{
  const date = new Date(miliseconds);
  var year = date.getFullYear();
  var month = (date.getMonth() + 1);
  var day = (date.getDate());
  return { year, month, day };
};
export const greaterOrEqualDates = (date1Ms, date2Ms)=>{
  let date1 = getDateFromMiliseconds(date1Ms);
  let date2 = getDateFromMiliseconds(date2Ms);
  return date1.year >= date2.year && date1.month >= date2.month && date1.day >= date2.day;
};
export const smallerOrEqualDates = (date1Ms, date2Ms)=>{
  let date1 = getDateFromMiliseconds(date1Ms);
  let date2 = getDateFromMiliseconds(date2Ms);
  return date1.year <= date2.year && date1.month <= date2.month && date1.day <= date2.day;
};
