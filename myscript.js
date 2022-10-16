let todoName = document.getElementById('todo-name');
let btnSimpan = document.getElementById('btn-simpan');
btnSimpan.addEventListener('click', function () {
    
    if(todoName.value == '') {
        alert('Nama todo tidak boleh kosong');
    } else {
        let todoContainer = document.querySelector('.list-group');

        let todoHtml = todoContainer.innerHTML;
        todoHtml += `
            <li class="list-group-item d-flex justify-content-between">
                <div>
                    <input class="form-check-input me-1" type="checkbox" id="firstCheckbox">
                    <span>${todoName.value}</span>
                </div>
                <button class="bi bi-trash btn-hapus"></button>
            </li>
            `;
        todoContainer.innerHTML = todoHtml;
        todoName.value = '';
        todoName.focus();

        let checkTodo = document.querySelectorAll('.form-check-input');
        for (let i = 0; i < checkTodo.length; i++) {
            const input = checkTodo[i];
            input.addEventListener('change', function () {
                let todoLabel = input.nextElementSibling;
                todoLabel.classList.toggle('text-decoration-line-through');
            })
        }

        let btnHapus = document.querySelectorAll('.btn-hapus');
        for (let a = 0; a < btnHapus.length; a++) {
            const hapus = btnHapus[a];
            hapus.addEventListener('click', function () {
                this.parentElement.remove();
            })
        }
    }

})
