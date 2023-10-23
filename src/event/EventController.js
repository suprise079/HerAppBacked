const eventServices = require("./EventService.js");

exports.getAllEvents = async (req, res) => {
  try {
    const events = await eventServices.getAllEvents();
    res.status(200).json(events);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

exports.createEvent = async (req, res) => {
  try {
    const eventInfo = req.body;
    // let result = await uploadImage(eventInfo.image.path);
    const event = await eventServices.createEvent({
      ...eventInfo,
      image: eventInfo.image.path,
    });
    res.status(201).json(event);
  } catch (e) {
    res.status(500).json({ Error: e.message });
  }
};

exports.getEventById = async (req, res) => {
  try {
    const event = await eventServices.getEventById(req.params.id);
    res.status(200).json(event);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

exports.updateEvent = async (req, res) => {
  try {
    const eventInfo = req.body;
    const event = await eventServices.updateEvent(req.params.id, eventInfo);
    res.status(200).json(event);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

exports.deleteEvent = async (req, res) => {
  try {
    const event = await eventServices.deleteEvent(req.params.id);
    res.status(200).json(event);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

exports.getEventByCategory = async (req, res) => {
  try {
    const events = await eventServices.getEventByCategory(req.params.category);
    res.status(200).json(events);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
