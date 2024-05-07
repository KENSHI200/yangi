 
  
  
//  document.appendChild(div);
//  document.querySelector(div).innerHTML = `
//  <img src="https://assets.turbologo.ru/blog/ru/2020/02/18162735/Toyota-logo-958x575.png" alt="">
//  <h1>Toyota Supra</h1> 
//  <p>Компания Тойота (Toyota Motor Corporation) является крупнейшей японской автомобилестроительной корпорацией. 
//  Кроме выпуска авто бренд занимается
//   предоставлением финансовых услуг. Штаб-квартира расположена в Японии (город Тоёта). Основатель компании — Киитиро Тоёда.</p>
 
//  `
//  function toyotaSup(){
//     document.createElement(" <img.src=https://assets.turbologo.ru/blog/ru/2020/02/18162735/Toyota-logo-958x575.png");
//     document.createElement("h1").innerText = "Toyota Supra";
//     document.createElement("p").innerText = `Компания Тойота (Toyota Motor Corporation) является крупнейшей японской автомобилестроительной корпорацией. 
//     Кроме выпуска авто бренд занимается
//      предоставлением финансовых услуг. Штаб-квартира расположена в Японии город Тоёта. Основатель компании Киитиро Тоёда.`
     
//  }





        const div = document.createElement("div");
 function add() {
  const image = document.createElement("img");
  const text = document.createElement("h2");
  const prg = document.createElement("p");

  image.src = "https://assets.turbologo.ru/blog/ru/2020/02/18162735/Toyota-logo-958x575.png";
  image.style = "width: 300px; height: 300px;";
  text.textContent = "Toyota Supra";
  text.style.fontSize = "35px";
  prg.textContent = `Компания Тойота (Toyota Motor Corporation) является крупнейшей японской автомобилестроительной корпорацией. 
  Кроме выпуска авто бренд занимается
   предоставлением финансовых услуг. Штаб-квартира расположена в Японии город Тоёта. Основатель компании Киитиро Тоёда.`;
  prg.style.width = "600px";

  

  container.appendChild(image);
  container.appendChild(text);
  container.appendChild(prg);
}

function remove() {
  container.innerHTML = "";
}
