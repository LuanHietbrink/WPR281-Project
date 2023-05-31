var testDescription = "Test1";
var testSeverity = "Medium";
var testAssigned = "Johan";

var arrTickets = [];

function Ticket(id, description, assigned, severity){
    this.id = id;
    this.description = description;
    this.assigned = assigned;
    this.severity = severity;
}

const testTicket = new Ticket(0, testDescription, testAssigned, testSeverity);


arrTickets.push(testTicket);


function Save(){
    var NewDescription = document.getElementById("description").value;
    var NewSeverity = document.getElementById("severity").value;
    var NewAssign = document.getElementById("assigned").value
    
    const NewTicket = new Ticket(arrTickets.length, NewDescription,  NewAssign, NewSeverity);
    arrTickets.push(NewTicket);

    for (let i = 0; i < arrTickets.length; i++) {
        localStorage.setItem(i, JSON.stringify(arrTickets[i]));
    }
}


function DisplayAll(){
    
    var output;
    var par;
    var display;
    display = document.getElementById("tickets");
    display.replaceChildren();
    
    for (let i = 0; i < arrTickets.length; i++) {
        var ticketDisplay = JSON.parse(localStorage.getItem(i));

        var displayDescription = ticketDisplay.description;
        var displayAssigned = ticketDisplay.assigned;
        var displaySeverity = ticketDisplay.severity;
        
        par = document.createElement("div");
        var headTic = document.createElement("h1");
        headTic.innerHTML = "Tickets";
        par.innerHTML = "<b>ID: " + i + "</b> <br>"+ "<b>Description:</b> <br>" + displayDescription + "<br><b>Severity:</b> <br>" + displaySeverity + "<br><b>Assigned by:</b> <br>" + displayAssigned + "<br> <br>";
        
        if (i == 0) {
            display.appendChild(headTic);
        }
        
        display.appendChild(par);
    }
    
}

function DisplaySelected(){
    var output = "";
    let userin = 1*prompt("Please enter id of ticket you wish to view");

    var par;
    var display;
    display = document.getElementById("tickets");
    display.replaceChildren();

    for (let i = 0; i < arrTickets.length; i++) {
        if (userin === i) {
            var ticketDisplay = JSON.parse(localStorage.getItem(i));

            var displayDescription = ticketDisplay.description;
            var displayAssigned = ticketDisplay.assigned;
            var displaySeverity = ticketDisplay.severity;
            
            par = document.createElement("div");
            var headTic = document.createElement("h1");
            headTic.innerHTML = "Tickets";
            par.innerHTML = "<b>ID: " + i + "</b> <br>"+ "<b>Description:</b> <br>" + displayDescription + "<br><b>Severity:</b> <br>" + displaySeverity + "<br><b>Assigned by:</b> <br>" + displayAssigned + "<br> <br>";
            
        
            display.appendChild(headTic);
            
            
            display.appendChild(par);
        }
        

    }
}

