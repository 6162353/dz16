<?php /* Smarty version 2.6.28, created on 2016-07-07 19:48:51
         compiled from table_row.tpl.html */ ?>
          <tr>
              <td><?php echo $this->_tpl_vars['ad']->getId(); ?>
</td>
              <td><?php echo $this->_tpl_vars['ad']->getTitle(); ?>
</td>
              <td><?php echo $this->_tpl_vars['ad']->getDesc(); ?>
</td>
              <td><?php echo $this->_tpl_vars['ad']->getPrice(); ?>
</td>
              <td>
              
              <a class="edit" data-toggle="tooltip" title="Редактировать объявление" 
                                   ><span class='btn glyphicon glyphicon-edit'></span></a>
              
              <a class="delete " data-toggle="tooltip" title="Удалить объявление" 
                                   ><span class='btn glyphicon glyphicon-remove-circle'></span></a>
              
              
              </td>
          </tr>