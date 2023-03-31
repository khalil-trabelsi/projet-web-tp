export const parseRequestUrl = () => {
    const url = document.location.hash.toLowerCase();
    const request = url.split("/");
    return {
        resource: request[1],
        id: request[2],
        action: request[3]
    }

}



export const transformDate = (datep) => {
    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const date = new Date(datep);
    return month[date.getMonth()].slice(0, 3) + " " + date.getDate() + ", " + date.getFullYear();
}