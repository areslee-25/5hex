function calculateTotal() {
  let unit_price = {
    akg: 110,
    bkg: 24,
    ckg: 22,
    dkg: 20,
  };
  var total;
  let numberKg = Math.ceil($("#qty_kg").val());
  switch (true) {
    case numberKg <= 3:
      total = unit_price.akg;
      break;
    case 3 < numberKg && numberKg < 16:
      total = (numberKg - 3) * unit_price.bkg + unit_price.akg;
      break;
    case 16 <= numberKg && numberKg <= 30:
      total = (numberKg - 3) * unit_price.ckg + unit_price.akg;
      break;
    case 31 <= numberKg:
      total = (numberKg - 3) * unit_price.dkg + unit_price.akg;
      break;
  }
  $("#total_value").text(
    (total * 1000).toLocaleString("it-IT", {
      style: "currency",
      currency: "VND",
    })
  );
}

$(function () {
  $("#qty_kg").on("change keyup", calculateTotal);
});

function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}
