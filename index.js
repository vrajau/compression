const options = document.querySelectorAll('.custom-option');

for (const option of options) {
  option.addEventListener('click', function (e) {
    Array.from(options).forEach((option) => {
      option.classList.remove('selected');
    });

    $('.selectionText').css('opacity', 0);
    $(`#text${this.id}`).css('opacity', 1);

    if (e.target.classList.contains('custom-option')) {
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
    }
  });
}

const sliders = document.querySelectorAll('.slider');

sliders.forEach((slider) => {
  slider.addEventListener('click', (e) => {
    e.stopImmediatePropagation();
  })
});




/////////////////////////////////////////////////TOGGLE DROPDOWN
$('#arrowToggle').on('click', function () {
  $('.custom-select').toggleClass('open');
});
//------------------------------------------------------------------

/////////////////////////////////////////////////CHANGE THE OPACITY
window.addEventListener('click', function (e) {
  $('#L15').on('input', function () {
    $('#layer15').css('opacity', $(this).val());
  });

  $('#L14').on('input', function () {
    $('#layer14').css('opacity', $(this).val());
  });

  $('#L13').on('input', function () {
    $('#layer13').css('opacity', $(this).val());
  });

  $('#L12').on('input', function () {
    $('#layer12').css('opacity', $(this).val());
  });

  $('#L11').on('input', function () {
    $('#layer11').css('opacity', $(this).val());
  });

  $('#L10').on('input', function () {
    $('#layer10').css('opacity', $(this).val());
  });

  $('#L9').on('input', function () {
    $('#layer9').css('opacity', $(this).val());
  });

  $('#L8').on('input', function () {
    $('#layer8').css('opacity', $(this).val());
  })

  $('#L7').on('input', function () {
    $('#layer7').css('opacity', $(this).val());
  })

  $('#L6').on('input', function () {
    $('#layer6').css('opacity', $(this).val());
  })

  $('#L5').on('input', function () {
    $('#layer5').css('opacity', $(this).val());
  })

  $('#L4').on('input', function () {
    $('#layer4').css('opacity', $(this).val());
  })

  $('#L3').on('input', function () {
    $('#layer3').css('opacity', $(this).val());
  })

  $('#L2').on('input', function () {
    $('#layer2').css('opacity', $(this).val());
  })

  $('#L1').on('input', function () {
    $('#layer1').css('opacity', $(this).val());
  })
  //------------------------------------------------------------------

  /////////////////////////////////////////////////CLOSE DROPDOWN WHEN CLICKED ON DOCUMENT
  for (const select of document.querySelectorAll('.custom-select')) {
    if (!select.contains(e.target)) {
      select.classList.remove('open');
    }
  }
});
//------------------------------------------------------------------
