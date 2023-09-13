const EventModel = require("../models/Events");

exports.getAllEvents = async () => {
  return await EventModel.find();
};

exports.createEvent = async (event) => {
  return await EventModel.create(event);
};
exports.getEventById = async (id) => {
  return await EventModel.findById(id);
};

exports.updateEvent = async (id, event) => {
  return await EventModel.findByIdAndUpdate(id, event);
};

exports.deleteEvent = async (id) => {
  return await EventModel.findByIdAndDelete(id);
};

exports.getEventByCategory = async (category) => {
  category = category.toLowerCase();
  return await EventModel.find({ category: category });
};
