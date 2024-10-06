// 1. Create a signup form and display form data in your web
// page on submission.


const form = document.getElementById('signup-form');
const formDataContainer = document.getElementById('form-data');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const formData = {
        name,
        email,
        password
    };

    const formDataHtml = `
        <h2>Form Data</h2>
        <p>Name: ${formData.name}</p>
        <p>Email: ${formData.email}</p>
        <p>Password: ${formData.password}</p>
    `;

    formDataContainer.innerHTML = formDataHtml;
});

// 2. Suppose in your webpage there is content area in which
// you have entered your item details, but user can only see
// some details on first look. When user clicks on “Read
// more” button, full detail of that particular item will be
// displayed.


function expand() {
    var para = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates eveniet obcaecati consequatur aut ducimus voluptas debitis praesentium doloremque quas dolores rerumeius cumque, quia provident aspernatur, placeat libero impedit molestiae."
    document.getElementById("para").innerHTML = para
}


// 3. In previous assignment you have created a tabular data
// using javascript. Let’s modify that. Create a form which
// takes student’s details and show each student detail in
// table. Each row of table must contain a delete button and
// an edit button. On click on delete button entire row should
// be deleted. On click on edit button, a hidden form will
// appear with the values of that row.



const studentForm = document.getElementById('student-form');
const studentTableBody = document.getElementById('student-table-body');
const editFormContainer = document.getElementById('edit-form-container');
const editForm = document.getElementById('edit-form');

let students = [];

studentForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const rollno = document.getElementById('rollno').value;
    const grade = document.getElementById('grade').value;

    const student = {
        name,
        rollno,
        grade
    };

    students.push(student);

    const tableRow = `
        <tr>
            <td>${name}</td>
            <td>${rollno}</td>
            <td>${grade}</td>
            <td>
                <button class="delete-btn">Delete</button>
                <button class="edit-btn">Edit</button>
            </td>
        </tr>
    `;

    studentTableBody.innerHTML += tableRow;

    document.getElementById('name').value = '';
    document.getElementById('rollno').value = '';
    document.getElementById('grade').value = '';
});

studentTableBody.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete-btn')) {
        const row = e.target.parentNode.parentNode;
        row.remove();
    } else if (e.target.classList.contains('edit-btn')) {
        const row = e.target.parentNode.parentNode;
        const name = row.cells[0].textContent;
        const rollno = row.cells[1].textContent;
        const grade = row.cells[2].textContent;

        document.getElementById('edit-name').value = name;
        document.getElementById('edit-rollno').value = rollno;
        document.getElementById('edit-grade').value = grade;

        editFormContainer.style.display = 'block';
    }
});

editForm