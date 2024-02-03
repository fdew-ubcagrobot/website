import React from "react";
// Create a footer element
const footer = document.createElement('div');
footer.id = 'footer';
footer.style.backgroundColor = '#333';
footer.style.color = 'white';
footer.style.textAlign = 'center';
footer.style.padding = '10px';
footer.style.position = 'fixed';
footer.style.bottom = '0';
footer.style.width = '100%';

// Create an image element and append it to the footer
const image = document.createElement('img');
image.src = './images/UBC_AGROBOTS.png';
image.alt = 'UBC Agrobots';
image.style.width = '20px';
image.style.height = '20px';
image.style.marginRight = '10px';
footer.appendChild(image);

// Define the menu items and create corresponding anchor elements
const menuItems = ['HOME', 'PORTFOLIO', 'PROJECTS', 'SPONSORSHIP', 'RECRUITMENT', 'CONTACT US', 'ABOUT US', 'SHOP'];
menuItems.forEach(item => {
    const link = document.createElement('a');
    link.href = '#'; // You can set the actual href value
    link.textContent = item;
    link.style.color = 'white';
    link.style.textDecoration = 'none';
    link.style.margin = '0 10px';
    footer.appendChild(link);
});

// Define the additional spans and append them to the footer
const additionalSpans = ['Achievements', 'Agrobot', 'Publications', 'AgroPonics', 'Gallery'];
additionalSpans.forEach(spanText => {
    const span = document.createElement('span');
    span.textContent = spanText;
    footer.appendChild(span);
});

// Append the footer to the body
document.body.appendChild(footer);
