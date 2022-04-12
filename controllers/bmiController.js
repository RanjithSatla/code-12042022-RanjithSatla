const BMIHealth = (req, res) => {
  const data = req.body;

  const healthResult = data.map(({ HeightCm, WeightKg }) => {
    const userBMI = WeightKg / Math.pow(HeightCm / 100, 2); // Calculate BMI

    const result = userBMI;
    console.log(result);
    return result;
  });

  return res.status(200).json(healthResult);
};

module.exports = { BMIHealth };
