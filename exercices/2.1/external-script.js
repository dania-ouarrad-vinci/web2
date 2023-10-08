function addDateTime(message){
    const dateTimNow = new Date;
    const result = dateTimNow.toLocaleDateString() + " " + dateTimNow.toLocaleTimeString() + " : " + message;
    return result;
}

alert(addDateTime("his is the best moment to have a look at this website !"));