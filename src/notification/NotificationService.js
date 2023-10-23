const NotificationModel = require("./Notifications");

exports.getAllNotifications = async () => {
  return await NotificationModel.find();
};

exports.createNotification = async (notification) => {
  return await NotificationModel.create(notification);
};
exports.getNotificationById = async (id) => {
  return await NotificationModel.findById(id);
};

exports.updateNotification = async (id, notification) => {
  return await NotificationModel.findByIdAndUpdate(id, notification);
};

exports.deleteNotification = async (id) => {
  return await NotificationModel.findByIdAndDelete(id);
};

exports.getNotificationByCategory = async (category) => {
  category = category.toLowerCase();
  return await NotificationModel.find({ category: category });
};
