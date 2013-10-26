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
            	
            	$('body').removeClass();
            	
            	html = '<img class="todayicon" src="img/icons/' + weather.code + '.svg">';
            	html += '<h1>' + weather.temp + '&deg;' + '<span>' + weather.units.temp + '</span>' + '</h1>';
                html += '<h3>' + weather.city + ', ' + weather.region + '</h3>';
                html += '<p>' + weather.forecast + ' &mdash;  &nbsp;' + weather.high + '&deg;' + ' | ' + weather.low + '&deg;' + '</p>';
                html += '<hr>';
                html += '<div class="tomorrow"><h2>Tomorrow\'s Forecast: &nbsp;</h2><img class="tomorrowicon" src="img/icons/' + weather.tomorrow.code + '.svg"><p><span>' + weather.tomorrow.high + '&deg;' + ' | ' + weather.tomorrow.low + '&deg;' + '</span><br>' + weather.tomorrow.forecast + '</p></div>';
                
                $('body').addClass('bg' + weather.code);
 
                
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