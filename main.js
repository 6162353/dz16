/*var xhr;
 
 if (window.ActiveXObject)  { // работаю ли я в  новом браузере или в старом
 
 xhr = new ActiveXObject('Microsoft.XMLHTTP');
 }
 
 else if (window.XMLHttpRequest) {  // проверка наличия  XHR  новый браузер
 
 xhr = new XMLHttpRequest();
 
 }
 
 else {
 throw new Error('Аякс не поддерживается этим браузером');
 }
 
 console.log(xhr);
 */

var edit_id = '';


$(document).ready(function () {

    console.log("ready!");
    //$('h2').css('color', 'red');
    
    
    
    $('#fld_price').keypress(function(key) {

    console.log(key.charCode);

if ((key.charCode > 0 && key.charCode < 48) || (key.charCode > 59 && key.charCode < 98)  
        || ( key.charCode > 99 && key.charCode < 118 ) || key.charCode > 118) return false;

});

    $('#fld_phone').keypress(function(key) {

    console.log(key.charCode);

if ((key.charCode > 0 && key.charCode < 40) || ( key.charCode > 41 && key.charCode < 45) 
        || (key.charCode > 45 && key.charCode < 48 ) || (key.charCode > 59 && key.charCode < 98)  
        || ( key.charCode > 99 && key.charCode < 118 ) || key.charCode > 118) return false;

});


    
    
    

    $('#ads-table').on('click', '.glyphicon-remove-circle', function () {

        var tr = $(this).closest('tr');
        console.log(tr);
        var id = tr.children('td:first').html();
        console.log(id);
        //alert('Load was performed.');

        var data = {'id': id};


        $.getJSON('dz16_ajax.php?del=1', data, function (response) {

            console.log(response);
            tr.fadeOut('slow', function () {


                if (response.is_last_ad) {
                    console.log(response.is_last_ad);
                    $('#container-info').html('Объявлений больше нет');
                    $('#container').fadeIn('slow');
                }

                $(this).remove();
            })
        })



    });
    
    // редактирование объявления

    $('#ads-table').on('click', '.glyphicon-edit', function () {


        // отправка ид объявления

        var tr = $(this).closest('tr');
        console.log(tr);
        var id = tr.children('td:first').html();
        console.log(id);
        //alert('Load was performed.');

        var data = {'id': id};
        edit_id = id;

        $.getJSON('dz16_ajax.php?edit=1', data, function (response) {

            console.log(response);

//                console.log('#btn_add_ad.length');
//                console.log($('#btn_add_ad').length);
            // подгрузка значений объявления в форму

            if (response['values']['private'] == '0') {

                console.log('private 0');
                $('input.private:first').removeAttr('checked');
                $('input.private:last').prop('checked', true);


            } else {
                console.log('private 1');
                $('input.private:last').removeAttr('checked');
                $('input.private:first').prop('checked', true);


            }

            $('#fld_price').val(response['values']['price']);
            $('#fld_description').val(response['values']['descr']);
            $('#fld_title').val(response['values']['title']);
            $('#fld_email').val(response['values']['email']);
            $('#fld_seller_name').val(response['values']['user_name']);
            $('#fld_phone').val(response['values']['tel']);

            $('#region').val(response['values']['id_city']);
            $('#fld_metro_id').val(response['values']['id_tube_station']);
            $('#fld_category_id').val(response['values']['id_subcategory']);

            if (response['values']['send_to_email'] == '1') {

                $('#allow_mails').prop('checked',true);
                console.log('allow_checked');


            } else {

                $('#allow_mails').removeAttr('checked');
                console.log('allow_not_checked');


            }




            // смена кнопок

            if ($('#btn_add_ad').length) {



                $('#btn_add_ad').remove();

                btns = '<div class="row">' +
                        '<div class="col-md-8">' +
                        '<input type="submit" value="Сохранить_объявление"' +
                        'id="btn_save_ad" name="form" class="vas-submit-input">' +
                        '</div>' +
                        '<div class="col-md-4">' +
                        '<input type="submit" value="Назад" id="btn_back" ' +
                        'name="form" class="vas-submit-input">' +
                        '</div>' +
                        '</div>';


                $('#form').append(btns);

            }
            ;




        })

        //загрузка значений объявления



        // подгрузка кнопок





    });





});

        // add add


$(document).on('click', '#btn_add_ad', function () {

    var form = $('#form');
    
    console.log('form');
    console.log(form);
    
    var data = form.serialize();
    
    console.log('data serialize');
    console.log(data);
 
    
    form.find('input.vas-submit-input').each(function () {

        data = data + '&' + $(this).attr('name') + '=' + $(this).val();

        console.log('data');
        console.log(data);

    });

    $.ajax({// инициaлизируeм ajax зaпрoс
        type: 'POST', // oтпрaвляeм в POST фoрмaтe, мoжнo GET
        url: 'dz16_ajax.php', // путь дo oбрaбoтчикa, у нaс oн лeжит в тoй жe пaпкe
        dataType: 'json', // oтвeт ждeм в json фoрмaтe
        data: data, // дaнныe для oтпрaвки
        success: function (response) {

            // обнуляем значения формы

            $('#form').trigger('reset');
            $('input.private:last').removeAttr('checked');
             $('input.private:first').prop('checked', true);
            $('#allow_mails').removeAttr('checked');


            
            console.log('response');
            console.log(response);

            var tbody_table = $('#tbody-table').html();
            var new_tr = '';

//                console.log('tr');
//                console.log(new_tr);

            new_tr = '<tr><td>' + response['id'] + '</td>' +
                    '<td>' + response['title'] + '</td>' +
                    '<td>' + response['description'] + '</td>' +
                    '<td>' + response['price'] + '</td>' +
                    '<td><a class="edit" data-toggle="tooltip" title="Редактировать объявление"' +
                    "><span class='btn glyphicon glyphicon-edit'></span></a>" +
                    "<a class='delete' data-toggle='tooltip' title='Удалить объявление'>"
                    + "<span class='btn glyphicon glyphicon-remove-circle'></span></a></td></tr>";


//                               console.log('a attr href');
//                               console.log(a_href);

//                console.log('tr');
//                console.log(new_tr);

            $('#tbody-table').html(tbody_table + new_tr);
            ;


//                console.log('tbody after append ');
//                console.log($('#tbody-table').html());








        }

    });




    return false; // вырубaeм стaндaртную oтпрaвку фoрмы    

    // обнуляем значения формы





});



$(document).on('click', '#btn_back', function () {

    var form=$('#form')
    // обнуление значений

    form.trigger('reset');
    $('input.private:last').removeAttr('checked');
    $('input.private:first').prop('checked', true);
    $('#allow_mails').removeAttr('checked');

    // удаление кнопок, появление кнопки - Добавить объявление

    console.log('btn_back');
    $('#btn_save_ad').remove();
    $('#btn_back').remove();

    btn_add_ad = '<input type="submit" value="Добавить" id="btn_add_ad" name="main_form"' +
            'class="vas-submit-input">';


    form.append(btn_add_ad);

});

$(document).on('click', '#btn_save_ad', function () {

    

    // передаем значения формы
    
    var form = $('#form');
    var data = form.serialize();
    
    var btn_save_ad = $('#btn_save_ad');
    
    data = data + '&' + btn_save_ad.attr('name') +
            '=' + btn_save_ad.val() +'&id=' + edit_id;

    console.log('data');
    console.log(data);
        

    

    $.ajax({// инициaлизируeм ajax зaпрoс
        type: 'POST', // oтпрaвляeм в POST фoрмaтe, мoжнo GET
        url: 'dz16_ajax.php', // путь дo oбрaбoтчикa, у нaс oн лeжит в тoй жe пaпкe
        dataType: 'json', // oтвeт ждeм в json фoрмaтe
        data: data, // дaнныe для oтпрaвки
        success: function (response) {

          
            console.log('response');
            console.log(response);

            $('td').each( function () {
                
                console.log('each td');
                
                
                if ( $(this).html() == edit_id ) {
                    
                    console.log(edit_id);
                    tr = $(this).closest('tr');
                    //если ид совпадает, то меняем значения строки
                    
//                    console.log('td:nth-child(2)');
//                    
//                    console.log($(this).find('td:nth-child(2)'));

                    // изменили значения в таблице
                    
                    tr.find('td:nth-child(2)').html(response['values']['title']);
                    tr.find('td:nth-child(3)').html(response['values']['description']);
                    tr.find('td:nth-child(4)').html(response['values']['price']);
                    
                    // перезагружаем измененные input в ходе фильтрации
                    

            $('#fld_price').val(response['values']['price']);
            $('#fld_description').val(response['values']['descr']);
            $('#fld_title').val(response['values']['title']);
            $('#fld_email').val(response['values']['email']);
            $('#fld_seller_name').val(response['values']['user_name']);
            $('#fld_phone').val(response['values']['tel']);

                }
                
                
            });


//                console.log('tr');
//                console.log(new_tr);
        
        
        }
        
      

    });
    
    return false;  
    

});



