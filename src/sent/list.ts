export function sentListComp(){
  const div = document.createElement("div");
  const titleInboxList = location.pathname.split("/")[1];

  div.innerHTML = `
  <h2 class="content-title">${titleInboxList}</h2>

  <div class="content-buttons link-interno" href="/Sent/Primer">
    <a class="link-interno buttons__txt" href="/Sent/Primer">Email Enviado</a>
    <a class="link-interno" href="/Inbox/Primer">\u25b7</a>
  </div>
  
  <div class="content-buttons link-interno" href="/Sent/Segundo">
    <a class="link-interno buttons__txt" href="/Sent/Segundo">Email Enviado 2</a>
    <a class="link-interno" href="/Sent/Segundo">\u25b7</a>
  </div>

  `;
  return div;
}