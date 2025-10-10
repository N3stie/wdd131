document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.rent-form');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(form);
        const equipmentType = formData.get('equipment-type');
        const duration = formData.get('duration');
        
        // Show confirmation
        alert(`Thank you for your ${equipmentType} rental request for ${duration}! We will contact you soon to confirm availability and pricing.`);
        
        // Reset form
        form.reset();
    });
});