function handleSubmit(e){
    e.preventDefault();

    const text = document.getElementById('input-text').value;
    if(text === '') return alert('Por favor, ingrese un texto válido :)');

    const words = text.split(' ').length;

    alert(`La cantidad de palabras en el texto "${text}" son de: ${words}`);
}

document.getElementById('principal-form').addEventListener('submit', handleSubmit);