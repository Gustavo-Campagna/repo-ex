const formulario = document.getElementById("formulario-consorcio");

formulario.addEventListener("submit", function (event) {
  event.preventDefault();

  const dados = new FormData(formulario);

  const nome = dados.get("nome");
  const nascimento = dados.get("nascimento");
  const cpf = dados.get("cpf");
  const mae = dados.get("mae");
  const estadoCivil = document.getElementById("estado-civil").selectedOptions[0].text;
  const endereco = dados.get("endereco");
  const bairro = dados.get("bairro");
  const cep = dados.get("cep");
  const cargo = dados.get("cargo");
  const renda = dados.get("renda");
  const email = dados.get("email");
  const telefone = dados.get("telefone");

  const mensagem = `*NOVA SOLICITAÇÃO DE CONSÓRCIO*

*DADOS PESSOAIS*
Nome: ${nome}
Data de nascimento: ${nascimento}
CPF: ${cpf}
Nome da mãe: ${mae}
Estado civil: ${estadoCivil}

*ENDEREÇO RESIDENCIAL*
Endereço: ${endereco}
Bairro: ${bairro}
CEP: ${cep}

*INFORMAÇÕES PROFISSIONAIS*
Cargo atual: ${cargo}
Renda aproximada: R$ ${renda}

*CONTATO*
E-mail: ${email}
Telefone: ${telefone}`;


  const numeroWhatsApp = "5543999076497";

  const linkWhatsApp =
    `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;

  window.open(linkWhatsApp, "_blank");
});
