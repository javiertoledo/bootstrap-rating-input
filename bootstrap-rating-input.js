(function ($) {

  $.fn.rating = function () {

    var element;

    // A private function to highlight a star corresponding to a given value
    function _paintValue(ratingInput, value) {
      var selectedStar = $(ratingInput).find('i[data-value=' + value + ']');
      selectedStar.removeClass(classOff).addClass(classOn);
      selectedStar.prevAll('i').removeClass(classOff).addClass(classOn);
      selectedStar.nextAll('i').removeClass(classOn).addClass(classOff);
    }

    // A private function to remove the selected rating
    function _clearValue(ratingInput) {
      var self = $(ratingInput);
      self.find('i').removeClass(classOn).addClass(classOff);
      self.find('.rating-clear').hide();
      self.find('input').val('').trigger('change');
    }

    // Iterate and transform all selected inputs
    for (element = this.length - 1; element >= 0; element--) {

      var el, i, ratingInputs,
        originalInput = $(this[element]),
        max = originalInput.data('max') || 5,
        min = originalInput.data('min') || 0,
        base = originalInput.data('base') || "icon-star-empty",
        classOff = originalInput.data('classoff') || "icon-star-empty",
        classOn = originalInput.data('classon') || "icon-star",
        clearable = originalInput.data('clearable') || null,
        stars = '';

      // HTML element construction
      for (i = min; i <= max; i++) {
        // Create <max> empty stars
        stars += ['<i class="'+base+' '+classOff+'" data-value="', i, '"></i>'].join('');
      }
      // Add a clear link if clearable option is set
      if (clearable) {
        stars += [
          ' <a class="rating-clear" style="display:none;" href="javascript:void"><i class="icon-remove"></i> ',
          clearable,
          '</a>'].join('');
      }

      el = [
        // Rating widget is wrapped inside a div
        '<div class="rating-input">',
        stars,
        // Value will be hold in a hidden input with same name and id than original input so the form will still work
        '<input type="hidden" name="',
        originalInput.attr('name'),
        '" value="',
        originalInput.val(),
        '" id="',
        originalInput.attr('id'),
        '" />',
        '</div>'].join('');

      // Replace original inputs HTML with the new one
      originalInput.replaceWith(el);

    }

    // Give live to the newly generated widgets
    $('.rating-input')
      // Highlight stars on hovering
      .on('mouseenter', 'i', function () {
        var self = $(this);
        _paintValue(self.parent(), self.data('value'));
      })
      // View current value while mouse is out
      .on('mouseleave', 'i', function () {
        var self = $(this);
        var val = self.siblings('input').val();
        if (val) {
          _paintValue(self.parent(), val);
        } else {
          _clearValue(self.parent());
        }
      })
      // Set the selected value to the hidden field
      .on('click', 'i', function () {
        var self = $(this);
        var val = self.data('value');
        self.siblings('input').val(val).trigger('change');
        self.siblings('.rating-clear').show();
      })
      // Remove value on clear
      .on('click', '.rating-clear', function () {
        _clearValue($(this).parent());
      })
      // Initialize view with default value
      .each(function () {
        var val = $(this).find('input').val();
        if (val) {
          _paintValue(this, val);
          $(this).find('.rating-clear').show();
        }
      });

  };

  // Auto apply conversion of number fields with class 'rating' into rating-fields
  $(function () {
    if ($('input.rating[type=number]').length > 0) {
      $('input.rating[type=number]').rating();
    }
  });

}(jQuery));
