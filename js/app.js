import { notes } from './data.js'

//Функція для відображення нотаток
function renderNotes() {
   const notesContainer = document.getElementById('notesContainer');
   notesContainer.innerHTML = '';

   notes.forEach((note) => {
      const noteBlock = document.createElement('div');
      noteBlock.classList.add('note');

      const header = document.createElement('h3');
      header.textContent = `${note.content} (${note.category})`;
      noteBlock.appendChild(header);
      
      const creationDate = document.createElement('p');
      const formattedCreationDate = new Date(note.creationTime).toLocaleString();
      creationDate.textContent = `Дата создания: ${formattedCreationDate}`;
      noteBlock.appendChild(creationDate);

      notesContainer.appendChild(noteBlock);
   });
}
renderNotes();