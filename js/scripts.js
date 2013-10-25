$(document).ready(function(){
    
    // Click Button
    $('button').click(function(){
    
        // Store Input
        var zip = $('input').val();
        console.log(zip);

        // GET WEATHER
        $.simpleWeather({
            zipcode: zip,
            unit: 'f',
            success: function(weather){
            	html = '<img src="img/icons/' + weather.code + '.svg">';
            	html += '<h1>' + weather.temp + '&deg; ' + weather.units.temp + '</h1>';
                html += '<h3>' + weather.city + ', ' + weather.region + '</h3>';
                html += '<p>Tomorrow\'s Forecast High: ' + weather.tomorrow.high + '</p>';
 
                
                // Output on Page
                $('#weather').html(html);
            },
            error: function(error) {
                $("#weather").html('<p>'+error+'</p>');
            }
        });// end weather
        
    });//end click
    
    // Clear Input on Click
    $('input:text').click(function(){
        $('input').val('');
    });// end clear input    
    
});// end document