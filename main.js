const productos = [

    { 
        id: 1,
        categoria: "cuerdas",
        nombre: "Guitarra Electrica Cort x11",
        img: "Guitarra Electrica Cort x11.webp",
        precio: 600,
    },
    { 
        id: 2,
        categoria: "cuerdas",
        nombre: "Guitarra Electrica Squier Bullet",
        img: "Guitarra Electrica Squier Bullet.webp",
        precio: 500,
    },
    { 
        id: 3,
        categoria: "cuerdas",
        nombre: "Guitarra Electrica PRS SE Custom 24",
        img: "Guitarra Electrica PRS SE Custom 24.webp",
        precio: 1450,
    },
    { 
        id: 4,
        categoria: "cuerdas",
        nombre: "Guitarra Acustica Taylor",
        img: "Guitarra Acustica Taylor.webp",
        precio: 1030,
    },
    { 
        id: 5,
        categoria: "cables",
        nombre: "Cable Plug-Plug para guitarra Ernie Ball",
        img: "Cable Plug-Plug para guitarra Ernie Ball.webp",
        precio: 25,
    },
    { 
        id: 6,
        categoria: "amplificación",
        nombre: "Amplificador Marshall MG-30 CFX Carbon 30W",
        img: "Amplificador Marshall MG-30 CFX Carbon 30W.webp",
        precio: 320,
    },
    { 
        id: 7,
        categoria: "amplificación",
        nombre: "Amplificador Fender Champion 40W",
        img: "Amplificador Fender Champion 40W.webp",
        precio: 385,
    },
    { 
        id: 8,
        categoria: "percución",
        nombre: "Batería completa Solidrums Nautilus",
        img: "Batería completa Solidrums Nautylus.webp",
        precio: 400,
    }, { 
        id: 9,
        categoria: "controladores Midi",
        nombre: "Controlador MIDI M-Audio Mini 32 Mk3",
        img: "Controlador MIDI M-Audio Mini 32.webp",
        precio: 150,
    }, { 
        id: 10,
        categoria: "microfonos",
        nombre: "Microfono Shure SM58",
        img: "Microfono Shure SM58.webp",
        precio: 210,
    }, { 
        id: 11,
        categoria: "microfonos",
        nombre: "Microfono condenser AKG P120",
        img: "Microfono condenser AKG P120.webp",
        precio: 90,
    }, { 
        id: 12,
        categoria: "accesorios",
        nombre: "Afinador digital cromatico instrumentos de cuerdas",
        img: "Afinador digital cromatico instrumentos de cuerdas.webp",
        precio: 10,
    }, { 
        id: 13,
        categoria: "cuerdas" ,
        nombre: "Bajo Eléctrico Cort Gb34j 3ts",
        img: "Bajo Eléctrico Cort Gb34j 3ts.webp",
        precio: 370,
    }, { 
        id: 14,
        categoria: "cuerdas" ,
        nombre: "Violin Acustico Estudio 4/4 Alta Calidad + Accesorios Pro",
        img: "Violin Acustico Estudio más Accesorios Pro.webp",
        precio: 70,
    }, { 
        id: 15,
        categoria: "efectos",
        nombre: "Pedal de efectos Electro Harmonix Metal Muff con top boost",
        img: "Pedal de efectos Electro Harmonix Metal Muff con top boost.webp",
        precio: 200,
    }, { 
        id: 16,
        categoria: "efectos",
        nombre: "Pedal de efectos Distorsión Boss DS-1",
        img: "Pedal de efectos Distorsión Boss DS-1.webp",
        precio: 120,
    }, { 
        id: 17,
        categoria: "efectos",
        nombre: "Pedal de efectos Overdrive ibanez tubescreamer TS-9",
        img: "Pedal de efectos Overdrive ibanez tubescreamer TS-9.webp",
        precio: 120,
    }, { 
        id: 18,
        categoria: "efectos",
        nombre: "Pedal efecto Delay Boss DD3",
        img: "Pedal efecto Delay Boss DD3.webp",
        precio: 205,
    }
];


const botonBuscar = document.getElementById("searchButton");
const inputText = document.getElementById("searchInput")
const carritoIcon = document.getElementsByClassName("carrito")[0];
const containerProductos = document.getElementById ("containerProductos");
const modalCarrito = document.getElementById("ventanaModal");
/* const agregarAlCarrito = document.getElementsByClassName("boton-agregar-carrito"); */
const textoCarrito = document.getElementById("texto-carrito");

/* let productosCarrito = []; */


const respuestaClick = ()=> {
    console.log("click")
}
/* eventos */



/* A modo de prueba agregue localStorage a un texto,
 esto solo lo estoy usando para ver si funciona
ya que tengo el problema con la variable agregarAlCarrito */

textoCarrito.addEventListener("click", () => {
        localStorage.setItem("productos", JSON.stringify(productos));
  });



carritoIcon.addEventListener("click",respuestaClick);
botonBuscar.addEventListener("click", () => {
    const valorBusqueda = inputText.value.trim();
    buscarProducto(valorBusqueda);
  });
  
inputText.addEventListener("click", () => {
    /* prueba con console.log */
    console.log("imput click");
  });

  /* No funciona el evento sin afectar a la función renderizarProductos (-_-) */

/* agregarAlCarrito.addEventListener("click", () => {
    sessionStorage.setItem("productos", JSON.stringify(productos));
    
}); */




/* Función buscar producto ejecuta luego del evento del "botonBuscar" */

function buscarProducto(valor) {
    const productoEncontrado = productos.filter((producto) => {
      for (let clave in producto) {
        if (producto[clave].toString().toLowerCase().includes(valor.toLowerCase())) {
          return true;
        }
      }
      return false;
    });
  
    if (productoEncontrado.length > 0) {
        /* prueba con console.log */
      console.log(productoEncontrado);
    } else {
        /* prueba con console.log */
      console.log("No se encontró producto}");
    }
  }

/* Función renderizarProductos hace aparecer las cards que contiene la información de cada producto */

function renderizarProductos() {
    productos.forEach((producto) => {
        const divCard = document.createElement('div');
        divCard.classList.add('card');
        divCard.innerHTML += `
			<img src="./images/${producto.img}" alt="${producto.nombre}" class="img"/>
			<h4>${producto.nombre}</h4>
			<p>US$${producto.precio}</p>
			<a id=${producto.id} class="boton-agregar-carrito" href="#">Agregar al carrito</a>
        `;

        containerProductos.appendChild(divCard);

        
    });
}



renderizarProductos()



/* function guardarProductoSessionStorage() {
    sessionStorage.setItem("producto", JSON.stringify(productosCarrito));
} */

    
    
