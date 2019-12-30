const GET_URL = "https://script.google.com/macros/s/AKfycbxNB2jIjJA8W3aj-WvDf1BqA6BgRSfbq2IFjQzfIsIUzMNYxMdM/exec";
class ContactForm {
  constructor(el){
    this.form = el;
    this.nameInput = el.elements.name;
    this.emailInput = el.elements.email;
    this.messageInput = el.elements.message;
    this.submitButton = el.elements.submitbutton;
    this.setOnClick();
    this.setUpXmlHttpRequest();
  }
  setOnClick() {
    this.submitButton.addEventListener('click',(e) => this.submitFormData(e));
  }
  setUpXmlHttpRequest() {
    let xhr = new XMLHttpRequest();
    xhr.open('post', GET_URL);
    xhr.onload = function() {
        if(xhr.status !== 200)
        {
            return alert("Unexpected response");
        }

        const response = JSON.parse(xhr.responseText);

        if(response.message === 0)
        {
            return console.log(response.error);
        }

        return console.log(response);
    };
    this.xhr = xhr;
  }
  submitFormData(e){
    e.preventDefault();
    const data = new FormData();
    data.append('timestamp',this.nameInput.value);
    data.append('name',this.nameInput.value);
    data.append('email',this.emailInput.value);
    data.append('message',this.messageInput.value);
    console.log(data);
    this.xhr.send(data);
    this.setUpXmlHttpRequest();
  }
}
