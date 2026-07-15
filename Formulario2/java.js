const formulario = document.getElementById("formulario-consorcio");

formulario.addEventListener("submit", function (event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value;
  const whatsapp = document.getElementById("whatsapp").value;
  const email = document.getElementById("email").value;
  const cidade = document.getElementById("cidade").value;
  const objetivo = document.getElementById("objetivo").value;
  const experiencia = document.getElementById("experiencia").value;
  const valor = document.getElementById("valor").value;

  const mensagem = ` Novo formulario preenchido!!

 *Nome:*
${nome}

 *WhatsApp:*
${whatsapp}

 *E-mail:*
${email}

*Cidade:*
${cidade}

*1. Qual é o seu objetivo ao considerar um consórcio?*
R: ${objetivo}

*2. Você já teve alguma experiência anterior com consórcio?*
R: ${experiencia}

*3. Qual o valor aproximado do bem que você deseja adquirir?*
R: R$ ${valor}`;

  const numeroWhatsApp = "5543999076497";
  const linkWhatsApp =
    `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;

  window.open(linkWhatsApp, "_blank");
});