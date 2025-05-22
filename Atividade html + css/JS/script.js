window.onload = function () {
    const navEntries = performance.getEntriesByType('navigation');

    if (navEntries.length > 0 && navEntries[0].type === 'reload') {
        mostrarPrompt();
    }
};

function mostrarPrompt() {
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('promptBox').style.display = 'block';


    const input = document.getElementById('inputNome');
    input.addEventListener('keypress', function (e) {



        if (e.key === 'Enter') {
            confirmar();
        }
    });
}

function confirmar() {
    const nome = document.getElementById('inputNome').value.trim();


    if (nome === '') {
        alert('Digite um nome válido!');
        return;
    }

    // Insere o nome no parágrafo com id="Nome"
    document.getElementById('Nome').innerText = nome;

    // Fecha o prompt
    document.getElementById('promptBox').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';

    // Limpa input para próxima vez
    document.getElementById('inputNome').value = '';
}


const form = document.getElementById('formulario');

form.addEventListener('submit', function (e) {

    const nome = document.getElementById('inputNomeForm').value.trim();
    const email = document.getElementById('Email').value.trim();
    const mensagem = document.getElementById('Mensagem').value.trim();

    let erros = [];

    // Validação dos campos
    if (nome === '') {
        erros.push('⚠️ Nome é obrigatório');
    }

    if (email === '') {
        erros.push('⚠️ Email é obrigatório');
    } else if (!email.includes('@') || !email.includes('.')) {
        erros.push('⚠️ Email inválido');
    }

    if (mensagem === '') {
        erros.push('⚠️ Mensagem é obrigatória');
    }

    if (erros.length > 0) {
        e.preventDefault(); // 🔥 
        alert(erros.join('\n'));
    } else {
        alert(`✅ Formulário enviado com sucesso!\n\n🧑 Nome: ${nome}\n📧 Email: ${email}\n💌 Mensagem: ${mensagem}`);

    }
});

//mudando as cores do site

const btnDarkMode = document.getElementById('btnDarkMode');
const foto = document.querySelector('.myPerson img');

const fotoClaro = '/Atividade html + css/IMG/wp12213091.webp';
const fotoEscuro = '/Atividade html + css/IMG/moltres.jfif';

// Se não tiver a foto escura, pode criar uma ou usar qualquer outra

btnDarkMode.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        btnDarkMode.textContent = 'Modo Claro';
        foto.src = fotoEscuro;
    } else {
        btnDarkMode.textContent = 'Modo Escuro';
        foto.src = fotoClaro;
    }
});