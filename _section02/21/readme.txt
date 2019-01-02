                            Aula 20

Nesta Aula, iremos Aprender a classificar no  CSS

Vamos ver exemplos COMBINATOR fv abra o PDF da pasta 20 *

1º:Adjacent Sibling COMBINATOR
"+"  div + p { 
}

exemplos:
         h2 + p { color: red;} Aplicaremos diretamente somente sobre PARAGRAFOS que vem depois de um H2.

         <div> <h2>Not applied</h2> <p>CSS applied</p>   <h2>Not applied</h2> <h3>Not applied</h3> <p>Not applied</p> <h2>Not applied</h2> <p>CSS applied</p>          
         </div
Elements sharethesame parent 
Second elementcomes immediately after firstelement


2º:General Sibling COMBINATOR
"~"  div ~ p {
}
Nesta COMBINATOR, se torna mais flexssível , visto que atingimos to os PARAGRAFOS.

h2 ~ p { color: red; }
        <div> <h2>Not applied</h2> <p>CSS applied</p> <h2>Not applied</h2> <h3>Not applied</h3> <p>CSS applied</p> </div>
    
Element sharethesame parent Second elementcomesafter firstelement


3º: Child COMBINATOR
">" div > p {
}
div > p { color: red; } 

        <div> <div>Not applied</div> <p>CSS applied</p> <div>Not applied</div> <article> <p>Not applied</p> </article> <p>CSS applied</p> </div
Second elementisa direct child of  
first element.

Ele aplica somente elementos de PARAGRAFOS que tem como PAI a DIV, mas não aplica sobre PARAGRAFO que tem como PAI o ARTICLE.

4º: Descendant COMBINATOR
" "  div p {
              Espaço em branco entre a DIV e o p} 
div p { color: red; } 

        <div> <div>Not applied</div> <p>CSS applied</p> <div>Not applied</div> <article> <p>CSS applied</p> </article> <p>CSS applied</p> </div>
Second elementisa descendant of the firstelement.

Nesta COMBINATOR onde deixamos um ESPAÇO em BRANCO, todos os elementos com P que é o PARAGRAFO terão  a cor vermelha de fonte.













