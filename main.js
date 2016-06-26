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


        $(document).ready(function() {

console.log("ready!");
        //$('h2').css('color', 'red');
        
        $('#ads-table').on('click', '.glyphicon-remove-circle', function () {

        var tr = $(this).closest('tr');
        console.log(tr);
        var id = tr.children('td:first').html();
        console.log(id);
        //alert('Load was performed.');
        
        var data = {'id':id};
        
        $.get('dz16_ajax.php?del=1',data, function (response) {
            
            console.log(response);
            tr.fadeOut('slow',function () {
                
                $(this).remove();
                
            })
            
            
        })



//        $('#container').load('dz15_ajax.php?del=1&id=' + id, function () {
//            tr.fadeOut('slow');
//            });
//        }
//
//        );

        });
        
        });


