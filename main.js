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


$(document).ready(function () {

    console.log("ready!");
    //$('h2').css('color', 'red');

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

    $('#ads-table').on('click', '.glyphicon-edit', function () {


        // отправка ид объявления
        
        var tr = $(this).closest('tr');
        console.log(tr);
        var id = tr.children('td:first').html();
        console.log(id);
        //alert('Load was performed.');

        var data = {'id': id};

        $.getJSON('dz16_ajax.php?edit=1', data, function (response) {

            console.log(response);
            $('#btn_add_ad').remove();
            
            btns = '<div class="row">' +                
            '<div class="col-md-8">' +
            '<input type="submit" value="Сохранить объявление"' +
            'id="btn_save_ad" name="form" class="vas-submit-input">' +
            '</div>' +
            '<div class="col-md-4">' +               
            '<input type="submit" value="Назад" id="form_submit" ' +
            'name="btn_back" class="vas-submit-input">' +
            '</div>' +
            '</div>';
            
            
            $('body').append(btns);
            
            
            
            
            
            
        })

        //загрузка значений объявления



        // подгрузка кнопок





    });






    $("#form").submit(function () {

        var form = $(this);
        var data = form.serialize();

        form.find('input.vas-submit-input').each(function () {

            data = data + '&' + $(this).attr('name') + '=' + $(this).val();

            console.log('tbody-table');
            console.log();

        });

        $.ajax({// инициaлизируeм ajax зaпрoс
            type: 'POST', // oтпрaвляeм в POST фoрмaтe, мoжнo GET
            url: 'dz16_ajax.php', // путь дo oбрaбoтчикa, у нaс oн лeжит в тoй жe пaпкe
            dataType: 'json', // oтвeт ждeм в json фoрмaтe
            data: data, // дaнныe для oтпрaвки
            success: function (response) {

                console.log(response);

                var tbody_table = $('#tbody-table').html();
                var new_tr = '';

                console.log('tr');
                console.log(new_tr);

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

                console.log('tr');
                console.log(new_tr);

                $('#tbody-table').html(tbody_table + new_tr);
                ;


                console.log('tbody after append ');
                console.log($('#tbody-table').html());





            }

        });
        return false; // вырубaeм стaндaртную oтпрaвку фoрмы    

//        $('#container').load('dz15_ajax.php?del=1&id=' + id, function () {
//            tr.fadeOut('slow');
//            });
//        }
//
//        );

    });

});


