function busca() {
    console.log("Apertou")


    fetch('db.json').then(resposta => resposta.json()).then(banco => {
        //Variável para pegar o valor digitado pelo o usuário
        let identificador = document.getElementById('valor').value 
        let encontrado = false


        banco.forEach(pessoa => {
            if(identificador == pessoa.fpc) {
                document.getElementById('imagem').innerHTML = pessoa.image
                document.getElementById('nome').innerHTML = "Nome: " + pessoa.name
                document.getElementById('sobrenome').innerHTML = "Sobrenome: " + pessoa.lastname
                document.getElementById('cidade').innerHTML = "Cidade: " + pessoa.city
                document.getElementById('pais').innerHTML = "Pais: " + pessoa.country
                document.getElementById('cpf').innerHTML = "CPF: " + pessoa.fpc


                encontrado = true
            }
        })
        if(!encontrado) {
            document.getElementById('erro').innerHTML = "CPF Inválido"
        }
    })
}