import cs from "./ContactsRecentActivity.module.css";
import task from "../../../../assets/img/circle/task.svg";
import call from "../../../../assets/img/circle/call.svg";
import email from "../../../../assets/img/circle/email.svg";
import RecentActivityField from "./RecentActivityField/RecentActivityField";


function ContactsRecentActivity() {
  return (

    <div className={cs["contacts-recent-activity_wrapper"]}>
      <div className={cs["recent-activity_field"]}>
        <span className={cs["subheading_date"]}>December 2018</span>
        <RecentActivityField
          icon={call}
          taskBlack="You made a call to Jane Doe"
          timeDate="Monday 3 at 14:30 EST"
        />
        <RecentActivityField
          icon={task}
          taskBlack="Completed task"
          taskBlue="Office meet-up"
          timeDate="Saturday 1 at 9:40 EST"
        />
      </div>
      <div className={cs["recent-activity_field"]}>
        <span className={cs["subheading_date"]}>December 2018</span>
        <RecentActivityField
          icon={call}
          taskBlack="You made a call to Jane Doe"
          timeDate="Friday 30 at 19:15 EST"
        />
        <RecentActivityField
          icon={email}
          taskBlack="Jane Doe opened email:"
          taskBlue="New rules"
          timeDate="Friday 30 at 16:50 EST "
        />
        <RecentActivityField
          icon={call}
          taskBlack="Jane Doe made a call to you"
          timeDate="Thursday 29 at 15:30 EST"
        />
      </div>
    </div>
  );
}
export default ContactsRecentActivity;