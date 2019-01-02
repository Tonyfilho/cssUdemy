                            Aula 26

Nesta Aula, iremos Aprender sobre o PADDIN  no  CSS

Vamos ver exemplos de classificação universal *


vimos sobre o INHERETED elementos, hoje elementos filhos HERDÃO do elemento PAI suas caracteristicas.
Especialmente com FONTE SIZE, FONTE FAMILY ,isto  é de expremo uso , continuaremos a explicar seu uso.

Nesta aula veremos como aplicar o INHERETED na familia de fonte, criando um elemento com paramentro.

.section-little {
    color: rgba(255, 0, 50, 1);
    font-family: inherit; /*Criamos aqui o paramentro em que de inhered*/
}

Basicamente usamos este paramentro para HERDAR do PAI suas configurações.

Após fazermos isto podemo inspecionar  o elemento e vermos que ele HERDOU a fonte do elemento PAI.

A melhor forma de configurar  isto , é criar um CLASSE para nosso H1, com isto podemos aplicar somente a configuração sobre um determinado elemento.

Aprenderemos  a opção de COMBINATOR, onde  podemos  por 2 ou mais CLASSEs para receber o mesmo paramentro no CSS Ex :
<h1 class="first-section-little"> Get the freedom you deserve.</h1>
<h1 class="section-little">Choose Your Plan</h1>







