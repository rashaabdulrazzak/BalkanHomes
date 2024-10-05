function emailSend() {
  var userName = document.getElementById("nameModal").value;
  var email = document.getElementById("emailModal").value;
  var message = document.getElementById("messageModal").value;
  var subject = document.getElementById("subjectModal").value;
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
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "rasha.abdulrazzak@gmail.com",
    Password: "C87DC74F7C65239B4308F964C0C91FEBD4D4",
    To: "rasha.abdulrazzak@gmail.com",
    From: "rasha.abdulrazzak@gmail.com",
    Subject: "تم إرسال رسالة جديدة",
    Body: messageBody,
  }).then((message) => {
    if (message == "OK") {
      swal("تهانينا", "تم إرسال رسالتك بنجاح!", "success");
    } else {
      swal(
        "عذراً",
        "حدث خطأ بارسال الرسالة الرجاء المحاولة مرة ثانية",
        "error"
      );
    }
  });
}
