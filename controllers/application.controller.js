import asyncHandler from "express-async-handler";
import { applicationGetAll } from "../services/mongo/application.js";
import { RESPONSE } from "../globals/api.js";
import { ResponseFields } from "../globals/fields/response.js";

// Get all  applications
const getAll = asyncHandler(async (req, res) => {
  try {
    const applications = await applicationGetAll(req);
    res.send(
      RESPONSE(
        {
          [ResponseFields.applicationList]: applications,
        },
        "Successfully"
      )
    );
  } catch (error) {
    res.status(400).send(RESPONSE([], "Unsuccessful", e.error, e.message));
  }
});

const ApplicationController = {
  getAll,
};

export default ApplicationController;
