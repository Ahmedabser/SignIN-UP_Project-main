function toggleForm() {
  // الحصول على عناصر النموذج من خلال معرفاتها
  let loginForm = document.getElementById('login-form');
  let signupForm = document.getElementById('signup-form');
  let formTitle = document.getElementById('login-title');

  // التحقق من حالة عرض نموذج تسجيل الدخول
  if (loginForm.style.display === 'none') {
    // إذا كان نموذج تسجيل الدخول مخفيًا، قم بعرضه
    loginForm.style.display = 'block';
    // وأخفِ نموذج التسجيل
    signupForm.style.display = 'none';
    // وتغيير عنوان النموذج إلى "Login"
    formTitle.innerHTML = 'Login';
  } else {
    // إذا كان نموذج تسجيل الدخول معروضًا، قم بإخفائه
    loginForm.style.display = 'none';
    // وعرض نموذج التسجيل
    signupForm.style.display = 'block';
    // وتغيير عنوان النموذج إلى "Sign Up"
    formTitle.innerHTML = 'Sign Up';
  }
}


// document.getElementById("signup-form").addEventListener("submit", function(event) {
//     event.preventDefault();
//     let name = document.getElementById("signup-name").value;
//     let email = document.getElementById("signup-email").value;
//     let password = document.getElementById("signup-password").value;

//     //تخزين البيانات في الذاكرة المؤقتة localhost
//     //fetch("http://localhost:3000/users", {name, email, password})  

//     // تخزين البيانات في Local Storage
//     let user = { name: name, email: email, password: password };
//     localStorage.setItem("user", JSON.stringify(user));

//     alert("تم إنشاء الحساب بنجاح! يمكنك الآن تسجيل الدخول.");
//     toggleForm(); // تحويل الفورم لتسجيل الدخول
// }); 

// document.getElementById("login-form").addEventListener("submit", function(event) {
//     event.preventDefault();
//     let email = document.getElementById("login-email").value;
//     let password = document.getElementById("login-password").value;

//     // استرجاع البيانات من Local Storage
//     let user = JSON.parse(localStorage.getItem("user"));
//     if (user.email === email && user.password === password) {
//         alert("تم تسجيل الدخول بنجاح!");
//     } else {
//         alert("البريد الإلكتروني أو كلمة المرور غير صحيحة!");
//     }
// });