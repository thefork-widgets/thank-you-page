/******************************************************/
/*                                                    */
/*     Abre un url cuando se confirma la reserva      */
/*     Válido para registrar objetivos con GA         */
/*                                                    */
/******************************************************/

<script type="text/javascript">
     var pathname = window.location.pathname;
     
     console.log(pathname);
     console.log(window.location);
    
      if(pathname.search( 'thank-you' )!=-1){
          window.open("http://www.w3schools.com");
      }
</script>
