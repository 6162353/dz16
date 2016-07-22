<?php /* Smarty version 2.6.28, created on 2016-07-22 15:11:10
         compiled from table_row.tpl.html */ ?>
<?php require_once(SMARTY_CORE_DIR . 'core.load_plugins.php');
smarty_core_load_plugins(array('plugins' => array(array('modifier', 'escape', 'table_row.tpl.html', 3, false),)), $this); ?>
          <tr>
              <td><?php echo $this->_tpl_vars['ad']->getId(); ?>
</td>
              <td><?php echo ((is_array($_tmp=$this->_tpl_vars['ad']->getTitle())) ? $this->_run_mod_handler('escape', true, $_tmp, 'htmlall') : smarty_modifier_escape($_tmp, 'htmlall')); ?>
</td>
              <td><?php echo ((is_array($_tmp=$this->_tpl_vars['ad']->getDesc())) ? $this->_run_mod_handler('escape', true, $_tmp, 'htmlall') : smarty_modifier_escape($_tmp, 'htmlall')); ?>
</td>
              <td><?php echo ((is_array($_tmp=$this->_tpl_vars['ad']->getPrice())) ? $this->_run_mod_handler('escape', true, $_tmp, 'htmlall') : smarty_modifier_escape($_tmp, 'htmlall')); ?>
</td>
              <td>
              
              <a class="edit" data-toggle="tooltip" title="Редактировать объявление" 
                                   ><span class='btn glyphicon glyphicon-edit'></span></a>
              
              <a class="delete " data-toggle="tooltip" title="Удалить объявление" 
                                   ><span class='btn glyphicon glyphicon-remove-circle'></span></a>
              
              
              </td>
          </tr>