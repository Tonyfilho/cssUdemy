                            Aula 16

Nesta Aula, iremos Aprender a classificar no  CSS

1º Podemos classificar por CLASSE dos elementos usando o CLASS, no CSS o CLASS é representado por um PONTO "."
Ex: 
no HTML: <h1 class="novo">Nosso Exemplo</h1>
no CSS:  .novo {
    color:red;

}


2º Podemos classificar por IDENTIDADE usando uma ID no CSS uma ID é representado por um TRALHA "#"
EX:
no HTML: <h1 id="novo">Nosso Exemplo</h1>
no CSS:  #novo {
      color:red;
}



3º Podemos classificar por ATRIBUTOS, onde todos ELEMENTOS com o mesmo ATRIBUTOS seriam atigindos. Representados por CHAVES "[]"
EX:
no HTML: <button disabled>CLICK </button>
no CSS:  [disabled] {
      color:red;
}

Fazendo desta forma aplicamos somente as configurações sobre  o elemento escolhido. Recomendamos  o uso de "-" em caso de ID o CLASS com mais de uma palavra 
EX. <h1 class="section-tittle">


Podemos assinar varias classes somente colocando um "    " ESPAÇO entre os nomes das CLASSES .EX:
<h1 class="section-little article-little">EXEMPLO</h1>