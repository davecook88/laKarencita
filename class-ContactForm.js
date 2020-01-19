const GET_URL = "https://script.google.com/macros/s/AKfycbxNB2jIjJA8W3aj-WvDf1BqA6BgRSfbq2IFjQzfIsIUzMNYxMdM/exec";
class ContactForm {
  constructor(el){
    this.form = el;
    this.nameInput = el.elements.name;
    this.emailInput = el.elements.email;
    this.messageInput = el.elements.message;
    this.submitButton = el.elements.submitbutton;
    this.setOnClick();
  }
  setOnClick() {
    this.submitButton.addEventListener('click',(e) => this.submitFormData(e));
  }
  setUpXmlHttpRequest = (params) => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', `${GET_URL}?${params}`);
    xhr.onload = () => {
        if(xhr.status !== 200)
        {
            return alert("Unexpected response");
        }
        this.showMessage('Thank you for your message!',this.form);
        const response = JSON.parse(xhr.responseText);

        if(response.message === 0)
        {
          this.showMessage('Sorry, there was a problem sending your message.', this.form);
          return console.log(response.error);
        }

        return console.log(response);
    };
    xhr.send();
  }
  submitFormData(e){
    e.preventDefault();
    let params = '';
    params += `timestamp=${this.nameInput.value}&`;
    params += `name=${this.nameInput.value}&`;
    params += `email=${this.emailInput.value}&`;
    params += `message=${this.messageInput.value}`;
    console.log(params);
    this.setUpXmlHttpRequest(params);
    
  }

  showMessage(message,el){
    const html = `<h1>${message}</h1>`;
    el.innerHTML = html;
  }
}
