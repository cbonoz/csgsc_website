<html>
  <?php
    /*
    ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);
    error_reporting(E_ALL);
    */

    $themefile = fopen( "theme.txt", "w" );

    if( $themefile == false )
    {
      echo "Error could not access theme file.";
      exit();
    }
    else
    {
      if( empty($_POST['theme']) )
      {
        echo "Error.";
        exit();
      }
      else
      {
        fwrite( $themefile, $_POST['theme'] );
        fclose( $themefile );

        echo "Theme updated as: ";
        echo $_POST['theme'];
        echo "\n";
      }
    }
  ?>
</html>
