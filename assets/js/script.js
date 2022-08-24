/*criar variavel: var (global), let (local), const
    js é case sensitive

    acessar o DOM:
    posso acessar por tag= getElementByTagName ()
    posso acessar por id= getElementById()
    posso acessar por nome = getElementByName()
    posso acessar por classe = getElementsByClassName() -- a classe pode usar em várias tags, por isso elementS
    posso acessar por seletor= querySelector()  -- melhor pratica para acessar nosso DOM

*/ 

var nome = window.document.getElementById('nome') /* aqui não bota # nem . porque se trata de id diretamente */
var email = document.querySelector('#email')  /* pode fazer desses dois jeitos, botando window ou diretamente o document */
var assunto = document.querySelector ('#assunto') /* coloca a # porque lá evidenciamos como ID, se fosse class botaria . */
var nomeOk = false
var emailOk = false
var assuntoOk = false
var mapa = document.querySelector('#mapa')



nome.style.width= '100%'  /* onde aumenta o campo do nome todo até, o nosso caso, o mapa */
email.style.width= '100%'

function validaNome(){

    var txtValidaNome = document.querySelector ('#txtNome')
         if (nome.value.length < 3) {     /* lenght apenas para array, se dentro do meu nome tem uma string então essa string é um array então consegue saber o tamanho desse array */
             txtValidaNome.innerHTML = 'Nome Inválido!'
            txtValidaNome.style.color= 'red'
         } else {
            txtValidaNome.innerHTML= 'Nome Válido!'
             txtValidaNome.style.color = 'green'
             nomeOk = true
         }
}

function validaEmail(){  
    var txtValidaEmail = document.querySelector ("#txtEmail")
        if (email.value.indexOf ('@') == -1 || email.value.indexOf ('.') == -1) { /* isso quer dizer que tem que ter o @ e o . para pegar o email */
            txtValidaEmail.innerHTML = 'Email Inválido'
            txtValidaEmail.style.color = 'red'
        } else{
            txtValidaEmail.innerHTML = 'Email Válido'
            txtValidaEmail.style.color = 'green'
            emailOk = true
        }

}

function validaAssunto(){
    var txtValidaAssunto = document.querySelector ('#txtAssunto')
        if (assunto.value.length >= 100){
            txtValidaAssunto.innerHTML = 'Coloque um texto menor que 100 caracteres'
            txtValidaAssunto.style.color = 'red'
            txtValidaAssunto.style.display = 'block'  /* botar aqui porque ele entra nessa condição e já vai p o outro e não aparece mais nada, então tem que botar block para ele aparecer quando der +100 */
        }else{
            txtValidaAssunto.style.display = 'none'
            assuntoOk = true
        }
}

function enviar(){
    if ( nomeOk == true && emailOk == true && assuntoOk == true){
        alert ('Formulário enviado com sucesso!')
    } else{
        alert ('Preencha o formulário corretamente antes de enviar!!')
    }
}


function mapaZoom() {  /* para o mapa dar zoom quando passar o mouse em cima */
    mapa.style.width = '800px'
    mapa.style.heigth = '600px'
}

function mapaNormal(){   /* para o mapa voltar ao normal quando passar o mouse em cima */
    mapa.style.width = '400px'
    mapa.style.heigth = '250px'

}

