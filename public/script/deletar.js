function deletarLagrima(id) {
    return fetch(`/api/deletelagrimas/${id}`, {
        method: 'DELETE'
    })
    .then(res => res.json())
    .then(lagrima => {
        console.log('Lagrima excluída com sucesso:', lagrima);
        window.location.href = '/';
    });
}

document.getElementById('deletar-button').addEventListener('click', function() {
    const confirmed = confirm('Tem certeza de que deseja excluir essa lágrima?');
    if (confirmed) {
        deletarLagrima(id);
    }
});