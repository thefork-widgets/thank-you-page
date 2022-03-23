/**************************************************************/
/*                                                            */
/*     Open a custom url when the reservation is confirmed    */ 
/*       Useful to record objectives with Google Analytics    */
/*                                                            */
/**************************************************************/

<script type="text/javascript">
    
      if(window.location.href.search( 'thank-you' )!=-1){
          window.open("https://github.com/thefork-widgets"); // To open a new tab
          window.top.location.href= "https://github.com/thefork-widgets"; // To open in the same window 
      }
</script>

/**************************************************************/
/*                                                            */
/*                In several languages:                       */
/*                                                            */
/**************************************************************/

<script type="text/javascript">
    
      if(window.location.href.search( 'thank-you' )!=-1){
          if(pathname.search('fr_FR')!=-1){
               window.top.location.href= "https://github.com/thefork-widgets"; // FR
          }else if(pathname.search('pt_PT')!=-1){
      	     window.top.location.href= "https://github.com/thefork-widgets"; // PT
          }else{
               window.top.location.href= "https://github.com/thefork-widgets"; // EN
          }
      }
</script>
