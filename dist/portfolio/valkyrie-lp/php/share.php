<?php
if ( isset($_SERVER['HTTP_REFERER']) ) {
    if ( $_SERVER['HTTP_REFERER'] == 'http://away.vk.com/' ) { header('Location: https://new.faberlic.com/viking-valkyrie'); }
    if ( $_SERVER['HTTP_REFERER'] == 'https://away.vk.com/' ) { header('Location: https://new.faberlic.com/viking-valkyrie'); }
    if ( $_SERVER['HTTP_REFERER'] == 'https://away.vk.com/away.php' ) { header('Location: https://new.faberlic.com/viking-valkyrie'); }
    if ( $_SERVER['HTTP_REFERER'] == 'http://away.vk.com/away.php' ) { header('Location: https://new.faberlic.com/viking-valkyrie'); }
    if ( $_SERVER['HTTP_REFERER'] == 'https://web.facebook.com/' ) { header('Location: https://new.faberlic.com/viking-valkyrie'); }
    if ( $_SERVER['HTTP_REFERER'] == 'https://ok.ru/' ) { header('Location: https://new.faberlic.com/viking-valkyrie'); }
}
?>
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>NUKI</title>
    <?php
    if (isset($_GET['name'])) {
        $name = $_GET['name'];
    } else {
        $name = 'Эгиль';
    }
    ?>

    <meta property="og:title" content="Моё скандинавское имя — <?= $name ?>. Узнай свое!">
    <meta property="og:image" content="https://ynv-valkyrielp.dev1.prestoheads.com/img/share.jpg" />
</head>
<body>
<?php echo $_SERVER['HTTP_REFERER'] ?>
</body>
</html>
