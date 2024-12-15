
array_urls = []
cookie_name = "hdrezka_array_urls";
urls = JSON.parse(getCookie(cookie_name))
if (!urls) urls = []



/********** Check if Cookies exists **********/
if (urls.length > 0) {
  for (let i = 0; i < urls.length; i++) {
    document.querySelector('[data-url="' + urls[i] + '"]').classList.add("selected");
  }
  console.log(new Date() + "====================" + " Cookies URLS " + "====================")
  console.log(urls)
  console.log(new Date() + "====================" + " Cookies URLS " + "====================(END)")
} else {
  console.log(new Date() + "====================" + " Cookies URLS " + "====================")
  console.log("No urls")
  console.log(new Date() + "====================" + " Cookies URLS " + "====================(END)")
}
/********** Check if Cookies exists(END) **********/



Array.prototype.forEach.call(document.querySelectorAll(".b-content__inline_item"), function (el) {


  /********** Set TEXT to button(END) **********/
  let btn = document.createElement("div")
  btn.classList.add("btn_url")
  if (hasClass(el, "selected")) {
    btn.innerText = "Remove URL"                    // Set text 'Remove URL' to button
  } else {
    btn.innerText = "Add URL"                       // Set text 'Add URL' to button
  }
  /********** Set TEXT to button(END) **********/


  /********** Add CLICK event to button **********/
  btn.onclick = function (e) {
    stopAllEvents()                                 // Stop all events by click on element

    const data_url = el.getAttribute("data-url");
    /********** Add URL **********/
    if (btn.innerText.includes("Add URL")) {
      btn.innerText = "Remove URL"                  // Set text 'Remove URL' to button
      el.classList.add("selected")                  // Add class 'selected' to button
      urls.push(data_url)                           // Add new url to array
      console.log(new Date() + "====================" + " New URL '" + data_url + "' added " + "====================")
    } 
    /********** Add URL(END) **********/
    /********** Remove URL(END) **********/
    else {
      btn.innerText = "Add URL"                     // Set text 'Add URL' to button
      el.classList.remove("selected")               // Remove class 'selected' from button
      const index = urls.indexOf(data_url);
      if (index > -1) urls.splice(index, 1);        // Remove url from array
      console.log(new Date() + "====================" + " URL '" + data_url + "' deleted " + "====================")
    }
    /********** Remove URL(END) **********/

    if (urls.length > 0)
      deleteCookie(cookie_name)                     // Delete old Cookies

    setCookie(cookie_name, JSON.stringify(urls))    // Set new Cookies

    console.log(new Date() + "====================" + " New URLS array " + "====================")
    if (urls.length > 0) {
      console.log(urls)
    } else {
      console.log("No URLS")
    }
    console.log(new Date() + "====================" + " New URLS array " + "====================(END)")
  }
  /********** Add CLICK event to button(END) **********/

  el.prepend(btn)
});