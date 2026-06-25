// External JavaScript
document.addEventListener('DOMContentLoaded', () => {
    // Add inline style to the custom paragraph
    const customParagraph = document.querySelector('.custom-paragraph');
    if (customParagraph) {
        customParagraph.style.backgroundColor = '#e0f2fe';
        customParagraph.style.color = '#0c4a6e';
        customParagraph.style.fontFamily = "'Inter', sans-serif";
        customParagraph.style.fontWeight = '500';
    }

    // Table row highlight on hover
    const tableRows = document.querySelectorAll('.styled-table tbody tr');
    tableRows.forEach(row => {
        row.addEventListener('mouseenter', () => {
            row.style.transition = 'background-color 0.3s ease';
        });
    });

    console.log('PixelPortfolio Prodigy loaded successfully!');
});