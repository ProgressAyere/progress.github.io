const contactList = document.getElementById("contact-list");

// Regular expression patterns for input validation
const nameRegex = /^[a-zA-Z ]+<span class="math-inline">/;
const emailRegex \= /^\[\\w\+\\\.\]\+@\[a\-zA\-Z\]\+\\\.\[a\-zA\-Z\]\+</span>/;
const phoneRegex = /^\d+<span class="math-inline">/;
// Function to validate input
function validateInput\(name, email, phone\) \{
if \(\!nameRegex\.test\(name\)\) \{
alert\("Invalid <3\>name\!"\);
return false;
\}
if \(\!emailRegex\.test\(email\)\) \{
alert\("Invalid email\!"\);
return false;
\}
if \(\!phoneRegex\.test\(phone\)\) \{
alert\("Invalid phone number\!"\);
return false;</3\>
\}
return true;
\}
// Function to add a new contact
function addContact\(name, email, phone\) \{
if \(\!validateInput\(name, email, phone\)\) return;
const contact \= \{ name, email, phone \};
// Add contact to data storage \(local storage, database, etc\.\)
// For this example, we'll just store it in an array
const contacts \= <4\>JSON\.parse\(localStorage\.getItem\("contacts"\)\) \|\| \[\];
contacts\.push\(contact\);
localStorage\.setItem\("contacts", JSON\.stringify\(contacts\)\);
updateContactList\(\);</4\>
\}
// Function to update the contact list
function updateContactList\(\) \{
contactList\.innerHTML \= "";
// Get contacts from data storage
const contacts \= JSON\.parse\(localStorage\.getItem\("contacts"\)\) \|\| \[\];
for \(const contact of contacts\) \{
const listItem \= document\.createElement\("li"\);
listItem\.innerHTML \= \`
<span\></span>{contact.name}</span>
            <span><span class="math-inline">\{contact\.email\}</span\>
<span\></span>{contact.phone}</span>
            <button onclick="editContact('<span class="math-inline">\{contact\.email\}'\)"\>Edit</button\>
<button onclick\="deleteContact\('</span>{contact.email}')">Delete</button>
        `;
        contactList.appendChild(listItem);
    }
}

// Function to edit an existing contact
function editContact(email) {
    // Implement edit functionality using a modal or similar UI element
    // ...
}

// Function to delete a contact
function deleteContact(email) {
    // Get contacts from data storage
    const contacts = JSON.parse(localStorage.getItem("contacts")) || [];

    // Find the contact index
    const index = contacts.findIndex(contact => contact.email === email);

    if (index !== -1) {
        contacts.splice(index, 1);
        localStorage.setItem("contacts", JSON.stringify(contacts));
        updateContactList();
    } else {