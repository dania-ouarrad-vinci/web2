function addDateTime(message){
    console.log(message);
    const dateTimNow = new Date;
    const result = dateTimNow.toLocaleDateString() + " " + dateTimNow.toLocaleTimeString() + " : " + message;
    console.log(result);
    return result;
}

alert(addDateTime("This is the best moment to have a look at this website !"));

