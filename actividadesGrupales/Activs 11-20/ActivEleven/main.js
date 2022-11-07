const cargarPost = async () => {
  try {
    const url = "https://jsonplaceholder.typicode.com/posts";
    const res = await fetch(url);
    if (res.ok) {
      const datos = await res.json();
      const post = document.getElementById("post");
      datos.forEach((element) => {
        let texto = element.title;
        let cuerpo = element.body;
        let id = element.id;
        texto = texto.toUpperCase();
        let columna = document.createElement("div");
        columna.classList.add("col-3", "p-3");
        let card = document.createElement("div");
        card.classList.add("card", "p-1");
        let cardBody = document.createElement("div");
        cardBody.classList.add("card-body");
        let p = document.createElement("h5");
        p.classList.add("card-title");
        p.innerHTML = texto;
        let botonCrear = document.createElement("button");
        botonCrear.setAttribute(
          "onclick",
          "cargarComentarios(" + id + ",'" + texto + "')"
        );
        botonCrear.classList.add("btn-dark", "btn");
        botonCrear.textContent = "Comentarios";
        botonCrear.setAttribute("type", "button");
        botonCrear.setAttribute("data-bs-toggle", "modal");
        botonCrear.setAttribute("data-bs-target", "#modal");
        let cuerpodiv = document.createElement("div");

        cuerpodiv.innerHTML = cuerpo;
        cardBody.appendChild(p);
        cardBody.appendChild(cuerpodiv);
        card.appendChild(cardBody);
        card.appendChild(botonCrear);
        columna.appendChild(card);
        //   botonCrear.innerHTML = p + card;
        post.appendChild(columna);
      });

      console.log(datos);
    } else {
      console.log(res.status);
    }
  } catch (err) {
    console.log(err);
  }
};

cargarPost();
const cargarComentarios = async (id, titulo) => {
  try {
    document.getElementById("aux").innerHTML = titulo;
    const urlcomments =
      "https://jsonplaceholder.typicode.com/posts/" + id + "/comments";
    const respuesta = await fetch(urlcomments);
    if (respuesta.ok) {
      const datos = await respuesta.json();
      const comentarios = document.getElementById("comments");
      comentarios.innerHTML = "";
      datos.forEach((element) => {
        let commentId = element.postId;
        let nombre = element.name;
        let email = element.email;
        let cuerpo = element.body;

        nombre = nombre.toUpperCase();

        let name = document.createElement("h5");
        name.classList.add("modal-title");
        name.innerHTML = nombre;
        let mail = document.createElement("p");
        mail.innerHTML = email;
        let cuerpote = document.createElement("p");
        cuerpote.innerHTML = cuerpo;

        comentarios.appendChild(name);
        comentarios.appendChild(mail);
        comentarios.appendChild(cuerpote);

        console.log(id, commentId);
      });

      console.log(datos);
    } else {
      console.log(respuesta.status);
    }
  } catch (err) {
    console.log(err);
  }
};
