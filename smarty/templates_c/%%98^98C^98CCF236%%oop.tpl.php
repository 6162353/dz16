<?php /* Smarty version 2.6.28, created on 2016-06-30 16:29:46
         compiled from oop.tpl */ ?>
<!DOCTYPE HTML>
<html>
<head>
<meta charset="utf-8">
<title>Доска объявлений</title>

<!-- Latest compiled and minified CSS -->

<script src="https://code.jquery.com/jquery-2.1.4.min.js"></script>

<link href="bootstrap-3.3.6-dist/css/bootstrap.min.css" rel="stylesheet">

<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">

<!-- Optional theme -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap-theme.min.css">

<!-- Latest compiled and minified JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
<script src="./main.js?9"></script>



</head>
<body style="width:500px; padding: 30px;">


    

    <div id='container' class="alert alert-info alert-dismissible" style="display: none" role="alert">
        <button type="button" class="btn btn-info btn-sm" style="float: right;" 
                onclick="$('#container').hide(); return false;">
      <span aria-hidden="true">&times;</span></button>
        <div id='container-info'></div>
</div>
    
<?php $_smarty_tpl_vars = $this->_tpl_vars;
$this->_smarty_include(array('smarty_include_tpl_file' => 'table.tpl.html', 'smarty_include_vars' => array()));
$this->_tpl_vars = $_smarty_tpl_vars;
unset($_smarty_tpl_vars);
 ?>

<!-- ФОРМА -->    



<form  id='form' class="form-horizontal" role="form" method="post">
    
    
<div class="row">
    <div class="col-md-6">
<label >
   
<input type="radio" <?php echo $this->_tpl_vars['checkedPrivate']; ?>
 value='1' name="private">Частное лицо

</label> 
    <label >
        
<input type="radio" <?php echo $this->_tpl_vars['checkedCompany']; ?>
 value='0' name="private">Компания</label> </div>
    </div>

<!-- ИМЯ -->
    
<div class="row">

    <div class="col-md-6">
<label class="control-label" >
Ваше имя</label>
</div>
    <div class="col-md-6">
<input type="text" maxlength="40" class="form-input-text" 
       value="<?php echo $this->_tpl_vars['seller_name']; ?>
" name="seller_name" id="fld_seller_name">
        </div>
</div>



<div class="row">
    <div class="col-md-6">
    <label for="fld_email" >Электронная почта</label>
    </div>
    <div class="col-md-6">
    <input type="text" class="form-input-text"
           value="<?php echo $this->_tpl_vars['email']; ?>
" name="email" id="fld_email">
    </div></div>
    
    
    
<div class="row">
    <div class="col-md-12">
    <div >
    <label class="form-label-checkbox" for="allow_mails">
<input type="checkbox" <?php echo $this->_tpl_vars['checked_allow_mails']; ?>
 value="1" name="allow_mails" id="allow_mails" 
   class="form-input-checkbox">
<span class="form-text-checkbox">Я не хочу получать вопросы по объявлению по e-mail</span>
    </label> </div>
    </div>
</div>

   <!-- ТЕЛЕФОН -->
    
<div class="row">
    <div class="col-md-6">
    <label id="fld_phone_label" 
for="fld_phone" >Номер телефона</label> 
        </div>
    <div class="col-md-6">
<input type="text" class="form-input-text" value="<?php echo $this->_tpl_vars['phone']; ?>
" name="phone" id="fld_phone">
    </div>
    </div>

    



<!-- ГОРОД -->
<div class="row">
    <div class="col-md-6">
<label for="region" class="form-label">Город</label> 
    </div>
    <div class="col-md-6">
<select title="Выберите Ваш город" name="location_id" id="region" class="form-input-select"> 
<option value="">-- Выберите город --</option>
<option class="opt-group" disabled="disabled">-- Города --</option>

<?php $_from = $this->_tpl_vars['cities']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }if (count($_from)):
    foreach ($_from as $this->_tpl_vars['city'] => $this->_tpl_vars['value']):
?>
    
<option 
    
       <?php if ($this->_tpl_vars['location_id'] == $this->_tpl_vars['value']): ?>
            <?php echo $this->_tpl_vars['selected']; ?>
 
    <?php endif; ?>
    
    data-coords=",," 
    value="<?php echo $this->_tpl_vars['value']; ?>
"
    ><?php echo $this->_tpl_vars['city']; ?>


</option>    
    
<?php endforeach; endif; unset($_from); ?>

</select></div>
</div>


<!-- МЕТРО -->
<div class="row">
    <div class="col-md-6">
<label for="region" class="form-label">Метро</label> 
    </div>

<div class="col-md-6">
    <select title="Выберите станцию метро" name="metro_id" id="fld_metro_id" 
    class="form-input-select"> <option value="">-- Выберите станцию метро --</option>'

<?php $_from = $this->_tpl_vars['tube_stations']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }if (count($_from)):
    foreach ($_from as $this->_tpl_vars['tube_station'] => $this->_tpl_vars['value2']):
?>
    
<option 
    
       <?php if ($this->_tpl_vars['tube_station_id'] == $this->_tpl_vars['value2']): ?>
            <?php echo $this->_tpl_vars['selected']; ?>
 
    <?php endif; ?>
    
    value="<?php echo $this->_tpl_vars['value2']; ?>
"
    ><?php echo $this->_tpl_vars['tube_station']; ?>


</option>    
<?php endforeach; endif; unset($_from); ?>

</select> 
</div>
</div>




<!-- КАТЕГОРИЯ -->

<div class="row">
    <div class="col-md-6">
<label for="fld_category_id" class="form-label">Категория</label> 
    </div>
    <div class="col-md-6">
<select title="Выберите категорию объявления" name="category_id" 
id="fld_category_id" class="form-input-select">
<option value="">-- Выберите категорию --</option>

<?php $_from = $this->_tpl_vars['categories']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }if (count($_from)):
    foreach ($_from as $this->_tpl_vars['key4'] => $this->_tpl_vars['category']):
?>
    
<optgroup label="<?php echo $this->_tpl_vars['key4']; ?>
"> 
    
        <?php $_from = $this->_tpl_vars['category']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }if (count($_from)):
    foreach ($_from as $this->_tpl_vars['key3'] => $this->_tpl_vars['value3']):
?>
    <option 
        
       <?php if ($this->_tpl_vars['category_id'] == $this->_tpl_vars['value3']): ?>
            <?php echo $this->_tpl_vars['selected']; ?>
 
    <?php endif; ?>
        
        value="<?php echo $this->_tpl_vars['value3']; ?>
"><?php echo $this->_tpl_vars['key3']; ?>
</option>
        <?php endforeach; endif; unset($_from); ?>

</optgroup>

<?php endforeach; endif; unset($_from); ?>

</select> </div></div>





<!-- НАЗВАНИЕ ОБЪЯВЛЕНИЯ -->
<div class="row">
<div class="col-md-6">
    <label for="fld_title" >Название объявления</label> </div>
    <div class="col-md-6">
<input type="text" maxlength="50" class="form-input-text-long" 
       value="<?php echo $this->_tpl_vars['title']; ?>
" name="title" id="fld_title"> </div></div>

</div>




<!-- ОПИСАНИЕ ОБЪЯВЛЕНИЯ -->

<div class="row">
    <div class="col-md-6">
<label for="fld_description" class="form-label" id="js-description-label">Описание объявления</label>
    </div>
    <div class="col-md-6">
<textarea maxlength="3000" name="description" 
          id="fld_description" class="form-input-textarea"><?php echo $this->_tpl_vars['description']; ?>
</textarea> </div>

</div> 
          
        
          
<!-- ЦЕНА ОБЪЯВЛЕНИЯ -->

<div class="row">
    <div class="col-md-6">
<label id="price_lbl" for="fld_price" class="form-label">Цена</label> 
    </div>
    <div class="col-md-6">
<input type="text" maxlength="9" class="form-input-text-short" value="<?php echo $this->_tpl_vars['price']; ?>
" 
name="price" id="fld_price">&nbsp;<span id="fld_price_title">руб.</span> 
<a class="link_plain grey right_price c-2 icon-link" id="js-price-link" 
   href="/info/pravilnye_ceny?plain"><span>Правильно указывайте цену</span></a> 
    </div></div>



<!-- КНОПКИ  -->

    <div class="form-group" id="js_additem_form_submit">
        <div class="vas-submit-button pull-left"> <span class="vas-submit-border"></span> 
        <span class="vas-submit-triangle"></span> 

            <?php if ($this->_tpl_vars['post_edit']): ?>
<div class="row">                
<div class="col-md-8">
<input type="submit" value="Сохранить объявление" id="form_submit" name="form" 
class="vas-submit-input">
            </div>
 <div class="col-md-4">               
<input type="submit" value="Назад" id="form_submit" name="form" class="vas-submit-input">
</div>
</div>
<?php else: ?>

    <input type="submit" value="Добавить" id="form_submit" name="main_form" 
        class="vas-submit-input">
        

        <?php endif; ?>
        
        </div>
    </div>  <!--buttons-->



</div>
</form>


        
       
 <?php if ($this->_tpl_vars['amount_ads']): ?> 
<br><br><br><b>Ваши объявления</b>
<br><p>Название объявления | Цена | Имя | Удалить</p>
    
<?php $_from = $this->_tpl_vars['temp_array']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }if (count($_from)):
    foreach ($_from as $this->_tpl_vars['key5'] => $this->_tpl_vars['value5']):
?> 
    
<p><a href=./<?php echo $this->_tpl_vars['current_php_script']; ?>
?edit=1&id=<?php echo $this->_tpl_vars['temp_array'][$this->_tpl_vars['key5']]['id']; ?>
><?php echo $this->_tpl_vars['temp_array'][$this->_tpl_vars['key5']]['title']; ?>
</a> | 
        <?php echo $this->_tpl_vars['temp_array'][$this->_tpl_vars['key5']]['price']; ?>
 | 
        <?php echo $this->_tpl_vars['temp_array'][$this->_tpl_vars['key5']]['user_name']; ?>
 | 
        <a href=./<?php echo $this->_tpl_vars['current_php_script']; ?>
?del=1&id=<?php echo $this->_tpl_vars['temp_array'][$this->_tpl_vars['key5']]['id']; ?>
>Удалить</a></p>
<?php endforeach; endif; unset($_from); ?>
<?php endif; ?>   



     
     </body>
    </html>
    