/* 
    Function to OPEN a specific modal by its ID
    Usage: onclick="openModal('myModalID')"
*/
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('modal-active');
        // Prevent background scrolling when modal is open
        document.body.style.overflow = 'hidden';
    }
}

/* 
    Function to CLOSE a specific modal by its ID
    Usage: onclick="closeModal('myModalID')"
*/
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('modal-active');
        // Restore background scrolling
        document.body.style.overflow = 'auto';
    }
}

/* 
    Global Event Listener
    Closes the modal if the user clicks on the dark background (overlay)
    instead of the close button.
*/
window.onclick = function(event) {
    if (event.target.classList.contains('modal-overlay')) {
        // The user clicked the overlay (background), so close that specific modal
        event.target.classList.remove('modal-active');
        document.body.style.overflow = 'auto';
    }
}