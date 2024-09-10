const form = document.getElementById('simpleForm');
const dataList = document.getElementById('dataList');
const showDataBtn = document.getElementById('showDataBtn');
const savedDataTitle = document.getElementById('savedDataTitle');


showDataBtn.addEventListener('click', function() {
    displayData();
    dataList.classList.remove('hidden');
    savedDataTitle.classList.remove('hidden');
});


form.addEventListener('submit', function(event) {
    event.preventDefault();

    
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const school = document.getElementById('school').value;
    const className = document.getElementById('class').value;
    const age = document.getElementById('age').value;

    
    const formData = {
        firstName: firstName,
        lastName: lastName,
        school: school,
        className: className,
        age: age
    };

    
    let storedData = JSON.parse(localStorage.getItem('formData')) || [];
    storedData.push(formData);
    localStorage.setItem('formData', JSON.stringify(storedData));

    
    form.reset();
});


function displayData() {
    const storedData = JSON.parse(localStorage.getItem('formData')) || [];
    dataList.innerHTML = '';

    storedData.forEach(function(item) {
        const li = document.createElement('li');
        li.textContent = `Jméno: ${item.firstName} ${item.lastName}, Škola: ${item.school}, Třída: ${item.className}, Věk: ${item.age}`;
        dataList.appendChild(li);
    });
}
