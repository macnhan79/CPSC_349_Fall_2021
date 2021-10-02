(function (window) {
    'use strict';
    var FORM_SELECTOR = '[data-payment-form="form"]';
    var MESSAGE_SELECTOR = '[payment-message="person"]';
    var $ = window.jQuery;
    var App = window.App;
    var Payment = App.Payment;
    var DataStore = App.DataStore;
    var FormHandler = App.FormHandler;
    var paymentResponse = App.paymentResponse;
    var myPayment = new Payment(new DataStore());
    window.myPayment = myPayment;
    var message = new paymentResponse(MESSAGE_SELECTOR);
    var formHandler = new FormHandler(FORM_SELECTOR);

    formHandler.addSubmitHandler(function (data) {
        myPayment.createPayment.call(myPayment, data);
        message.addPayment.call(message, data);
        $("#payment-message").modal();
    });
})(window);