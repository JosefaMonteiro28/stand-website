/* Render Product */
function renderProdutos(data) {
  return `
    <div class="col-sm-3 mb-4">
        <div class="card">
           <!--Card image-->
            <div class="view overlay">
                <img class="card-img-top" src="${data.img}" alt="Card image cap" style="height: 250px">
                    <a href="#!">
                        <div class="mask rgba-white-slight"></div>
                    </a>
                </div>
            <div class="card-body">
                <h4 class="card-title">${data.manufacturer} ${data.model}</h4>
                <p class="card-text">
                    <i class="fas fa-money-bill-wave"></i> ${data.price} kz
                </p>
            </div>
        <div class="card-footer">
            <div class="text-left">
                <a href="${data.wiki}" target="_blank" class="btn btn-outline-primary btn-sm">Saiba mais</a>
            </div> 
            <div class="text-right">
                <a href=""><i class="fab fa-facebook fa-lg mx-2"></i></i></a>
                <a href=""><i class="fab fa-twitter fa-lg mr-2 text-info"></i></a>
                <a href=""><i class="fab fa-instagram fa-lg text-danger"></i></a>
            </div>  
        </div>
    </div>
</div>
  `;
}


/* Render Acessórios */
function renderAcessorios(data) {
    return `
    <div class="col-4">
        <div class="card mb-4">
            <div class="view overlay">
                <img class="card-img-top" src="${data.img}" alt="Card image cap" style="height: 250px; " />
                    <a href="#!">
                        <div class="mask rgba-white-slight"></div>
                    </a>
            </div>

            <div class="card-body">
                <h4 class="card-title">${data.name}</h4>
            </div>
            <div class="card-footer text-right" style="background: #f5f6fa;">
                <a href="#" class="btn btn-outline-primary btn-sm">Saiba mais</a>
            </div>
        </div>
    </div>
    `
}