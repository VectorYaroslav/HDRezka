cookies_data = false                                    // Choose how get/save URLS : cookies or json file

cookie_name = "hdrezka_array_urls";
request_url = 'http://localhost/HDRezka/index.php'

array_urls = []
urls = []

if(cookies_data){
  urls = JSON.parse(getCookie(cookie_name))             // Get URLS from Cookies
}else{
  /********** Get URLS from json file **********/
  var xhr = new XMLHttpRequest()

  xhr.open('GET', request_url+"?get_data=1", true)
  xhr.onreadystatechange = (e) => {
    if (xhr.readyState !== 4) return

    if (xhr.status === 200){
      //console.log('SUCCESS', xhr.responseText);       // If Response OK
      urls = JSON.parse(xhr.responseText)

      /********** Check if Cookies/json data exists **********/
      if (urls.length > 0) {
        for (let i = 0; i < urls.length; i++) {
          var selected_item = document.querySelector('[data-url="' + urls[i] + '"]')
          if(selected_item) selected_item.classList.add("selected");
        }
        console.log(new Date() + "====================" + " Cookies/json data URLS " + "====================")
        console.log(urls)
        console.log(new Date() + "====================" + " Cookies/json data URLS " + "====================(END)")
      } else {
        console.log(new Date() + "====================" + " Cookies/json data URLS " + "====================")
        console.log("No urls")
        console.log(new Date() + "====================" + " Cookies/json data URLS " + "====================(END)")
      }
      /********** Check if Cookies/json data exists(END) **********/

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
          stopAllEvents(e)                                 // Stop all events by click on element
      
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
      
          if (urls.length > 0) deleteCookie(cookie_name)  // Delete old Cookies
      
          json_urls = JSON.stringify(urls)
          if(cookies_data){
            setCookie(cookie_name, json_urls)             // Set new Cookies
          }else{
       
          /********** Add URLS to json file **********/
          var xhr = new XMLHttpRequest()
      
          xhr.open('GET', request_url+"?set_data="+json_urls, true)
          xhr.onreadystatechange = (e) => {
            if (xhr.readyState !== 4) return
        
            if (xhr.status === 200){
              //console.log('SUCCESS', xhr.responseText); // If Response OK
            }
            else
              console.warn('ERROR');
            
          };
          xhr.send(null);
          /********** Add URLS to json file(END) **********/
        }
      
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
    }
    else
      console.warn('ERROR');
    
  };
  xhr.send(null);
  /********** Get URLS from json file(END) **********/
}