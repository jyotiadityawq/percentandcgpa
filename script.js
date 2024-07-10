var calculatorForm = document.getElementById('calculator');
var subjectsDiv = document.getElementById('subjects');
var addSubjectBtn = document.getElementById('add-subject');
var resultDiv = document.getElementById('result');
var closeBtn = document.getElementById('close');
var percentageDiv = document.getElementById('percentage');
var cgpaDiv = document.getElementById('cgpa');

var subjectCount = 0;

addSubjectBtn.addEventListener('click', function() {
    subjectCount++;
    var subjectDiv = document.createElement('div');
    subjectDiv.className = 'subject';
    subjectDiv.innerHTML = `
        <label for="subject${subjectCount}">Subject ${subjectCount}:</label>
        <input type="text" id="subject${subjectCount}" name="subject${subjectCount}">
        <label for="fullMarks${subjectCount}">Full Marks:</label>
        <input type="number" id="fullMarks${subjectCount}" name="fullMarks${subjectCount}">
        <label for="obtainedMarks${subjectCount}">Obtained Marks:</label>
        <input type="number" id="obtainedMarks${subjectCount}" name="obtainedMarks${subjectCount}">
    `;
    subjectsDiv.appendChild(subjectDiv);
});

calculatorForm.addEventListener('submit', function(e) {
    e.preventDefault();
    var totalFullMarks = 0;
    var totalObtainedMarks = 0;

    for (var i = 1; i <= subjectCount; i++) {
        var fullMarks = parseInt(document.getElementById('fullMarks' + i).value);
        var obtainedMarks = parseInt(document.getElementById('obtainedMarks' + i).value);
        totalFullMarks += fullMarks;
        totalObtainedMarks += obtainedMarks;
    }

    var percentage = (totalObtainedMarks / totalFullMarks) * 100;
    var cgpa = (percentage / 9.5).toFixed(2);

    percentageDiv.textContent = 'Percentage: ' + percentage.toFixed(2) + '%';
    cgpaDiv.textContent = 'CGPA: ' + cgpa;

    resultDiv.classList.add('show');
});

closeBtn.onclick = function() {
    resultDiv.classList.remove('show');
};

window.onclick = function(e) {
    if (e.target === resultDiv) {
        resultDiv.classList.remove('show');
    }
};

