const tab_ids = ["intro", "c_projects", "t_projects", "skills", "contact", ];
const tab_title = ["Intro","Computer Science Projects", "Theater Projects", "Skills", "Contact"];

for(let i=0; i<tab_ids.length; i++){
document.getElementById("navbar_buttons").insertAdjacentHTML("beforeend",'<button class="btn btn-dark" type="button" onclick="showhidetabs(`'+ tab_ids[i] + '`)">'+ tab_title[i]+'</button>');
}

for (let i = 0; i < tab_ids.length; i++){
  if(tab_ids[i] != "intro"){
    document.getElementById(tab_ids[i]).classList.add("hide");
  }
}

function showhidetabs(tab){
  console.log(tab);
  for(let i = 0; i < tab_ids.length; i++){
    document.getElementById(tab_ids[i]).classList.remove("show");
    if(tab_ids[i] == tab){
      document.getElementById(tab_ids[i]).classList.add("show");
    }else {
      document.getElementById(tab_ids[i]).classList.add("hide");
    }
  }
}



