document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.service-form');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(form);
        const serviceType = formData.get('service-type');
        
        // Show confirmation
        alert(`Thank you for booking our ${serviceType} service! We will contact you soon to confirm your appointment.`);
        
        // Reset form
        form.reset();
    });
});