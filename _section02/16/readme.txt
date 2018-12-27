                            Aula 16

Nesta Aula, iremos Aprender a classificar no  CSS

Fazendo desta forma aplicamos somente as configurações sobre  o elemento escolhido. Recomendamos  o uso de "-" em caso de ID o CLASS com mais de uma palavra 
EX. <h1 class="section-tittle">


Podemos assinar varias classes somente colocando um "    " ESPAÇO entre os nomes das CLASSES .EX:
<h1 class="section-little article-little">EXEMPLO</h1>


POdemos classificar por 

ELEMENTOS: Ex: h1 {
               color: red;
}

POr CLASSES: EX: .block-bost {
               color: red;
}

Por IDs : Ex: #block-bost {
              color: red;
}

Por UNIVERSAL : Ex: * {
              color: red;
} Podemos classificar por ATRIBUTOS, onde todos ELEMENTOS com o mesmo ATRIBUTOS seriam atigindos. Representados por CHAVES "[]"
EX:
no HTML: <button disabled>CLICK </button>
no CSS:  [disabled] {
      color:red;


