const ActivityModel = require("./Activity");

exports.recordActivity = async (activity) => {
  return await ActivityModel.create(activity);
};

exports.getActivity = async (userId, activityType) => {
  return await ActivityModel.find({ userId: userId, activityType: activityType });
};

// To add date filters
exports.getActivityForToday = async (userId, activityType) => {
  return await ActivityModel.find({
    userId: userId,
    activityType: activityType,
    date: { $gte: new Date().setHours(0, 0, 0, 0) },
  });
};

exports.getActivityForThisWeek = async (userId, activityType) => {
  return await ActivityModel.find({
    userId: userId,
    activityType: activityType,
    date: { $gte: new Date().setDate(new Date().getDate() - 7) },
  });
};

exports.getActivityForThisMonth = async (userId, activityType) => {
  return await ActivityModel.find({
    userId: userId,
    activityType: activityType,
    date: { $gte: new Date().setDate(new Date().getDate() - 30) },
  });
};
