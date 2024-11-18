"use strict";
(function outputJSON() {
    // If there are any error messages, clear them
    _clearErrorMessages();

    // initializes form object
    const damageReportForm = document.querySelector("#damageReport");
    // serializes entries and logs to console
    damageReportForm.addEventListener("submit", async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const formObj = Object.fromEntries(formData.entries());
        _clearErrorMessages();
        console.log(formObj);
        //await _submit(damageReportForm);
    });

    // outputs JSON Object (empty, logs to console for now)
    async function _submit(damageReportForm) {}
    
    function _clearErrorMessages() {
        let spans = document.querySelectorAll('span[data-valmsg-for]');
        spans.forEach(s => {
            s.textContent = "";
        });
    }
})()