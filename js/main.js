(function(){
  "use strict"

  //MAPA
  

  let regalo = document.getElementById('regalo')
  lat: -27.474998874469186
  lng: -64.81933593750001
  document.addEventListener('DOMContentLoaded', function(){
    
    
    //formulario datos
    const nombre = document.getElementById('nombre')
    const apellido = document.getElementById('apellido')
    const email = document.getElementById('email')

    //formularios pases
    const pase_dia = document.getElementById('pase_dia')
    const pase_dos_dias = document.getElementById('pase_dos_dias')
    const pase_completo = document.getElementById('pase_completo')

    //botones y divs
    const calcular = document.getElementById('calcular')
    const btnRegistro = document.getElementById('btnRegistro')
    let errorDiv = document.getElementById('error')
    let lista_productos = document.getElementById('lista-productos')
    let sumaTotal = document.getElementById('suma-total')

    // extras
    const camisa = document.getElementById('camisa_eventos')
    const etiquetas = document.getElementById('etiquetas')

    calcular.addEventListener('click', calcularMont);

    pase_dia.addEventListener('blur', mostrarDias)
    pase_dos_dias.addEventListener('blur', mostrarDias)
    pase_completo.addEventListener('blur', mostrarDias)

    //validacion nombre
    nombre.addEventListener('blur', validarDatos)
    apellido.addEventListener('blur', validarDatos)
    email.addEventListener('blur', validarDatos)

    function validarDatos (){
      if(this.value === ''){
        errorDiv.innerHTML = 'los campos son obligatorios';
        errorDiv.classList.add('errors')
      }else{
        errorDiv.classList.remove('errors')
        errorDiv.innerHTML = '';
      }
    }

    function calcularMont (e){
      e.preventDefault()
      if(regalo.value === ''){
        alert('elija un regalo')
        regalo.focus()
      }
      else{
        const paseDia = parseInt(pase_dia.value, 10) || 0,
              pase2Dias = parseInt(pase_dos_dias.value,10) || 0,
              paseCompleto = parseInt(pase_completo.value,10) || 0,
              camisasEvent = parseInt(camisa.value,10) || 0,
              cantEtiquetas = parseInt(etiquetas.value, 10) || 0


        const totalPagar = (paseDia * 30) + (pase2Dias * 45) + (paseCompleto * 50) + ((camisasEvent * 10) * 0.93) + (cantEtiquetas * 2)

        let listaProductos = []
        if(paseDia >= 1){
          listaProductos.push(paseDia + ' Pase por dia')
        }
        if(pase2Dias >= 1){
          listaProductos.push(pase2Dias + ' Pase por 2 dias')
        }
        if(paseCompleto >= 1){
          listaProductos.push(paseCompleto + ' Camisa')
        }
        if(camisasEvent >= 1){
          listaProductos.push(camisasEvent + ' Camisa')
        }
        if(cantEtiquetas >= 1){
          listaProductos.push(cantEtiquetas + ' Etiquetas')
        }
        lista_productos.style.display = "block";
        lista_productos.innerHTML = '';
        for(let i = 0; i < listaProductos.length; i++){
          lista_productos.innerHTML += listaProductos[i] + '<br/>'
        }
        sumaTotal.innerHTML = '$ ' + totalPagar.toFixed(2)

      }

    }
    function mostrarDias (){
      const paseDia = parseInt(pase_dia.value, 10) || 0,
      pase2Dias = parseInt(pase_dos_dias.value,10) || 0,
      paseCompleto = parseInt(pase_completo.value,10) || 0

      let diasElejidos = []
      if(paseDia > 0){
        diasElejidos.push('viernes')
      }
      if(pase2Dias > 0){
        diasElejidos.push('viernes', 'sabado')
      }
      if(paseCompleto > 0){
        diasElejidos.push('viernes', 'sabado', 'domingo')
      }

      for(let i = 0; i < diasElejidos.length; i++){
        document.getElementById(diasElejidos[i]).style.display= "block"
      }

     
    }    

  })//domcontentloaded
})()

//SCROLL MENU
const header = document.querySelector('header').clientHeight
window.onscroll = ()=> {
  if(header < window.scrollY){
    const menu = document.getElementById('nav')
    menu.classList.add('pagadiso')
   
  }else{
    const menu = document.getElementById('nav')
    menu.classList.remove('pagadiso')
  }
}

console.log(header)

var map = L.map('mapa').setView([-27.057119, -65.404513], 16);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);
  
      L.marker([-27.057119, -65.404513]).addTo(map)
          .bindPopup('GDLWEBCAMP.<br> BOLETOS DISPONIBLES.')
          .openPopup()
          .bindTooltip('gdlwebcamp')
          .openTooltip()
      
  
    const menuNav = document.querySelectorAll('.menu-talleres a')
   
    menuNav.forEach( (menu, i) => {
     
      menu.addEventListener('click', (e) => {
        e.preventDefault()
        const enlaces = menu.getAttribute('href')
        const enlace = enlaces.slice(1)
  
        const tabs = document.querySelectorAll('.info-curso')
      
        tabs.forEach( tab => {tab.classList.remove('show')} ) 
        const talleres = document.getElementById(enlace)
    
        talleres.classList.add('show')
  
        const menuNav = document.querySelectorAll('.menu-talleres a')
       
  
        menuNav.forEach(menua => menua.classList.remove('activo'))
      
        e.target.classList.add('activo')
        
        return false
       
      })
      
     
    })