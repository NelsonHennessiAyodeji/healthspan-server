const Drug = require("../models/Drug");

const getAllDrugs = async (req, res) => {
  try {
    const drugs = await Drug.find({});
    if (!drugs) {
      throw new Error("Unable to get all drugs");
    }
    res.json(drugs);
  } catch (error) {
    throw new Error(error.message);
  }
};

const createDrug = async (req, res) => {
  try {
    const { name, pharmacy, quantity } = req.body;
    const drug = await Drug.create({ name, pharmacy, quantity });
    if (!drug) {
      throw new Error("An error occured while creating this drug");
    }

    res.status(StatusCodes.CREATED).json({
      newDrug: {
        name: drug.name,
        pharmacy: drug.pharmacy,
        quantity: drug.quantity,
      },
    });
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = { getAllDrugs, createDrug };
