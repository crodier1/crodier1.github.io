<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Input Accept</title>    
</head>

<body>
        
        
    
    <p>File Converter</p>

    <form>
        <input type="file" name="file[]" accept=".obj, .3dm, .3ds, .dae, .dxf, .fbx, .iges, .igs, .ply, .skp, .slc, .vdafs, .vda, .vrml, .wrl, .zcp, .zpr"
            id="file-select">
        <input type="submit" id="upload-button" onclick="uploadDocs()">
        <progress value="0" id="prog" min="0" max="100"></progress>

    </form>

    <?php
    $response = Unirest\Request::post("https://mnutsch-3d-transform.p.mashape.com/http://www.3DTransform.com/api.php",
        array(
          "X-Mashape-Key" => "FgCeqiMZBJmsh6YfCRTvhhM4PuCgp13ooLGjsn7W6P7GayZBCn"
        ),
        array(
          "file" => Unirest\file::add("Handgun_obj.mtl"),
          "key" => "6627840568cd2172441fa18cacbccfaf"
        )
      );
    ?>

    
    <script src="https://code.jquery.com/jquery.js"></script>    
    <script type="text/javascript">

    function uploadDocs(){        

        
        $.ajax({
            url: "xhr2.php",
            success: function(result){
                alert(result);
            },
            error: function(result){
                alert(result);
            }
        })
        
        
    }



    
    </script>    
    
</body>
</html>