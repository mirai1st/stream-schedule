let stream_title = [];
let dateObj = [];
let output = "";
let check = false;

document.getElementById("submit").addEventListener("click", DoSubmit);

function DoSubmit(){
    getTitle();
    console.log("click");
    document.getElementById("output").innerText = output;
}

function getTitle(){
    output = ""; //Reset Variable

    for (let i = 1; i < 8; i++) {
        stream_title[i] = document.getElementById("stream-title" + i).value;
        dateObj[i] = new Date(document.getElementById("date" + i).value + "T" + document.getElementById("time" + i).value);
        
        const formatter = new Intl.DateTimeFormat("en-US", {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        
        const formattedDate = formatter.format(dateObj[i]); //format into day, month day-numeric, year (Thursday, January 1, 1970)

        if (stream_title[i] != "") {
            output += "<t:" + Math.floor(dateObj[i].getTime() / 1000) + ":F> - <t:" + Math.floor(dateObj[i].getTime() / 1000) + ":R> - " + stream_title[i] + "\n";
        } else {
            output += formattedDate + " - Offline \n";
        }
    }
}

function autoFill() {
    check = document.getElementById("autofill").checked;
    //console.log(check);    
    const formatter = new Intl.DateTimeFormat("en-GB"); //format into dd-mm-yyyy

    date = new Date(document.getElementById("date1").value);

    //TODO: Make a function the convert date into input value
    for (let i = 1; i < 8; i++) {
        date.setDate(date.getDate() + 1); // <- This sends a epoch value idk why???
    }
    
}