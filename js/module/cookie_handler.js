const createCookie = function (name, value, year) {
    let date = new Date()
    date.setTime(date.getTime()+(year*360*24*60*60*1000))
    var exp = `; expires=${date.toUTCString()};`
    document.cookie = name + '=' + value + exp + 'path=/';
  }
  
const readCookie = function(name) {
    let cookieName = name + '=';
    let cookieArray = document.cookie.split(';');
    for (let i = 0; i < cookieArray.length; i++) {
      //on récupère tous les noms et valeurs des cookies
      let cookie = cookieArray[i];
      //on supprime l'espace si il y en a un avant le nom du cookie
      while(cookie.charAt(0) == ' ') {
        cookie = cookie.substring(1, cookie.length)
      }
      //si on trouve le cookie que l'on veut, on le renvoie
      if (cookie.indexOf(cookieName) == 0) {
        return cookie.substring(cookieName.length, cookie.length)
      }
    }
    return "";
  }
  
const removeCookie = function(name) {
    //pour supprimer un cookie, il faut lui mettre une date d'expiration obsolète
    createCookie(name, '', -1)
  }
  
export {createCookie, readCookie, removeCookie}