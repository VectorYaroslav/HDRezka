



array_urls = []
cookie_name = "array_urls";

const is_cookie = getCookie(cookie_name)

if(is_cookie){
  for (let i = 0; i < is_cookie.length; i++) {
    array_urls.push(is_cookie[i]);
  }
  console.log("URLS: "+getCookie(cookie_name))
}else{
  console.log("No Cookies")
}

 
Array.prototype.forEach.call(document.querySelectorAll(".b-content__inline_item"), function(el){

  let btn = document.createElement("div")
  btn.classList.add("btn_url")
  btn.innerText = "Add URL"
  btn.onclick = function(e){
    e.stopPropagation()
    e.preventDefault()

    const data_url = el.getAttribute("data-url");
    if(btn.innerText.includes("Add URL")){
      array_urls.push(data_url)
      btn.innerText = "Remove URL"
    }else{
      const index = array_urls.indexOf(data_url);
      if(index > -1) array_urls.splice(index, 1);
      btn.innerText = "Add URL"
    }

    if(getCookie(cookie_name)) 
      deleteCookie(cookie_name)

    setCookie(cookie_name, JSON.stringify(array_urls))
    
    console.log("New URLS: "+getCookie(cookie_name))
  }
  el.prepend(btn)
});

function setCookie(name, value) {
  document.cookie = name +'='+ value +'; Path=/;';
}
function deleteCookie(name) {
  document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

function getCookie(name) {
  var dc = document.cookie;
  var prefix = name + "=";
  var begin = dc.indexOf("; " + prefix);
  if (begin == -1) {
      begin = dc.indexOf(prefix);
      if (begin != 0) return null;
  }
  else
  {
      begin += 2;
      var end = document.cookie.indexOf(";", begin);
      if (end == -1) {
      end = dc.length;
      }
  }

  return decodeURI(dc.substring(begin + prefix.length, end));
}