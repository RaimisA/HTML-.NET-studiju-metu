window.onload = function() {
    checkConsent();
};

function checkConsent() {
    if (!localStorage.getItem('consent')) {
        if (confirm('Agree to terms and conditions?')) {
            localStorage.setItem('consent', 'accepted');
        }
    }
}

// function checkConsent() {
//     if (!sessionStorage.getItem('consent')) {
//         if (confirm('Agree to terms and conditions?')) {
//             sessionStorage.setItem('consent', 'accepted');
//         }
//     }
// }