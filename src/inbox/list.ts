export function inboxListComp(){
  const div = document.createElement("div");
  const titleInboxList = location.pathname.split("/")[1];

  div.innerHTML = `
  <h2 class="content-title">${titleInboxList}</h2>

  <div class="content-buttons link-interno" href="/Inbox/Primer">
    <a class="link-interno buttons__txt" href="/Inbox/Primer">Email Recibido</a>
    <a class="link-interno" href="/Inbox/Primer">\u25b7</a>
  </div>
  
  <div class="content-buttons link-interno" href="/Inbox/Segundo">
    <a class="link-interno buttons__txt" href="/Inbox/Segundo">Email Recibido 2</a>
    <a class="link-interno" href="/Inbox/Segundo">\u25b7</a>
  </div>

  `;
  return div;
}