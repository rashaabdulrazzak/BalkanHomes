function emailSend() {
  
  const serviceID = 'service_vjgmbds';
  const templateID = 'template_r4v7ufb';
  var userName = document.querySelector("#name").value;
  var email = document.querySelector("#email").value;
  var message = document.querySelector("#message").value;
  var subject = document.querySelector("#subject").value;
  var mobile = document.querySelector("#mobile").value;
  console.log("message", subject);
  if (!iti.isValidNumber()) {
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
  console.log("message", messageBody);
  var templateParams = {
    name: 'James',
    notes: 'Check this out!',
  };
  emailjs.sendForm(serviceID, templateID, templateParams)
  .then(() => {
    swal("تهانينا", "تم إرسال رسالتك بنجاح!", "success");
     window.location.href = "/thanks.html";
  }, (err) => {
    swal(
      "عذراً",
      "حدث خطأ بارسال الرسالة الرجاء المحاولة مرة ثانية",
      "error"
    );
  });
 
  
  return true;
}
