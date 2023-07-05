function login(form) {
  if (form.usuario.value === "pedro") {
    if (form.password.value === "1234") {
      location = "home.html";
    } else {
      console.log("error de password");
    }
  } else {
    console.log("error de usuario");
  }
}
