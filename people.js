var Person = new Array();
Person[0] = new Array ( 1,"Pieter", "Marias", "pieter45@Gmail.com","Piet45" );
Person[1] = new Array ( 2,"Jasper", "Nortje", "Jasper22@Gmail.com","Jas22" );
Person[2] = new Array ( 3,"Susan", "Boile", "susan5@Gmail.com","SuB" );
Person[3] = new Array ( 4,"Dan", "King", "Dantheman23@Gmail.com","King75" );
Person[4] = new Array ( 5,"Joline", "Marks", "mrsmarks44@Gmail.com","Joks77" );
Person[5] = new Array ( 6,"Joy", "Everson", "joyful56@Gmail.com","Joy5" );







document.getElementById("AddButton").onclick = function Add_Person(){

    var NewPerson = new Array();
    NewPerson = [
        document.getElementById("myPID").value,
        document.getElementById("myPName").value,
        document.getElementById("myPSurname").value,
        document.getElementById("myPEmail").value,
        document.getElementById("myPUsername").value];
    


    Person.push(NewPerson);

    var pval = "";
                
                for(i = 0; i < Person.length; i++)
                {
                    pval = pval + Person[i] + "<br/>";
                }

                document.getElementById('pText').innerHTML = pval;

}
let btnGet = document.querySelector('#view');
let myTable = document.querySelector('#table');


let headers = ['ID', 'Name','Surname','Email','Username'];

btnGet.addEventListener('click', () => {
    $("#table").empty();
    let table = document.createElement('table');
    let headerRow = document.createElement('tr');

    headers.forEach(headerText => {
        let header = document.createElement('th');
        let textNode = document.createTextNode(headerText);
        header.appendChild(textNode);
        headerRow.appendChild(header);
    });

    table.appendChild(headerRow);

    Person.forEach(peop => {
        let row = document.createElement('tr');

        Object.values(peop).forEach(text => {
            let cell = document.createElement('td');
            let textNode = document.createTextNode(text);
            cell.appendChild(textNode);
            row.appendChild(cell);
        })

        table.appendChild(row);
    });

    myTable.appendChild(table);
});

document.getElementById("btnClear").onclick = function Clearfields(){
    
    let inputs = document.querySelectorAll('input');

    btnClear.addEventListener('click', () =>{
                                             
         inputs.forEach(input => input. value = '');
    
    })

}







           