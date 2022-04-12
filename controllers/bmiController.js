const BMIHealth = (req, res) => {
  const data = req.body;

  const healthResult = data.map(({ HeightCm, WeightKg }) => {
    const userBMI = WeightKg / Math.pow(HeightCm / 100, 2); // Calculate BMI

    const [BMICategory, healthRisk] = healthDetails(userBMI); // Calculate BMI Category & Health Risk

    const result = `BMI Value: ${userBMI}, BMI Category : ${BMICategory}, Health Risk: ${healthRisk}`;
    console.log(result);
    return result;
  });

  return res.status(200).json(healthResult);
};

const healthDetails = (userBMI) => {
  //Checking BMI Category

  if (userBMI < 18.5) {
    const cat = "Under Weight";
    const risk = "Malnutrition Risk";
    return [cat, risk];
  } else if (userBMI >= 18.5 && userBMI <= 24.9) {
    const cat = "Normal Weight";
    const risk = "Low Risk";
    return [cat, risk];
  } else if (userBMI >= 25 && userBMI <= 29.9) {
    const cat = "Over Weight";
    const risk = "Enhanced Risk";
    return [cat, risk];
  } else if (userBMI >= 30 && userBMI <= 34.9) {
    const cat = "Moderately Obese";
    const risk = "Medium Risk";
    return [cat, risk];
  } else if (userBMI >= 35 && userBMI <= 39.9) {
    const cat = "Severe Obese";
    const risk = "High Risk";
    return [cat, risk];
  } else if (userBMI >= 40) {
    const cat = "Very Severely Obese";
    const risk = "Very High Risk";
    return [cat, risk];
  }
};

module.exports = { BMIHealth };
