let saldo = localStorage.getItem('saldo') ? parseInt(localStorage.getItem('saldo')) : 1000;
document.getElementById('saldo').textContent = saldo;

function atualizarSaldo(valor){
saldo = valor;
document.getElementById('saldo').textContent = saldo;
localStorage.setItem('saldo', saldo);
}
