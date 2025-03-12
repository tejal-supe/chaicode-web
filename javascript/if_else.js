function checkTruthyValue(value) {
  if (value) {
    console.log("Truthyyy");
  } else {
    console.log("Falssy");
  }
}

checkTruthyValue(1);
checkTruthyValue(0);
checkTruthyValue("");
checkTruthyValue("123");
checkTruthyValue({});
checkTruthyValue([]);
checkTruthyValue([1, 2, 3, 5]);
checkTruthyValue({ name: "Tejal" });
