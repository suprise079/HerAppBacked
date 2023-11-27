const activityService = require("./ActivityService");

exports.recordActivity = async (req, res) => {
  console.log("Record Activity");
  try {
    const activityInfo = req.body;
    console.log("passed infor: " + JSON.stringify(activityInfo));
    const activity = await activityService.recordActivity(activityInfo);
    res.status(200).json(activity);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

exports.getActivityByUser = async (req, res) => {
  try {
    let filter = req.params.filter;
    let userId = req.params.id;
    let activityType = req.params.activityType;
    let activity = [];
    
    if (filter === "daily") {
      activity = await activityService.getActivityForToday(userId, activityType);
    } else if (filter === "weekly") {
      activity = await activityService.getActivityForThisWeek(userId, activityType);
    } else if (filter === "monthly") {
      activity = await activityService.getActivityForThisMonth(userId, activityType);
    } else {
      activity = await activityService.getActivity(userId, activityType);
    }

    res.status(200).json(activity);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
