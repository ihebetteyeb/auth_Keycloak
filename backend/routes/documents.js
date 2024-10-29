import express from "express";
const router = express.Router();

let data = ["one", "two", "three"];
const getDocuments = async (req, res) => {
  try {
    const email = req.user;
    console.log(email);
    res.status(200).send(data);
  } catch (err) {
    res.status(500).send(err);
  }
};
router.get("/", getDocuments);

export default router;
