/**
 * Created by cobenash on 16/1/26.
 */
(function ($) {
    Drupal.behaviors.santa = {
        attach: function (context) {
            for (var id in Drupal.settings.datePopup) {
                Drupal.settings.datePopup['edit-commerce-shipping-service-details-time-datepicker-popup-0'].settings.beforeShowDay = $.datepicker.noWeekends;
            }
        }
    };
})(jQuery);