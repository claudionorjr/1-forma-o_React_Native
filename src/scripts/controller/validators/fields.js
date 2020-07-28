/**
 * Descrição: Função para validar campos de um formulário
 * 
 * @param {*} value // Dado de um input
 * @param {*} message // Mensagem que será renderizada em um Alert para o usuário
 */
export default function validateFields (value, message) {
    if (!value) {
        alert(`${message}`)
    }
}