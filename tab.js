const tab_ids = ["intro", "projects", "skills", "contact"];

for (let i = 0; i < tab_ids.length; i++){
  if(tab_ids != "intro"){
    document.getElementById(tab_ids[i]).classList.add("hide");
  }
}
