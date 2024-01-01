export const getPerfectDateValue = (action: string) => {
  const date = new Date();
  switch (action) {
    case "date":
      return date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();

    case "month":
      return date.getMonth() < 10
        ? `0${date.getMonth() + 1}`
        : date.getMonth() + 1;

    case "year":
      return date.getFullYear();

    case "hour":
      return date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();

    case "minute":
      return date.getMinutes() < 10
        ? `0${date.getMinutes()}`
        : date.getMinutes();

    case "second":
      return date.getSeconds() < 10
        ? `0${date.getSeconds()}`
        : date.getSeconds();

    default:
      return console.error("Invalid action");
  }
};
