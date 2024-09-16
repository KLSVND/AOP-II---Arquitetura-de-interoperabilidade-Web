const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.exemplo.com/dados');
xhr.onload = () => {
  if (xhr.status === 200) {
    const dados = JSON.parse(xhr.responseText);
    // Processar os dados recebidos
  } else {
    // Tratar erros
  }
};
xhr.send();
