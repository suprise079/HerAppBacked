const eventServices = require("./NotificationService.js");

exports.getAllNotifications = async (req, res) => {
  try {
    const notifications = await eventServices.getAllNotifications();
    res.status(200).json(notifications);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

exports.createNotification = async (req, res) => {
  try {
    const eventInfo = req.body;
    // let result = await uploadImage(eventInfo.image.path);
    const event = await eventServices.createNotification({
      ...eventInfo,
      image: eventInfo.image.path,
    });
    res.status(201).json(event);
  } catch (e) {
    res.status(500).json({ Error: e.message });
  }
};

exports.getNotificationById = async (req, res) => {
  try {
    const event = await eventServices.getNotificationById(req.params.id);
    res.status(200).json(event);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

exports.updateNotification = async (req, res) => {
  try {
    const eventInfo = req.body;
    const event = await eventServices.updateNotification(req.params.id, {
      ...eventInfo,
      image: eventInfo.image.path,
    });
    res.status(200).json(event);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

exports.deleteNotification = async (req, res) => {
  try {
    const event = await eventServices.deleteNotification(req.params.id);
    res.status(200).json(event);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

exports.getNotificationByCategory = async (req, res) => {
  try {
    const notifications = await eventServices.getNotificationByCategory(req.params.category);
    res.status(200).json(notifications);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
