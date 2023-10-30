export const getToken = () => {
    const userDataString = localStorage.getItem('userData');
    let userData = JSON.parse(userDataString);
    return userData?.token
}