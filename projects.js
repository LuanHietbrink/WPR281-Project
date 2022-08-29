var Project = new Array();
Project[0] = new Array ( 1,"Loading Screen project","Changing the loadingscreen for upcoming event");
Project[1] = new Array ( 2,"Video Buffering project","Fixing network errors that occurs while streaming videos");
Project[2] = new Array ( 3,"Abnormal Operating System","Oparating system is functioning abnormally");
Project[3] = new Array ( 4,"Blank Screen","Screen is not responsive only blank");
Project[4] = new Array ( 5,"Computer slow","Computer is very slow for unknown reasons");
Project[5] = new Array ( 6,"Login Problem","Login crashes computer");
Project[6] = new Array ( 7,"Google loding error","Google is not loding");
Project[7] = new Array ( 8,"Strange Noises","On reboot computer gives off stranges noises");







document.getElementById("AddButton").onclick = function Add_Project(){

    

    var NewProject = new Array();
    NewProject = [
        document.getElementById("ProjectID").value,
        document.getElementById("ProjectName").value,
        document.getElementById("ProjectDetails").value];
    


    Project.push(NewProject);

    var pval = "";
                
                for(i = 0; i < Project.length; i++)
                {
                    pval = pval + Project[i] + "<br/>";
                }
                
                document.getElementById('pText').innerHTML = pval;

}

let btnGet = document.querySelector('#view');
let myTable = document.querySelector('#table');


let headers = ['ID', 'Project Name','Details'];

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

    Project.forEach(peop => {
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

document.getElementById("ClearButton").onclick = function Clearfields(){
    
    let inputs = document.querySelectorAll('input');

    ClearButton.addEventListener('click', () =>{
                                             
         inputs.forEach(input => input. value = '');
    
    })

}