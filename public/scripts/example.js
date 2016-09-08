console.log('example.js sourced');

$( document ).ready(function(){
  console.log('doc ready');

  $('#sendInfo').on('click', function(){
    console.log('sendInfo on click');
    // assemble object to send to server
    var creatureIn = $( '#creatureIn').val();
    var noiseIn = $('#noiseIn').val();
    var objectToSend={
      creature: creatureIn,
      noise: noiseIn,
    };
    // ajax post that sends object
    $.ajax({
      type: 'POST',
      url: '/texter',
      data: objectToSend,
      success: function( data ){
        console.log('got this from the server - ' + data);
      }
    });
  }); // send sendInfo on click
});
