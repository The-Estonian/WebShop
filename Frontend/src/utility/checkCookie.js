export const checkForCookie = () => {
  const cookies = document.cookie.split('; ');
  const token = cookies.find((cookie) => cookie.startsWith('devpipe_token='));
  console.log(cookies);

  if (token) {
    return true;
  } else {
    return false;
  }
};
