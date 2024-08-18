function GetAdress(){
    var CEP = document.getElementById("typedCEP").value;
    $.getJSON(`https://viacep.com.br/ws/${CEP}/json/`,(reply) =>
    {
        document.getElementById("adress").value = JSON.stringify(reply.logradouro).replace(/['"]+/g, '');
        document.getElementById("neighbourhood").value = JSON.stringify(reply.bairro).replace(/['"]+/g, '');
        document.getElementById("city").value = JSON.stringify(reply.localidade).replace(/['"]+/g, '');
        document.getElementById("state").value = JSON.stringify(reply.uf).replace(/['"]+/g, '');
        /*
        if (JSON.stringify(reply.error)=="true"){
            console.log("erro");


        }
        */

    }
    );
};