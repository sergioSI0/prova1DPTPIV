let saldoTotal = 0


document.querySelector('#salvar')
    .addEventListener('click', newLineTable)

function newLineTable(e) {

    const tableBody = document.querySelector('#table-body')
    const tableTR = document.createElement('tr')
    tableBody.insertAdjacentElement('afterbegin', tableTR)
    const selectTH = tableBody.querySelector('tr')


    const inputsForm = document.querySelectorAll('.input__form')

        .forEach((campo) => {

            selectTH.innerHTML += `<td>${campo.value}</td>`

            if (campo.id === 'idade' && Number(campo.value) > 12){
                selectTH.innerHTML += `<td id='paga' >Sim</td>`

            }else if(campo.id === 'idade' && Number(campo.value) <= 12){
                selectTH.innerHTML += `<td id='paga '>Não</td>`

            }

        })

        let saldo = 0
        document.querySelectorAll('#paga')
        .forEach(paga=>{
            if(paga.innerText.toLowerCase() === 'sim'){
                saldo += 15
            }
        })

        document.querySelector('#resultTable')
        .innerText = `Saldo: R$ ${saldo},00`
}