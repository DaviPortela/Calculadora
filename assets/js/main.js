function criaCalculadora() {
    return {
        display: document.querySelector('.display input'),

        inicia() {
            this.clickBotoes();
        },

        clickBotoes() {
            document.addEventListener('click', e => {
                const el = e.target;
                
                
                if (el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                }

                if (el.classList.contains('btn-clear')) {
                    this.limparDisplay();
                }

                if (el.classList.contains('btn-del')) {
                    this.apagarUltimo();
                }
                
                if (el.classList.contains('btn-eq')) {
                    this.realizaConta();
                }
            });
        },

        btnParaDisplay(valor) {
            this.display.value += valor;
        },

        limparDisplay() {
            this.display.value = '';
        },

        apagarUltimo() {
            this.display.value = this.display.value.slice(0, -1);
        },

        realizaConta() {
            let conta = this.display.value;
            try {
                conta = eval(conta);
                this.display.value = conta;
                
                if (!conta) {
                    alert('Conta inválida!');
                    this.limparDisplay();
                }
            } catch(e) {

            }

        }
    }
}

const calculadora = criaCalculadora();
calculadora.inicia();