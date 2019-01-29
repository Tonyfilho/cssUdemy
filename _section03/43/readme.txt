                            43

Nesta Aula, iremos Aprender 43. Grouping Rules, Lecture 43


Aqui nesta aula poderemos ver como aplicar e agrupar regras no CSS.


ANTES ERA ASSIM:
.main-nav__item a:hover {  /*O HOVER e o ACTIVE são chamados de SUDO-CLASS */
    color:white;
}

.main-nav__item a:active {
    color: white;
}

AGORA FICOU ASSIM AGRUPANDO regras.

/*Aqui demos uma ","  virgula depois do HOVER e adcionamos outra regra  */

.main-nav__item a:hover, .main-nav__item a:active {  /*O HOVER e o ACTIVE são chamados de SUDO-CLASS */
    color:white;
}












                                  