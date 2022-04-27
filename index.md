<!DOCTYPE html>
<html lang="es">
  <head>
    <title>Challenge One - Heriberto Mondaragon Osorio</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="css/normalize.css">
    <link rel="stylesheet" href="css/estilo.css">
  </head>
  <body>
   <div class="container">
       <img src="img/Logo.png" alt="logo" class="logo">
       <div><textarea name="textarea" rows="20" cols="50" class="textarea" id="textarea" placeholder="Ingrese el texto aqu&iacute;"></textarea>
          <p class="aviso"> <img src="img/icono.png" alt="icono" height="10"> Solo letras minúsculas y sin acentos</p>
          <div class="botones">
              <button type="submit" class="encriptar" onclick="encriptar()">Encriptar</button>
              <button type="submit" class="desencriptar" onclick="desencriptar()">Desencriptar</button>
          </div>
       </div>
       <div><canvas id="rectangulo"></canvas>
            <img src="img/Muneco.png" alt="" class="muneco" id="muneco" name="imagencodificado">
            <textarea name="textarea2" rows="20" cols="50" class="textarea2" id="codificado">Ningún mensaje fue encontrado</textarea>
            <p class="texto-validacion" id="ocultar">Ingresa el texto que desees encriptar o desencriptar.</p>
            <button type="submit" class="copiar" id="copiar" onclick="copiar()" value="copiar">Copiar</button>
    
        </div>
    </div>
  <script src="js/javascript.js"></script>
  </body>
  <footer>
    Elaborado por: Heriberto Mondragon Osorio
  </footer>
</html>
