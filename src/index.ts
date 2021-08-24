import { handleRoute } from "./handle-route";

function goTo(path){
  history.pushState({}, "", path);
  handleRoute(path);
}

//el container que pasamos por parametro es para decirle dentro de que elemento tiene que buscar los links
// para hacerle el tratamiento de sacarle la funcionalidad por defecto
// y por defecto este container va a ser el document
export function findAndProcessLinks(container: any = document){
  const els = container.querySelectorAll(".link-interno");
  //recorremos cada elemento que tenga la clase link-interno
  for(const link of els){
    //a cada link que encuentre le hacemos un adEvlist de click
    // y le decimos preventDef para que no se recargue
    link.addEventListener("click", (e) => {
      e.preventDefault();
      //con target capturamos el link que disparó el evento
      //obtiene el atributo href del botón para usarlo como path
      const route = (e.target as any).getAttribute("href");
      //esa ruta se la mando a goTo que sabe que hacer con ella
      goTo(route);
    });
  }

}

function clickInbox(container: any = document){
  const inboxEl = container.querySelector(".inbox");
  const sentEl = container.querySelector(".sent");
  const contentEl = container.querySelector(".content");
  
  inboxEl.addEventListener("click", (e) => {
    sentEl.style.backgroundColor = "#888888";
    inboxEl.style.backgroundColor = "";
    contentEl.style.backgroundColor = "";
  });
}

function clickSent(container: any = document){
  const inboxEl = container.querySelector(".inbox");
  const sentEl = container.querySelector(".sent");
  const contentEl = container.querySelector(".content");

  sentEl.addEventListener("click", (e) => {
    inboxEl.style.backgroundColor = "#888888";
    sentEl.style.backgroundColor = "";
    contentEl.style.backgroundColor = "#FF9BB3";
  });
}

(function(){
  findAndProcessLinks();
  clickInbox();
  clickSent();
 
  window.addEventListener("load", () => {
    handleRoute(location.pathname)
  });

})();