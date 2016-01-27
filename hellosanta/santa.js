/**
 * Created by cobenash on 16/1/26.
 */
function select_date(date) {
    var day = date.getDay();
    if (day == 1 || day == 0) {

        return [false];

    } else {

        return [true];
    }

}
(function($) {
    //var id = $("#commerce-shipping-service-details input").attr('id');
var clickwhat1 = $('#edit-commerce-shipping-shipping-service-deliver').attr('checked');
var clickwhat2 = $('#edit-commerce-shipping-shipping-service-my-store').attr('checked');
    Drupal.behaviors.santa = {
        attach: function (context) {
            for (var id in Drupal.settings.datePopup) {
                clickwhat1 = $('#edit-commerce-shipping-shipping-service-deliver').attr('checked');
                clickwhat2 = $('#edit-commerce-shipping-shipping-service-my-store').attr('checked');
                if (clickwhat1){
                    Drupal.settings.datePopup[id].settings.minDate = +1;
                    Drupal.settings.datePopup[id].settings.beforeShowDay = select_date;//$.datepicker.noWeekends;
                } else {
                     Drupal.settings.datePopup[id].settings.minDate = +1;
                }
            }
        }
    };

})(jQuery);
