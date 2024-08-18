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

        }else{

            document.getElementById("alertPlace").innerHTML="";
            document.getElementById("adress").value = JSON.stringify(reply.logradouro).replace(/['"]+/g, '');
            document.getElementById("neighbourhood").value = JSON.stringify(reply.bairro).replace(/['"]+/g, '');
            document.getElementById("city").value = JSON.stringify(reply.localidade).replace(/['"]+/g, '');
            document.getElementById("state").value = JSON.stringify(reply.uf).replace(/['"]+/g, '');
        }
    }
    );
};
function CleanCEPForm(){
    document.getElementById("adress").value="";
    document.getElementById("neighbourhood").value="";
    document.getElementById("city").value="";
    document.getElementById("state").value="";


};