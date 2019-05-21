$(document).ready(function() {
  /* Productos rendering*/
  PRODUCTS.forEach(item => {
    $("#productos-auto").append(renderProdutos(item));
  });

  /* Acessorios rendering */
  ACESSORIOS.forEach(item => {
    $("#acessorios").append(renderAcessorios(item));
  });
});
