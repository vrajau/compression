const options = document.querySelectorAll('.custom-option');
for (const option of options) {
  option.addEventListener('click', function () {
    Array.from(options).forEach((option) => {
      option.classList.remove('selected');
    });


    this.classList.add('selected');

    document.querySelector('.custom-select__trigger').innerHTML = '';
    let selectedSlider = this.cloneNode(true);
    let arrow = document.createElement('div');
    arrow.setAttribute('class', 'arrow');
    arrow.setAttribute('id', 'arrow');
    selectedSlider.classList.remove('selected');
    document
      .querySelector('.custom-select__trigger')
      .appendChild(selectedSlider);
    document.querySelector('.custom-select__trigger').appendChild(arrow);
  });
}


/////////////////////////////////////////////////TOGGLE DROPDOWN
$('#arrowToggle').on('click', function(){
    $(".custom-select").toggleClass('open');
});
//------------------------------------------------------------------


$('span.custom-option').on('click', function(){
  const amountOfSpans = $('span.custom-option').length
  console.log(amountOfSpans)
  for(i = 0; i < amountOfSpans; i++){
    $('#text0' + i).css('opacity', 0);
    console.log(i)
  }

  $('#text' + this.id).css('opacity', 1);
})

/////////////////////////////////////////////////CHANGE THE OPACITY
window.addEventListener('click', function (e) {
  $('#1').on('input', function () {
    $('#layer1').css('opacity', $(this).val());
  });

  $('#2').on('input', function () {
    $('#layer2').css('opacity', $(this).val());
  });

  $('#3').on('input', function () {
    $('#layer3').css('opacity', $(this).val());
  });


//------------------------------------------------------------------



/////////////////////////////////////////////////CLOSE DROPDOWN WHEN CLICKED ON DOCUMENT
  for (const select of document.querySelectorAll('.custom-select')) {
    if (!select.contains(e.target)) {
      select.classList.remove('open');
    }
  }
});
//------------------------------------------------------------------
