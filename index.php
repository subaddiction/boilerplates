<?php include('config.php'); ?>

<?php include('header.php'); ?>

<?php if(file_exists('include/'.$_GET['file'].'.php')){ ?>
<?php include('include/'.$_GET['file'].'.php'); ?>
<?php } else { ?>
<?php include('include/home.php'); ?>
<?php } ?>
	
<?php include('footer.php'); ?>
