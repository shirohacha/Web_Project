<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>profile</title>
</head>
<body>
    <?php
        use Illuminate\Support\Facades\Auth;
        
        // Get the currently authenticated user...
        $user = Auth::user();
    ?>
</body>
</html>