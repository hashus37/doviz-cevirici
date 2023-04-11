
const amountInput = document.querySelector("#amount");
const resultInput = document.querySelector("#result");
const firstOPtion = document.querySelector("#firstCurrencyOption");
const secondOption = document.querySelector("#secondCurrencyOption");
const calculateButton=document.querySelector("#calculate");

const currency =new Currency();




calculateButton.addEventListener("click",()=>{
 const amount=Number(amountInput.value.trim());
 const firstOPtionValue=firstOPtion.options[firstOPtion.selectedIndex].textContent;
 const secondOPtionValue=secondOption.options[secondOption.selectedIndex].textContent;
 
 currency.exchange(amount,firstOPtionValue,secondOPtionValue)
    .then((result)=>{
        resultInput.value = result.toFixed(3);
    })
})