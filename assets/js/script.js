console.log("Script carregado!");

// Inicializa o EmailJS com a sua PUBLIC KEY
emailjs.init("l52--R4XyorcjdpV4");  // ✅ sua Public Key

console.log("EmailJS inicializado:", emailjs);

// Captura o envio do formulário
document.getElementById("contact-form").addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = {
    subject: document.getElementById("subject").value,
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  const serviceID = "service_mldwsks";   // confira no painel EmailJS
  const templateID = "template_fhxkfkz"; // confira no painel EmailJS

  const submitButton = document.getElementById("submit-button");
  submitButton.textContent = "Enviando...";
  submitButton.disabled = true;

  emailjs.send(serviceID, templateID, formData)
    .then(() => {
      Toastify({
        text: "E-mail enviado com sucesso!",
        style: { background: "#0B2738", color: "#fff" },
        duration: 3000,
      }).showToast();

      document.getElementById("contact-form").reset();
    })
    .catch((error) => {
      console.error("Erro do EmailJS:", error);
      Toastify({
        text: "Erro no envio. Veja o console.",
        style: { background: "#dc3545", color: "#fff" },
        duration: 3000,
      }).showToast();
    })
    .finally(() => {
      submitButton.textContent = "Enviar";
      submitButton.disabled = false;
    });
});


// Menu hamburguer
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector("nav ul");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("show");
    hamburger.classList.toggle("active");
});

// Fechar o menu ao clicar em um link
document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("show");
        hamburger.classList.remove("active");
    });
});