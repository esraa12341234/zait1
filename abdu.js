function sendToWhatsApp() {
  var name = document.getElementById("name").value.trim();
  var address = document.getElementById("address").value.trim();
  var phone = document.getElementById("phone").value.trim();
  var quantity = document.getElementById("quantity").value;

  if (!name || !address || !phone || !quantity) {
    alert("يرجى ملء جميع الحقول.");
    return;
  }

  var message = `طلب جديد:
الاسم: ${name}
العنوان: ${address}
رقم الهاتف: ${phone}
عدد القطع: ${quantity}`;

  var whatsappNumber = "9647702403760"; // ← غيّره إلى رقمك
  var url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  window.open(url, '_blank');
}
