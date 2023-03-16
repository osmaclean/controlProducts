
; (function () {
    'use strict'

    const addButton = document.getElementById('add');
    const removeButton = document.getElementById('remove');


    class Products {
        constructor() {
            this.id = 1;
            this.arr = [];
        }

        add() {
            let product = this.lerDados();

            if (this.validate(product) == true) {
                this.save(product);
            }

            this.list();
            this.cancel();

        }


        lerDados() {
            let product = {};
            product.id = this.id;
            product.name = document.getElementById('pdNome').value;
            product.price = document.getElementById('pdPreco').value;

            return product

        }

        validate(p) {
            let msg = '';

            if (p.name == '' || p.price == '') {
                msg += "Insira corretamente os dados"
            }

            if (msg != '') {
                alert(msg)
                return false
            }
            return true

        }

        save(product) {
            this.arr.push(product);
            this.id++
        }

        list() {
            let tbody = document.getElementById('tbody');
            tbody.innerText = '';

            for (let i = 0; i < this.arr.length; i++) {
                let tr = tbody.insertRow();
                let td_id = tr.insertCell()
                let td_name = tr.insertCell()
                let td_price = tr.insertCell()
                let td_remove = tr.insertCell()

                td_name.style.width = '100px'
                td_price.style.width = '100px'

                td_remove.setAttribute("id", 'deleteImg')

                td_id.innerText = this.arr[i].id;
                td_name.innerText = this.arr[i].name;
                td_price.innerText = `R$${this.arr[i].price}`;

                let img = document.createElement('img');
                img.setAttribute("id", "deleteImg")
                img.src = 'assets/src/img/del.png';

                img.addEventListener('click', () => {
                    this.delete(this.arr[i].id)
                });

                td_remove.appendChild(img)
            }
        }

        cancel() {
            document.getElementById('pdNome').value = '';
            document.getElementById('pdPreco').value = '';
        }

        delete(id) {
            let tbody = document.getElementById('tbody');

            for (let i = 0; i < this.arr.length; i++) {
                if (this.arr[i].id == id) {
                    this.arr.splice(i, 1);
                    tbody.deleteRow(i);
                    alert(`Você está apagando a linha ${i}\nItem apagado com sucesso!`)
                }
            }
        }
    }



    const product = new Products();

    addButton.addEventListener('click', () => {
        product.add()
    });

    removeButton.addEventListener('click', () => {
        product.cancel()
    });


})()


