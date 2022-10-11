 const   fieldCheck = async (req, res, next) => {
  try {
    let data = req.body;

    if (
      data.name.length < 1 ||
      data.email.length < 1 ||
      data.number.length < 1
    ) {
      return res.status(400).send({
        success: false,
        message: "please fill all the field",
      });
    } else {
      next();
    }
  } catch (error) {
    res.status(500).send({
      success: false,
      message: error.message,
    });
  }
};


export default fieldCheck