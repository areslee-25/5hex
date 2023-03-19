function calculateTotal() {
  let unit_price = {
    akg: 50,
    bkg: 24,
    ckg: 22,
    dkg: 20,
  };
  var total;
  let numberKg = Math.ceil($("#qty_kg").val());
  switch (true) {
    case numberKg <= 1:
      total = numberKg * unit_price.akg;
      break;
    case 1 < numberKg && numberKg < 16:
      total = numberKg * unit_price.bkg;
      break;
    case 16 <= numberKg && numberKg <= 30:
      total = numberKg * unit_price.ckg;
      break;
    case 31 <= numberKg:
      total = numberKg * unit_price.dkg;
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
