function donate(inputId, donateId, modalId, titleId) {
  // input value;
  const input = document.getElementById(inputId);
  const inputValue = parseFloat(input.value);
  // donate
  const donate = document.getElementById(donateId);
  const donateValue = parseFloat(donate.innerText);
  // my-account
  const myAccount = document.getElementById("my-account");
  const myAccountValue = parseFloat(myAccount.textContent);

  // validation check---------
  const btn = document.getElementById(modalId);

  if (isNaN(inputValue) || inputValue > myAccountValue) {
    alert("problem!!!");
    btn.removeAttribute("for");
    return;
  } else {
    btn.setAttribute("for", "my_modal_6");

    // donate add
    donate.innerText = donateValue + inputValue;

    // set my-account balance
    myAccount.innerText = myAccountValue - inputValue;
    const con = document.getElementById("con");
    const title = document.getElementById(titleId);
    const d = new Date();
    const div = document.createElement("div");
    div.innerHTML = ` <div class="card bg-base-100 border my-5  shadow-xl">
                    <div class="card-body">
                      <h2 class="card-title "> ${inputValue} Taka donate for  ${title.innerText}
</h2>
                      <p class="text-left">${d}</p>
                    </div>
                  </div>`;
    con.appendChild(div);
    console.log(con);
  }

  // input field reset
  input.value = "";
}
