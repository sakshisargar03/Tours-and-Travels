document.addEventListener('DOMContentLoaded', () => {
    // Get the dropdown filter element
    const typeFilter = document.getElementById('packageType');
    
    // Get all package cards once the DOM is ready
    const packageCards = document.querySelectorAll('.package-card');

    if (typeFilter) {
        // Add an event listener to run the filter function whenever the selection changes
        typeFilter.addEventListener('change', () => {
            const selectedType = typeFilter.value;
            filterPackages(selectedType);
        });

        const filterPackages = (type) => {
            packageCards.forEach(card => {
                const packageType = card.getAttribute('data-type');
                
                // Show all if 'all' is selected, or if the data-type matches the selected type
                if (type === 'all' || packageType === type) {
                    card.style.display = 'block'; // Show the card
                } else {
                    card.style.display = 'none'; // Hide the card
                }
            });
        };
        
        // Ensure the initial state matches the "All Packages" default
        filterPackages('all');
    }
});

// GLOBAL FUNCTION: This function is the callback required by the Google Maps API loader.
// It initiates all the individual map functions created in the EJS template.
function initAllMaps() {
    // Loop through all packages and call their respective initialization functions
    document.querySelectorAll('.package-card').forEach(card => {
        const idMatch = card.id.match(/map(\w+)/);
        if (idMatch) {
            const initFunctionName = `initMap${idMatch[1]}`;
            if (typeof window[initFunctionName] === 'function') {
                window[initFunctionName]();
            }
        }
    });
}