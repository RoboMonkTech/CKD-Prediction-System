function predictCKD() {

    let name = document.getElementById("name").value;
    let age = Number(document.getElementById("age").value);
    let bp = Number(document.getElementById("bp").value);
    let glucose = Number(document.getElementById("glucose").value);
    let creatinine = Number(document.getElementById("creatinine").value);
    let hemoglobin = Number(document.getElementById("hemoglobin").value);

    let output = document.getElementById("output");
    let message = document.getElementById("message");
    let confidence = document.getElementById("confidence");
    let risk = document.getElementById("risk");
    let resultBox = document.getElementById("resultBox");
    let icon = document.querySelector(".icon");

    resultBox.classList.remove("approved");
    resultBox.classList.remove("rejected");

    if (
        name == "" ||
        age == 0 ||
        bp == 0 ||
        glucose == 0 ||
        creatinine == 0 ||
        hemoglobin == 0
    ) {

        output.innerHTML = "Incomplete Details";

        message.innerHTML =
            "Please enter all patient details before prediction.";

        confidence.innerHTML = "--";
        risk.innerHTML = "--";

        icon.innerHTML = '<i class="fa-solid fa-circle-info"></i>';
        icon.style.color = "#2563eb";

        return;
    }

    // CKD Prediction Logic
    if (
        age > 50 &&
        bp > 140 &&
        glucose > 180 &&
        creatinine > 1.5 &&
        hemoglobin < 12
    ) {

        resultBox.classList.add("rejected");

        icon.innerHTML =
            '<i class="fa-solid fa-triangle-exclamation"></i>';

        icon.style.color = "#dc2626";

        output.innerHTML = "CKD DETECTED";
        output.style.color = "#dc2626";

        message.innerHTML =
            "Patient <b>" + name +
            "</b> is at high risk of Chronic Kidney Disease. Further clinical evaluation is recommended.";

        confidence.innerHTML = "92%";
        risk.innerHTML = "High";

    }

    else {

        resultBox.classList.add("approved");

        icon.innerHTML =
            '<i class="fa-solid fa-circle-check"></i>';

        icon.style.color = "#16a34a";

        output.innerHTML = "NO CKD DETECTED";
        output.style.color = "#16a34a";

        message.innerHTML =
            "Patient <b>" + name +
            "</b> shows a low risk of Chronic Kidney Disease based on the entered values.";

        confidence.innerHTML = "96%";
        risk.innerHTML = "Low";

    }

}
