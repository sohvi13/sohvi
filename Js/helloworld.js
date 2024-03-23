//Tässä annetaan napille käyttö funktio

//Kun Hae-painiketta klikataan, päivitetään kartta. 
//Javascript-funktiossa haetaan ensin tekstikenttien 
//(Katuosoite ja Kaupunki) arvot ja sen jälkeen päivitetään 
//iframe-elementin src-attribuutin arvo.
function searchForm() {
    var address = document.getElementById('textField1').value;
    var city = document.getElementById('textField2').value;
    var mapIframe = document.getElementById('map-iframe');
    
    // Rakennetaan uusi kartan url-osoite käyttäjän antamien tietojen perusteella
    var mapUrl = "https://www.google.com/maps?q=" + encodeURI(address + " " + city) + "&output=embed";
    
    // Päivitetään iframe-elementin src-attribuutti uudella url-osoitteella
    mapIframe.src = mapUrl;
  }


// Kutsutaan updateMap-funktiota sivun latautuessa, jotta kartta päivittyy oletusosoitteen perusteella
window.onload = function() {
    updateMap();
  };
