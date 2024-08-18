indexToIncrement = 0;
function GetAdress(){
    var CEP = document.getElementById("typedCEP").value;
    $.getJSON(`https://viacep.com.br/ws/${CEP}/json/`,(reply) =>
    {
        if (document.getElementById("typedCEP").value==""){
            CleanCEPForm();
            document.getElementById("alertPlace").innerHTML="";
            
        }
        if (("erro" in reply)){
            CleanCEPForm();
            
            console.log("erro");
            document.getElementById("alertPlace").innerHTML="";
            document.getElementById("alertPlace").innerHTML+=
            `
            <div class="alert alert-warning" id="alert">
                <strong>CEP inválido.</strong>
            </div>
            `;
            document.getElementById("number").disabled = true;

        }else{

            document.getElementById("alertPlace").innerHTML="";
            document.getElementById("adress").value = JSON.stringify(reply.logradouro).replace(/['"]+/g, '');
            document.getElementById("neighbourhood").value = JSON.stringify(reply.bairro).replace(/['"]+/g, '');
            document.getElementById("city").value = JSON.stringify(reply.localidade).replace(/['"]+/g, '');
            document.getElementById("state").value = JSON.stringify(reply.uf).replace(/['"]+/g, '');
            document.getElementById("number").disabled = false;
        }
    }
    );
};
function CleanCEPForm(){
    document.getElementById("adress").value="";
    document.getElementById("neighbourhood").value="";
    document.getElementById("city").value="";
    document.getElementById("state").value="";
    document.getElementById("number").value="";


};
function CleanInitialForm(){
    document.getElementById("name").value="";
    document.getElementById("lastName").value="";
    document.getElementById("typedCEP").value="";

};

function AddForm(){
    document.getElementById("alertPlace").innerHTML="";
    if(document.getElementById("name").value=="" || document.getElementById("lastName").value=="" || document.getElementById("typedCEP").value=="" || document.getElementById("number").value=="" ){
        console.log("erro");
        
        document.getElementById("alertPlace").innerHTML+=
        `
        <div class="alert alert-warning" id="alert">
            <strong>Formulário Inconpleto.</strong>
        </div>
        `;



    }
    else{
        indexToIncrement++;
        var fullName = document.getElementById("name").value + " " + document.getElementById("lastName").value;
        document.getElementById("dataInsertion").innerHTML+=
        `
        <div class="row text-center">   
            <div class="col-1">${indexToIncrement}</div>
            <div class="col-3">${fullName}</div>
            <div class="col-2">${document.getElementById("adress").value}${" "}${document.getElementById("number").value}</div>
            <div class="col-1">${document.getElementById("typedCEP").value}</div>
            <div class="col-2">${document.getElementById("neighbourhood").value}</div>
            <div class="col-2">${document.getElementById("city").value}</div>
            <div class="col-1">${document.getElementById("state").value}</div>
            <hr>
        </div>
        `;

    }
    CleanCEPForm();
    CleanInitialForm();
    document.getElementById("number").disabled=true;
};