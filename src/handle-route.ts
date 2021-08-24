import { findAndProcessLinks } from "./index";
import { inboxListComp } from "./inbox/list";
import { inboxEmailComp } from "./inbox/email"
import { sentListComp } from "./sent/list";
import { sentEmailComp } from "./sent/email"

export function handleRoute(route){
  console.log("el handle route recibió una nueva ruta", route);
  const contenedorEl = document.querySelector(".contenedor");
  const routes = [{
    path: /\/Inbox/,
    handler: inboxListComp,
  },
  {
    path: /\/Inbox\/./,
    handler: inboxEmailComp,
  },
  {
    path: /\/Sent/,
    handler: sentListComp,
  },
  {
    path: /\/Sent\/./,
    handler: sentEmailComp,
  }
  
]
  for(const r of routes){
    if(r.path.test(route)) {
      // capturamos la respuesta de handler y lo guardamos en el
      // en este caso del index crea un div con contenido
      const el = r.handler();
      // en content monto el html que me da r.handler
      const contentEl = document.querySelector(".content");
      //primero le borro el primer elemento hijo a content
      if(contentEl.firstChild){
        contentEl.firstChild.remove();
      }
      //a content le agregamos el html que me devuelve handler osea el div nuevo
      contentEl.appendChild(el);
      // en vez de buscar el link en todo el document lo buscamos solo en el elemento nuevo
      // así solamente procesa esos links
      findAndProcessLinks(el);

    }
  }
}