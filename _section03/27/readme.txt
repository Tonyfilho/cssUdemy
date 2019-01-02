                            Aula 26

Nesta Aula, iremos Aprender sobre o PADDIN, BORDER E MARGIM  no  CSS

Colocaremos um PADDING SELETOR ABAIXO.

#product-overview {
    background: #ff1b68;
    padding: 20px;
    border: 5px solid black; /*Ou assim ou desta forma SHORT ou da forma NORMAL a baixo*/
    border-color: black; /*Ou assim ou desta forma a cima*/
    border-style: solid;
    border-width: 5px;
    margin: 20px ;
    
}

Adjacent siblings

The margins of adjacent siblings are collapsed (except when the latter sibling needs to be cleared past floats).

Parent and first/last child

If there is no border, padding, inline part, block formatting context created, or clearance to separate the margin-top of a block from the margin-top of its first child block; or no border, padding, inline content, height, min-height, or max-height to separate the margin-bottom of a block from the margin-bottom of its last child, then those margins collapse. The collapsed margin ends up outside the parent.

Empty blocks

If there is no border, padding, inline content, height, or min-height to separate a block's margin-top from its margin-bottom, then its top and bottom margins collapse.








