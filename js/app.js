const imagen1 = document.getElementById('imagen1')
const imagen2 = document.getElementById('imagen2')

const animadas = [imagen1, imagen2]

const cargarImagen = (entradas, observador)=>{
  entradas.forEach( entrada => {
    if(entrada.isIntersecting){
       entrada.target.classList.add('oculta')
    }
  })
}

const observador = new IntersectionObserver(cargarImagen,{
    root: null,
    rootMargin: '0px 0px 0px 0px',
    threshold: 1.0
})

observador.observe(imagen1)
observador.observe(imagen2)