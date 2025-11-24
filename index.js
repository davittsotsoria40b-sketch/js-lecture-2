let password = prompt("შეიყვანეთ პაროლი:");

if (password === "geolabreact123") {
  console.log("წვდომა დაშვებულია");
} else {
  console.log("წვდომა აკრძალულია");
}

let sum = 0;

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    sum +=
     i;
  }
}

console.log("1-20 ლუწი რიცხვების ჯამი არის:", sum);

let balance = 1000;

let userChoice = prompt(
  "აირჩიე ოპერაცია:\n1 - შეამოწმე ბალანსი\n2 - შეტანა\n3 - გატანა\n4 - გამოსვლა"
);

switch (userChoice) {
  case "1":
    alert("თქვენი ბალანსია: " + balance);
    break;

  case "2":
    let depositAmount = +prompt("შეიყვანეთ დასამატებელი თანხა:");
    balance += depositAmount;
    alert("განახლებული ბალანსი: " + balance);
    break;

  case "3":
    let withdrawAmount = +prompt("რამდენის გატანა გსურთ?");
    if (withdrawAmount > balance) {
      alert("ბალანსი არასაკმარისია!");
    } else {
      balance -= withdrawAmount;
      alert("გატანილია! ახალი ბალანსი: " + balance);
    }
    break;

  case "4":
    alert("გმადლობთ გამოყენებისთვის!");
    break;

  default:
    alert("არასწორი არჩევანი!");
}
