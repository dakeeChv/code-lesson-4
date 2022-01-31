const db = require("../db");
const Company = require("../model/company");

exports.Create = (req, res) => {
  try {
    let { name, address } = req.body;
    let company = new Company(name, address);

    let query = `INSERT INTO company(name, address) VALUES (?, ?)`;

    db.query(query, [company.name, company.address], (err, result) => {
      return res.status(200).json({
        message: "Create Company Successful",
      });
    });
  } catch (error) {
    return res.status(500).json({
      status: "INTERNAL_SERVER_ERROR",
      message: error.message,
    });
  }
};

exports.GetAll = (req, res) => {
  try {
    let query = "SELECT id ,name, address FROM company";

    db.query(query, (err, result) => {
      return res.status(200).json({
        result: result,
      });
    });
  } catch (error) {
    return res.status(500).json({
      status: "INTERNAL_SERVER_ERROR",
      message: error.message,
    });
  }
};

exports.Update = async (req, res) => {
  try {
    const q = `UPDATE company SET name = '${req.body.name}', 
      address = '${req.body.address}' WHERE id = ${req.params.id}`;

    db.query(q, (err, result) => {
      return res.status(200).json({
        message: "Company updated successfully",
      });
    });
  } catch (error) {
    return res.status(500).json({
      status: "INTERNAL_SERVER_ERROR",
      message: error.message,
    });
  }
};
