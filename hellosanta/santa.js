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
    var clickwhat1 = $('#edit-commerce-shipping-shipping-service-deliver').attr('checked');
    var clickwhat2 = $('#edit-commerce-shipping-shipping-service-my-store').attr('checked');
    $(document).ready(function() {
        if (clickwhat1) {
            jQuery("#edit-commerce-shipping-service-details-timing option[value='4']").remove();
        }
    });
    Drupal.behaviors.santa = {
        attach: function(context) {
            for (var id in Drupal.settings.datePopup) {
                clickwhat1 = $('#edit-commerce-shipping-shipping-service-deliver').attr('checked');
                clickwhat2 = $('#edit-commerce-shipping-shipping-service-my-store').attr('checked');
                if (clickwhat1) {
                    Drupal.settings.datePopup[id].settings.minDate = +1;
                    Drupal.settings.datePopup[id].settings.beforeShowDay = select_date;
                    jQuery("#edit-commerce-shipping-service-details-timing option[value='4']").remove();
                } else {
                    Drupal.settings.datePopup[id].settings.minDate = +1;
                }
            }
        }
    };

})(jQuery);
