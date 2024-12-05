// noakhali-donate

document
  .getElementById("noakhali-donate")
  .addEventListener("click", function () {
    // input value;
    const input = document.getElementById("input");
    const inputValue = parseFloat(input.value);
    // donate
    const donate = document.getElementById("donate");
    const donateValue = parseFloat(donate.innerText);
    // my-account
    const myAccount = document.getElementById("my-account");
    const myAccountValue = parseFloat(myAccount.textContent);

    // validation check---------
    const btn=document.getElementById('noakhali-donate')

    if (isNaN(inputValue) || inputValue > myAccountValue) {
      alert("problem!!!");
      btn.removeAttribute('for')
      return;
    } else {
        btn.setAttribute('for','my_modal_6')
        
    // donate add
    donate.innerText = donateValue + inputValue;

    // set my-account balance
    myAccount.innerText = myAccountValue - inputValue;
      
    }


    // input field reset
    input.value = "";
  });


