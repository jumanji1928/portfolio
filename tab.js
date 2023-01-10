const tab_ids = ["intro", "projects", "skills", "contact"];

for (let i = 0; i < tab_ids.length; i++){
  if(tab_ids[i] != "intro"){
    document.getElementById(tab_ids[i]).classList.add("hide");
  }
}

function showhidetabs(tab){
  console.log(tab);
  for(let i = 0; i < tab_ids.length; i++){
    document.getElementById(tab_ids[i]).classList.add("hide");
    if(tab_ids[i] == tab){
      document.getElementById(tab_ids[i]).classList.add("show");
  }
}
