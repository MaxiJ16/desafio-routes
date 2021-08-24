export function sentEmailComp(){
  const div = document.createElement("div");
  //cuando invoquen esta función voy a leer el location.pathname que es la variable que tiene la url
  // la posición 2 de la url es el emailid
  const emailId = location.pathname.split("/")[2];
  console.log(emailId)
  div.innerHTML = `
  <h2>Enviado</h2>
  <p>${emailId} email</p>
  `;
  return div;
}