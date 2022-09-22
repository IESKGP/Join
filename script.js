
// Toggle Nav Menu

var toggleNavbar = document.querySelector(".toggle-navbar");
var wrap = document.querySelector(".wrap");

function toggle(){
    wrap.classList.toggle("active");
}


var divs = ["home","college", "school"];
var visibleId = null;
function show(id) {
  if (visibleId !== id) {
    visibleId = id;
  }
  hide();
}
function hide() {
  var div, i, id;
  for (i = 0; i < divs.length; i++) {
    id = divs[i];
    div = document.getElementById(id);
    if (visibleId === id) {
      div.style.display = "inline-grid";
    } else {
      div.style.display = "none";
    }
  }
}


const paymentRef = () => {
  document.getElementById('payment-ref').style.display ="block";
}


// Form Validation

var ReferralNames = ["Biplab Pati","Rohan Thapa","Ayan De","Kavita Bharti","Snigdha Mahata"];
var ReferralCodes = ["IES01AA1A","IES02AB2B","IES03AC3C","IES04AB3D","IES05AC5E"];

const verifyRId = () =>{
  var userReferralCodes = document.getElementById('r-id').value;
  let ReferralCodeError = 0;
  for(i=0; i<= ReferralCodes.length;i++)
  {
   if(userReferralCodes === ReferralCodes[i])
  {
    document.getElementById('ref-id').style.color = "#2FAB00";
    document.getElementById('ref-id').innerHTML = "Referral ID Verified ✅";
    document.getElementById('ref-ids').style.color = "#2FAB00";
    document.getElementById('ref-ids').innerHTML = "Referral ID Verified ✅";
    document.getElementById('referral-name').value = ReferralNames[i];
    document.getElementById('referral-name').style.color = "#2FAB00";
    ReferralCodeError++;
    break;
  }
}
if(ReferralCodeError === 0){
  document.getElementById('referral-name').value = null;
  document.getElementById('ref-id').innerHTML = "Wrong Referral ID ❌";
  document.getElementById('ref-id').style.color = "#DF0713";
  document.getElementById('ref-ids').innerHTML = "Wrong Referral ID ❌";
  document.getElementById('ref-ids').style.color = "#DF0713";
}
}




/* -------------------Joining Form Google Sheet--------------- */

const scriptURL = 'https://script.google.com/macros/s/AKfycbzidp3oa1OZ-Yee1p3IubFsHTCaXg-bxsVW9PGXmejxn8f9z-_VNJ_0D0BoxiDnB7sS/exec'
const form = document.forms['JoinCollege']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => location.replace("https://ieskgp.org.in/"))
    .catch(error => console.error('Error!', error.message))
})


const scriptSURL = 'https://script.google.com/macros/s/AKfycbzvjfxKYXVznWtNe-wGgNPm4co0AApmE9ZhFydDHel3wiLnpxJ9mkqljgnBr6RDMfla/exec'
const formS = document.forms['joinSchool']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptSURL, { method: 'POST', body: new FormData(formS)})
    .then(response => location.replace("https://ieskgp.org.in/"))
    .catch(error => console.error('Error!', error.message))
})



const buttonDis = () =>{
  document.getElementById('disable').innerText = "submitted successfully ✅";
  document.getElementById('disable').style.color = "#2FAB00";
   setTimeout(() =>{
       document.getElementById("disable").disabled = true;
   },500);
   setTimeout(() =>{
      document.getElementById("disable").disabled = false;
   }, 2000);
}


//Disable Right Click
document.addEventListener("contextmenu", function(e){
    e.preventDefault();
},false)

//Disable Shortcut Keys
document.addEventListener("keydown",function(e){
    if(e.ctrlKey || e.keycode==123){
        e.stopPropagation();
        e.preventDefault();
    }
});
