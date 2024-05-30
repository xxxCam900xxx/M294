const accordionItems = document.querySelectorAll('.accordion-item');

// Function to toggle the accordion content
function toggleAccordion() {
  const accordionContent = this.nextElementSibling;
  this.classList.toggle('active');

  accordionItems.forEach((item) => {
    const content = item.querySelector('.accordion-content');
    const header = item.querySelector('.accordion-header');
    if (content !== accordionContent) {
      content.style.display = 'none';
      header.classList.remove('active');
    }
  });

  if (accordionContent.style.display === 'block') {
    accordionContent.style.display = 'none';
  } else {
    accordionContent.style.display = 'block';
  }
}

// Add click event listener to each accordion header
accordionItems.forEach((item) => {
  const header = item.querySelector('.accordion-header');
  header.addEventListener('click', toggleAccordion);
});