let formular = document.forms.zipcode;
let inputfield = formular.elements.zip;
let ortfield = formular.elements.ort;
let ziplist = document.getElementById('zip');

async function fetchZips() {
  try {
    const response = await fetch('./places.json');
    const data = await response.json();
    const zips = data;

    inputfield.addEventListener('input', function() {

      const inputValue = inputfield.value.trim();
      const filteredZips = zips.filter(element => element.zipcode.startsWith(inputValue));
      let list = ziplist.children

      if (filteredZips.length > 0) {
        console.log('Matching Zipcodes:', filteredZips);

        list.forEach(elm => {
            elm.remove();
        })

        filteredZips.forEach(zip => {
            let newOp = document.createElement('option');
            newOp.setAttribute('value', zip.zipcode);

            ziplist.append(newOp);
        });

      } else {
        alert('No matching Zipcodes found');
      }

      if (filteredZips[0].zipcode == inputValue) {
        ortfield.value = filteredZips[0].place;
        ortfield.focus();
      }
    });

  } catch (error) {
    console.error('Error fetching ZIP codes:', error);
  }
}

fetchZips();