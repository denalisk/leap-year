var checkLeapYear = function(year) {
  if ((year % 4 === 0) && (year % 100 != 0) || (year % 400 === 0)) {
    return true;
  }
  else {
    return false;
  }
};




$(document).ready(function() {
  $('form#year').submit(function(event) {
    event.preventDefault();
    var year = parseInt($('input#year-input').val());
    var results = checkLeapYear(year);
    if (results === true) {
      $(".print-results-true").show();
      $(".print-results-false").hide();
    }
    else {
      $(".print-results-false").show();
      $(".print-results-true").hide();
    }
  });
});
