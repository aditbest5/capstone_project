import { event } from "jquery";

class Form extends HTMLElement{

    connectedCallback(){
        this.innerHTML = `
        <style>
            #registrasi{
                padding: 10px;
                margin: auto;
            }
        </style>
        <form id="registrasi">
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="inputName">Name</label>
                    <input type="text" class="form-control" id="inputName" placeholder="Name">
                </div>
            </div>
            <button type="submit" class="btn btn-primary">Join</button>
        </form>
        `;

        document.querySelector("#registrasi").addEventListener("submit", (event)=>{
            this.value1 = document.getElementById("inputName").value;
            //Add url
        });

    }

    get getValue1(){
        return this.value1;
    }
}


customElements.define("form-set",Form);