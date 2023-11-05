//Função cadastrar
const form = document.getElementById('cadastrar-form');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const data = {
            nome: form.elements['nome'].value,
            categoria: form.elements['categoria'].value,
            autor: form.elements['autor'].value
        };

        fetch('/api/newlagrimas', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then((response) => response.json())
        .then((lagrima) => {
            alert('Lágrima cadastrada com sucesso!');
            form.reset();
        })
        .catch((error) => {
              console.error('Error:', error);
            alert('Erro ao cadastrar lágrima.');
        });
    });