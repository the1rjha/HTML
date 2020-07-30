document.getElementById("heading").innerHTML =
    localStorage["title"] || "Just Write Text Editor"; // default text
//localStorage['title'] is a dictionary with 'title' being the key and 'Just Write' the value
document.getElementById("content").innerHTML =
    localStorage["text"] || "Text is automatically saved, try it out! "; // default text