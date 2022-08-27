const button = document.querySelector("#calculated");
button.addEventListener("click", calculateAmount);

function calculateAmount(e) {
    e.preventDefault();

    const salary = document.querySelector("#salary").value;
    const hour = document.querySelector("#hour").value;
    const days = document.querySelector("#days").value;
    const rate = document.querySelector("#rate").value;

    if (salary==="" || hour==="" || days===""){
        Swal.fire({
            icon: 'error',
            title: 'Ошибка',
            text: 'Введите верную информацию!',
        })
    }

    //Формулы

    let totalSum = salary * hour * days;
    let texas =  totalSum * rate;
    let pensionFond = totalSum * 0.22;
    let insurancePay = totalSum * 0.051;

    let totalSalary = totalSum - (texas + pensionFond + insurancePay);

    texas=texas.toFixed(2);
    pensionFond = pensionFond.toFixed(2);
    insurancePay =insurancePay.toFixed(2);
    totalSalary = totalSalary.toFixed(2);

//Blocks

    document.querySelector("#countNdfl").textContent = texas;
    document.querySelector("#countPension").textContent = pensionFond;
    document.querySelector("#countInsurance").textContent = insurancePay;
    document.querySelector("#countTotal").textContent = totalSalary;

}

const buttonNdfl = document.querySelector("#btn");
buttonNdfl.addEventListener("click", showNdfl);

function showNdfl (e) {
    e.preventDefault ();
    rate.style.display = "block";
}
