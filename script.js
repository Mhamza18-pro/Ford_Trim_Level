document.getElementById('vehicle-search').addEventListener('keyup', function() {
    const searchValue = this.value.toLowerCase();
    const vehicles = document.querySelectorAll('.vehicle-image');

    vehicles.forEach(vehicle => {
        const isVisible = vehicle.alt.toLowerCase().includes(searchValue);
        vehicle.style.display = isVisible ? 'inline-block' : 'none';  // Changed from 'block' to 'inline-block'
    });
});

