import emailHtml from "../config/emailHtml.js";
import transporterFunction from "../config/transpoter.js";
import Visitor from "../models/visitor.model.js";

export const addVisitor = async (req, res) => {
  try {
    const body = req.body;
    const visit = await Visitor.create(body);

    const transporter = await transporterFunction();

    const htmlPage = emailHtml(visit.name, visit.id);

    // console.log(htmlPage);

    const options = {
      from: "vaibhavj478@gmail.com",
      to: `${visit.email}`,
      subject: "Do not reply | Confirm your mail",
      text: ``,
      html: `${htmlPage}`,
    };

    transporter.sendMail(options, (err) => {
      if (err) {
        console.log(`it has an error ${err}`);
      } else {
        console.log("mail has sent");
      }
    });

    res.status(201).send({
      success: true,
      message: "your request is made now please confirm mail",
    });
  } catch (error) {
    res.status(500).send({
      success: true,
      message: error.message,
    });
  }
};

export const confirmMail = async (req, res) => {
  try {
    const visitor = await Visitor.findById(req.params.id);

    visitor.isAuth = true;

    await visitor.save();

    res.status(200).send({
      success: true,
      visitor,
      isConfirm: true,
    });
  } catch (error) {
    res.status(500).send({
      success: true,
      message: error.message,
    });
  }
};
