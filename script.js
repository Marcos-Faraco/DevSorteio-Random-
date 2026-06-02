function generateNumber() {

    const min = Math.ceil(document.querySelector(".input-min").value)
    const max = Math.floor(document.querySelector(".input-max").value)
    const endResult = document.querySelector(".end-result")

    const result = Math.floor(Math.random() * (max - min + 1)) + min;

    endResult.innerHTML = `${result}`;

}
   

