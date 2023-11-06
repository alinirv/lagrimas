const params = new URLSearchParams(window.location.search);
const id = params.get('id');
const form = document.getElementById('cadastrar-form');

function editarLagrima(id){
    const data = {
        id: parseInt(id),
        nome: form.elements['nome'].value,
        categoria: form.elements['categoria'].value,
        autor: form.elements['autor'].value
    };

    fetch(`/api/editlagrimas/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then((response) => response.json())
        .then((lagrima) => {
            alert('Lágrima editada com sucesso!');
            form.reset();
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('Erro ao editar lágrima.');
        });
}
/*form.addEventListener('submit', (event) => {
    event.preventDefault();

    const data = {
        id: parseInt(id),
        nome: form.elements['nome'].value,
        categoria: form.elements['categoria'].value,
        autor: form.elements['autor'].value
    };

    fetch(`/api/editlagrimas/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then((response) => response.json())
        .then((lagrima) => {
            alert('Lágrima editada com sucesso!');
            form.reset();
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('Erro ao editar lágrima.');
        });
});*/

function buscarLagrima(id) {
    return fetch(`/api/lagrimas/${id}`)
        .then(res => res.json())
        .then(lagrima => {
            document.getElementById('nome').value = lagrima.nome;
            document.getElementById('categoria').value = lagrima.categoria;
            document.getElementById('autor').value = lagrima.autor;
        });
}

document.getElementById('editar-button').addEventListener('click', function() {
    const confirmed = confirm('Tem certeza de que deseja editar essa lágrima?');
    if (confirmed) {
        editarLagrima(id);
    }
});


window.addEventListener("load", buscarLagrima(id));