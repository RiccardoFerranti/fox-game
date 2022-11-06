const formatCurrentDate = (date: any) => {
  const day = date.getDate();
  const month = date.toLocaleString('default', { month: 'short' });
  const year = date.getFullYear();

  // This arrangement can be altered based on how we want the date's format to appear.
  const currentDate = `${year}, ${month} ${day}`;
  
  return currentDate
}

export default formatCurrentDate;
