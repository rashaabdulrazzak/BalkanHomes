function emailSend() {
  var userName = document.querySelector("#nameModal").value;
  var email = document.querySelector("#emailModal").value;
  var message = document.querySelector("#messageModal").value;
  var subject = document.querySelector("#subjectModal").value;
  var mobile = document.querySelector("#mobileModal").value;
     if ( !iti.isValidNumber()) {
      swal("عذراً", "يرجى كتابة رقم هاتف صحيح", "error");
      return; // Stop execution if mobile number is invalid
    } 
     var messageBody =
    "Name " +
    userName +
    "<br/> Email " +
    email +
    "<br/> Mobile " +
    mobile +
    "<br/> property type " +
    subject +
    "<br/> Message" +
    message;
     fetch( "https://submit-form.com/v3U8GoM8j", {
         method: 'POST',
         body: JSON.stringify({
          message: messageBody,
        }),
      
         headers: {
           "Content-Type": "application/json",
           Accept: "application/json",
         },
     })
     .then(response => {
         if (response.ok) {
             window.location.href = "/thanks.html";
         } else {
             swal("عذراً", "حدث خطأ في إرسال الرسالة. الرجاء المحاولة مرة أخرى.", "error");
         }
     })
     .catch(err => {
         swal("عذراً", "حدث خطأ في إرسال الرسالة. الرجاء المحاولة مرة أخرى.", "error");
     });
    
}
function emailSendBanner() {
  var userName = document.querySelector("#nameBanner").value;
  var email = document.querySelector("#emailBanner").value;
  var subject = document.querySelector("#subjectBanner").value;
  var mobile = document.querySelector("#telBanner").value;
     if ( !itiBanner.isValidNumber()) {
      swal("عذراً", "يرجى كتابة رقم هاتف صحيح", "error");
      return; // Stop execution if mobile number is invalid
    } 
     var messageBody =
    "Name " +
    userName +
    "<br/> Email " +
    email +
    "<br/> Mobile " +
    mobile +
    "<br/> property type " +
    subject;
    console.log('message')
     fetch( "https://submit-form.com/v3U8GoM8j", {
         method: 'POST',
         body: JSON.stringify({
          message: messageBody,
        }),
      
         headers: {
           "Content-Type": "application/json",
           Accept: "application/json",
         },
     })
     .then(response => {
         if (response.ok) {
             window.location.href = "/thanks.html";
         } else {
             swal("عذراً", "حدث خطأ في إرسال الرسالة. الرجاء المحاولة مرة أخرى.", "error");
         }
     })
     .catch(err => {
         swal("عذراً", "حدث خطأ في إرسال الرسالة. الرجاء المحاولة مرة أخرى.", "error");
     });
    
}

function emailSendSection() {
  var userName = document.querySelector("#name").value;
  var email = document.querySelector("#email").value;
  var message = document.querySelector("#message").value;
  var subject = document.querySelector("#subject").value;
  var mobile = document.querySelector("#mobileSection").value;
     if ( !itiSection.isValidNumber()) {
      swal("عذراً", "يرجى كتابة رقم هاتف صحيح", "error");
      return; // Stop execution if mobile number is invalid
    } 
     var messageBody =
    "Name " +
    userName +
    "<br/> Email " +
    email +
    "<br/> Mobile " +
    mobile +
    "<br/> property type " +
    subject +
    "<br/> Message" +
    message;
     fetch( "https://submit-form.com/v3U8GoM8j", {
         method: 'POST',
         body: JSON.stringify({
          message: messageBody,
        }),
      
         headers: {
           "Content-Type": "application/json",
           Accept: "application/json",
         },
     })
     .then(response => {
         if (response.ok) {
             window.location.href = "/thanks.html";
         } else {
             swal("عذراً", "حدث خطأ في إرسال الرسالة. الرجاء المحاولة مرة أخرى.", "error");
         }
     })
     .catch(err => {
         swal("عذراً", "حدث خطأ في إرسال الرسالة. الرجاء المحاولة مرة أخرى.", "error");
     });
    
}