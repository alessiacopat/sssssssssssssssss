$(document).ready(function(){
  $('.sidenav').sidenav({
      edge: 'left',
      draggable: true
  });
});



// PAGINA HOME
var Home = { template: `
  <div class="row" >
    <h1 class="nomePagina">Home</h1>
    <h2 class="titoloPagina">I più cliccati</h2>
    <!-- trovare una soluzione a table !!!!! -->
    <div class="col s12 m3">
      <div class="card" >
        <div class="card-image waves-effect waves-block waves-light">
          <img class="activator"  style= "height: 400px;" src="img/releone.jpg">
        </div>
        <div class="card-content">
          <span class="card-title activator grey-text text-darken-4">Re Leone<i class="material-icons right">more_vert</i></span>
          <p><a href="#"></a></p>
        </div>
        <div class="card-reveal">
          <span class="card-title grey-text text-darken-4">Re Leone<i class="material-icons right">close</i></span>
          <p>Riassunto film</p>
        </div>
      </div>
</div>

      <div class="col s12 m3">
      <div class="card">
        <div class="card-image waves-effect waves-block waves-light">
          <img class="activator" style= "height: 400px;" src="img/avengers.jpg">
        </div>
        <div class="card-content">
          <span class="card-title activator grey-text text-darken-4">Avengers<i class="material-icons right">more_vert</i></span>
          <p><a href="#"></a></p>
        </div>
        <div class="card-reveal">
          <span class="card-title grey-text text-darken-4">Avengers<i class="material-icons right">close</i></span>
          <p>Riassunto film</p>
        </div>
      </div>
</div>


    <div class="col s12 m3">
      <div class="card" >
        <div class="card-image waves-effect waves-block waves-light">
          <img class="activator" style= "height: 400px;" src="img/joker.jpg">
        </div>
        <div class="card-content">
          <span class="card-title activator grey-text text-darken-4">Joker<i class="material-icons right">more_vert</i></span>
          <p><a href="#"></a></p>
        </div>
        <div class="card-reveal">
          <span class="card-title grey-text text-darken-4">Joker<i class="material-icons right">close</i></span>
          <p>Riassunto film</p>
        </div>
      </div>
</div>

<div class="col s12 m3">
      <div class="card">
        <div class="card-image waves-effect waves-block waves-light">
          <img class="activator"  style= "height: 400px;" src="img/IT.jpg">
        </div>
        <div class="card-content">
          <span class="card-title activator grey-text text-darken-4">IT 2<i class="material-icons right">more_vert</i></span>
          <p><a href="#"></a></p>
        </div>
        <div class="card-reveal">
          <span class="card-title grey-text text-darken-4">IT 2<i class="material-icons right">close</i></span>
          <p>Riassunto film</p>
        </div>
      </div>
</div>

<div class="col s12 m3">
      <div class="card" >
        <div class="card-image waves-effect waves-block waves-light">
          <img class="activator" style= "height: 400px;" src="img/releone.jpg">
        </div>
        <div class="card-content">
          <span class="card-title activator grey-text text-darken-4">Re Leone<i class="material-icons right">more_vert</i></span>
          <p><a href="#"></a></p>
        </div>
        <div class="card-reveal">
          <span class="card-title grey-text text-darken-4">Re Leone<i class="material-icons right">close</i></span>
          <p>Riassunto film</p>
        </div>
      </div>
</div>

<div class="col s12 m3">

      <div class="card" >
        <div class="card-image waves-effect waves-block waves-light">
          <img class="activator" style= "height: 400px;" src="img/avengers.jpg">
        </div>
        <div class="card-content">
          <span class="card-title activator grey-text text-darken-4">Avengers<i class="material-icons right">more_vert</i></span>
          <p><a href="#"></a></p>
        </div>
        <div class="card-reveal">
          <span class="card-title grey-text text-darken-4">Avengers<i class="material-icons right">close</i></span>
          <p>Riassunto film</p>
        </div>
      </div>
</div>


<div class="col s12 m3">
      <div class="card">
        <div class="card-image waves-effect waves-block waves-light">
          <img class="activator" style= "height: 400px;" src="img/joker.jpg">
        </div>
        <div class="card-content">
          <span class="card-title activator grey-text text-darken-4">Joker<i class="material-icons right">more_vert</i></span>
          <p><a href="#"></a></p>
        </div>
        <div class="card-reveal">
          <span class="card-title grey-text text-darken-4">Joker<i class="material-icons right">close</i></span>
          <p>Riassunto film</p>
        </div>
      </div>
</div>

<div class="col s12 m3">
      <div class="card" >
        <div class="card-image waves-effect waves-block waves-light">
          <img class="activator"  style= "height: 400px;" src="img/IT.jpg">
        </div>
        <div class="card-content">
          <span class="card-title activator grey-text text-darken-4">IT 2<i class="material-icons right">more_vert</i></span>
          <p><a href="#"></a></p>
        </div>
        <div class="card-reveal">
          <span class="card-title grey-text text-darken-4">IT 2<i class="material-icons right">close</i></span>
          <p>Riassunto film</p>
        </div>
      </div>
</div>
  </div>

`
};





var Catalogo = { template: `
<div>
<h1 class="nomePagina">Portfolio</h1>
<p>codn</p>
  
</div>


`,

};




var Portfolio = { template: `
    <div>
      <h1 class="nomePagina">Portfolio</h1>
    </div>
  

  `,
  
};



// PAGINA CONTATTI
var Contatti = { template: `
  <div>
    <h1 class="nomePagina">Contatti</h1>
    <h2 class="titoloPagina">Contattaci</h2>
    <div class="container" id="containerForm">
      <button v-on:click="byEmail()" class="metodoRichiesta">email</button>
      <button v-on:click="byTelefono()" class="metodoRichiesta" >telefono</button>
      <form name="modulo">
        <div class="form-group">
          <template v-if="requestType === 'email'">
              <label class="labelForm">email</label>
              <div>
                <label class="nomeCognomeForm">Nome e cognome</label>   
                <input name="nome" key="richiesta" class="form-control" placeholder="Nome e cognome" style="width: 95%;">
              </div>
              <div>
                <label class="nomeCognomeForm">Richiesta</label>
                <textarea class="textArea" name="comment" form="usrform" placeholder="Inserisci qui la tua richiesta"></textarea>
                <button v-on:click="inviaRichiesta()" id="buttonEmail" >Invia</button>
              </div>
          </template>
          <template v-else>
              <label class="labelForm">telefono</label><br/>
              
              <p>Il nostro numero è: 0461</p>
          </template>
        </div>
      </form>
    </div>
  </div>
  `,
  data() {
    return {
    requestType: "email",
      byEmail() {
        this.requestType = "email";
      },
      byTelefono(){
        this.requestType = "telefono";
      },
      
      inviaRichiesta(){
        var nome = document.modulo.nome.value;
        if ((nome == "") || (nome == "undefined")) {
          alert("Il campo Nome è obbligatorio.");
          return false;
          } else {
            alert("L'email è stata mandata correttamente");
            return true;
          }
      }       
    }; 
  }
};

 

var routes = [
    { path: '/', component: Home },
    { path: '/catalogo/:search', component: Catalogo, props: true },
    { path: '/portfolio', component: Portfolio },
    { path: '/contatti', component: Contatti }
  ]

var router = new VueRouter({
    routes // short for `routes: routes`
  })

new Vue ({
    router,
    el: '#app',
    data:{
        
    }
}).$mount('#app')




Vue.component('mio-componente', {
  template: `io sono cc`
});
