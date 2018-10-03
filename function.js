/**************************************************************/
/*                                                            */
/*     Open a custom url when the reservation is confirmed    */ 
/*       Useful to record objectives with Google Analytics    */
/*                                                            */
/**************************************************************/

<script type="text/javascript">
     var pathname = window.location.pathname;
     
     console.log(pathname);
     console.log(window.location);
    
      if(pathname.search( 'thank-you' )!=-1){
          window.open("http://www.w3schools.com"); // To open a new tab
          window.top.location.href= "http://www.w3schools.com"; // To open in the same window
  
      }
</script>
