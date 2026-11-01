document.getElementById('generateBtn').addEventListener('click', function(){
    var name = document.getElementById('name').value;
    var dob = document.getElementById('dob').value;
    var objective = document.getElementById('objective').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var address = document.getElementById('address').value;
    var education = document.getElementById('education').value;
    var skills = document.getElementById('skills').value;
    
    var hobbies = document.getElementById('hobbies').value;

    var resumeHTML = `
        <h2 style="text-align:center;background-color:purple;color:white;">${name}</h2>
        <p style="text-align:center; font-size:13px;color:#333;">${email}</p>
        <div class="resume-title" style="background-color:brown;">NAME:</div><p>${name}</p>
        <div class="resume-title" style="background-color:brown;">EMAIL:</div></p>${email}</p>
        <div class="resume-title" style="background-color:brown;">ADDRESS:</div></p>${address}</p>
        <div class="resume-title" style="background-color:brown;">CAREER OBJECTIVE:</div><p>${objective}</p>
        <div class="resume-title" style="background-color:brown;">EDUCATION:</div><p>${education}</p>
        <div class="resume-title" style="background-color:brwon;">SKILLS:</div><p>${skills}</p>
        <div class="resume-title" style="background-color:brown;">HOBBIES:</div><p>${hobbies}</p>
    `;

    var outputDiv = document.getElementById('resumeOutput');
    outputDiv.innerHTML = resumeHTML;
    outputDiv.style.display = 'block';
});