// Aguarda o DOM ser totalmente carregado antes de executar o script
document.addEventListener("DOMContentLoaded", () => {

    // Seleciona os elementos principais da página
    const authContainer = document.getElementById("auth-container");
    const mainApp = document.getElementById("main-app");
    const loginForm = document.getElementById("login-form");
    const logoutBtn = document.getElementById("logout-btn");
    const authError = document.getElementById("auth-error");
    const resetBtn = document.getElementById("reset-btn"); // NOVO

    // --- NOVO: Lista de todos os IDs editáveis ---
    const editableIds = [
        'aula_info', 'term1', 'term2', 'term3', 'term4', 'term5', 'term6', 'term7',
        'refine1_li', 'refine2_li', 'theme1',
        'key1_1', 'key1_2', 'key1_3', 'pivot_text',
        'key2_1', 'key2_2', 'key2_3',
        'q1', 'q2', 'q3', 'final_q', 'footer_names'
    ];

    // --- NOVO: Função para salvar conteúdo no localStorage ---
    function saveContent(id, content) {
        localStorage.setItem(id, content);
    }

    // --- NOVO: Função para carregar conteúdo do localStorage ---
    function loadSavedContent() {
        console.log("Carregando conteúdo salvo...");
        for (const id of editableIds) {
            const savedContent = localStorage.getItem(id);
            if (savedContent) {
                const element = document.getElementById(id);
                if (element) {
                    element.innerHTML = savedContent;
                }
            }
        }
    }

    // --- NOVO: Função para iniciar os 'listeners' de edição ---
    function initContentEditable() {
        for (const id of editableIds) {
            const element = document.getElementById(id);
            if (element) {
                // Salva o conteúdo quando o usuário clica fora do elemento
                element.addEventListener('blur', () => {
                    saveContent(id, element.innerHTML);
                });
            }
        }
    }

    // --- NOVO: Função para resetar o conteúdo ---
    function resetContent() {
        // Pede confirmação ao usuário
        if (confirm('Tem certeza que deseja resetar todo o texto para o original? Suas edições serão perdidas.')) {
            localStorage.clear(); // Limpa todo o localStorage
            location.reload();    // Recarrega a página
        }
    }


    // --- Manipulador para o formulário de login (ATUALIZADO) ---
    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault(); 
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            if (email && password) {
                authContainer.classList.add("hidden"); 
                mainApp.classList.remove("hidden");    
                authError.textContent = "";            

                // --- NOVO: Carrega e inicia a edição ---
                loadSavedContent();
                initContentEditable();
                
            } else {
                authError.textContent = "Por favor, preencha todos os campos.";
            }
        });
    }

    // --- Manipulador para o botão de logout ---
    if (logoutBtn) {
        logoutBtn.addEventListener("click", () => {
            mainApp.classList.add("hidden");          
            authContainer.classList.remove("hidden"); 
        });
    }

    // --- NOVO: Manipulador para o botão de reset ---
    if (resetBtn) {
        resetBtn.addEventListener('click', resetContent);
    }

});