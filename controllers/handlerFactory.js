const catchasync = require("./../utils/catchasync");
const AppError = require("./../utils/apperror");
//create
module.exports.createOne = function (Model) {
  return catchasync(async function (req, res, next) {
    const document = await Model.create(req.body);
    res.status(201).json({
      status: "The course has been added successfully",
      doc: document,
    });
  });
};
//getAll
module.exports.getAll = function (Model) {
  return catchasync(async function (req, res, next) {
    const document = await Model.find({});

    res.status(200).json({
      status: "success",
      doc: document,
    });
  });
};

//getOne
module.exports.getOne = function (Model) {
  return catchasync(async function (req, res, next) {
    const document = await Model.findById(req.params.id);

    if (!document) {
      return next(new AppError("No Document found with that Id", 404));
    }
    res.status(200).json({
      status: "success",
      doc: document,
    });
  });
};

//updateOne
module.exports.updateOne = function (Model) {
  return catchasync(async function (req, res, next) {
    const document = await Model.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!document) {
      return next(new AppError("No Document found with that Id", 404));
    }
    res.status(200).json({
      status: "success",
      doc: document,
    });
  });
};

//DeleteOne
module.exports.deleteOne = function (Model) {
  return catchasync(async function (req, res, next) {
    const document = await Model.findByIdAndDelete(req.params.id);
    if (!document) {
      return next(new AppError("No Document found with that Id", 404));
    }
    res.status(204).json({
      status: "success",
      data: null,
    });
  });
};
