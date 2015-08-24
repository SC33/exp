<div class="row" id="img">
<?php 
$images = scandir('img/');
if (false !== $images) {
    $imgarray = preg_grep('/\.(?:jpe?g)$/', $images);
	foreach($imgarray as $row) { 
?>  
	<div class="<?php echo $photo_col;?> img-col">
		<a href="<?php echo 'img/'.htmlspecialchars(urlencode($row));?>" class="fancybox-thumb" rel="group" title="<?php echo $photo_alt;?>">
			<img class="img-responsive well" src="<?php echo 'img/'.htmlspecialchars(urlencode($row));?>" alt="<?php echo $photo_alt;?>">
	</a></div>
<?php }} ?>
</div>