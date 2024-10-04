let arr = [];

// Função para atualizar a exibição do array na interface
function updateDisplay() {
    let resultTable = document.querySelector('table tbody');
    resultTable.innerHTML = "";  // Limpa a tabela antes de exibir os dados

    arr.forEach((item, index) => {
        let row = `<tr>
                    <td>${index}</td>
                    <td>${item.produto}</td>
                    <td>${item.valor}</td>
                    <td>${item.quantidade}</td>
                    </tr>`;
        resultTable.innerHTML += row;
    });
}

// Função para exibir o resultado da operação
function displayResult(operation, result) {
    document.getElementById('result').textContent = `${operation}: ${JSON.stringify(result)}`;
}

// Função push() - adiciona elemento ao final
function pushElement() {
    const produto = document.getElementById('Produto').value;
    const valor = document.getElementById('valor').value;
    const quantidade = document.getElementById('Quantidade').value;

    // Verifica se os valores não estão vazios
    if (produto !== "" && valor !== "" && quantidade !== "") {
        arr.push({ produto, valor, quantidade });  // Adiciona objeto ao array
        updateDisplay();
        displayResult(`push({produto: ${produto}, valor: ${valor}, quantidade: ${quantidade}})`, arr);
        // Limpa os campos de input
        document.getElementById('Produto').value = "";
        document.getElementById('valor').value = "";
        document.getElementById('Quantidade').value = "";
    } else {
        displayResult('Erro', 'Por favor, preencha todos os campos.');
    }
}

// Função pop() - remove o último elemento
function popElement() {
    let popped = arr.pop();
    updateDisplay();
    displayResult('pop()', popped);
}

// Função shift() - remove o primeiro elemento
function shiftElement() {
    let shifted = arr.shift();
    updateDisplay();
    displayResult('shift()', shifted);
}

// Função unshift() - adiciona elemento ao início
function unshiftElement() {
    const produto = document.getElementById('Produto').value;
    const valor = document.getElementById('valor').value;
    const quantidade = document.getElementById('Quantidade').value;

    if (produto !== "" && valor !== "" && quantidade !== "") {
        arr.unshift({ produto, valor, quantidade });  // Adiciona objeto ao início do array
        updateDisplay();
        displayResult(`unshift({produto: ${produto}, valor: ${valor}, quantidade: ${quantidade}})`, arr);
        document.getElementById('Produto').value = "";
        document.getElementById('valor').value = "";
        document.getElementById('Quantidade').value = "";
    } else {
        displayResult('Erro', 'Por favor, preencha todos os campos.');
    }
}

// Função splice() - remove ou substitui elementos no array
function spliceArray() {
    let index = parseInt(prompt("Digite o índice para iniciar o splice:"));
    let deleteCount = parseInt(prompt("Digite quantos elementos remover:"));
    let elementsToAdd = prompt("Digite os produtos para adicionar (separados por vírgula), ou deixe em branco para não adicionar nenhum:");
    let addedElements = elementsToAdd ? elementsToAdd.split(",").map(e => ({ produto: e.trim(), valor: "0", quantidade: "0" })) : [];

    let spliced = arr.splice(index, deleteCount, ...addedElements);  // Executa o splice
    updateDisplay();
    displayResult(`splice(${index}, ${deleteCount}, ${elementsToAdd})`, spliced);
}

// Função slice() - retorna uma cópia de uma parte do array
function sliceArray() {
    let start = parseInt(prompt("Digite o índice de início para slice:"));
    let end = parseInt(prompt("Digite o índice final (não inclusivo) para slice:"));
    let sliced = arr.slice(start, end);
    displayResult(`slice(${start}, ${end})`, sliced);
}

// Função concat() - combina arrays
function concatArray() {
    let newArr = arr.concat([{ produto: "Novo Produto", valor: "999", quantidade: "10" }]);
    displayResult('concat()', newArr);
}

// Função indexOf() - retorna o índice de um elemento (baseado no nome do produto)
function indexOfElement() {
    let searchValue = prompt("Digite o nome do produto para procurar:");
    let index = arr.map(el => el.produto).indexOf(searchValue);
    displayResult(`indexOf(${searchValue})`, index);
}

// Função includes() - verifica se o elemento existe no array (baseado no nome do produto)
function includesElement() {
    let searchValue = prompt("Digite o nome do produto para verificar se existe:");
    let exists = arr.some(el => el.produto === searchValue);
    displayResult(`includes(${searchValue})`, exists);
}

// Função find() - retorna o primeiro produto que bate com a busca
function findElement() {
    let searchValue = prompt("Digite o nome do produto para encontrar:");
    let found = arr.find(el => el.produto === searchValue);
    displayResult(`find(${searchValue})`, found);
}

// Função findIndex() - retorna o índice do primeiro produto que bate com a busca
function findIndexElement() {
    let searchValue = prompt("Digite o nome do produto para encontrar o índice:");
    let index = arr.findIndex(el => el.produto === searchValue);
    displayResult(`findIndex(${searchValue})`, index);
}

// Função sort() - ordena o array (pelo nome do produto)
function sortArray() {
    let sorted = arr.sort((a, b) => a.produto.localeCompare(b.produto));
    updateDisplay();
    displayResult('sort()', sorted);
}

// Função reverse() - inverte o array
function reverseArray() {
    let reversed = arr.reverse();
    updateDisplay();
    displayResult('reverse()', reversed);
}

// Função split() - divide uma string em um array (usando o array convertido para string)
function splitString() {
    let str = arr.map(el => el.produto).join(',');
    let splitArr = str.split(',');
    displayResult('split()', splitArr);
}

// Função join() - junta os elementos do array em uma string
function joinArray() {
    let joined = arr.map(el => el.produto).join(' - ');
    displayResult('join()', joined);
}

