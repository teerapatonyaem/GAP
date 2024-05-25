// SaveAllTask.js
import { saveTask as saveGeneralTask } from "./database";
import { saveTask as saveFertilizerTask } from "./Fertilizerdatabase";

export const saveAllTasks = async (generalTask, fertilizerTask) => {
  try {
    await saveGeneralTask(
      generalTask.job,
      generalTask.quantity,
      generalTask.cost,
      generalTask.costDetails,
      generalTask.additional
    );

    await saveFertilizerTask(
      fertilizerTask.ferjob,
      fertilizerTask.ferformula,
      fertilizerTask.ferrate,
      fertilizerTask.ferquantity,
      fertilizerTask.fercost,
      fertilizerTask.feradditional
    );

    console.log("Both tasks saved successfully");
  } catch (error) {
    console.log("Failed to save tasks:", error);
  }
};
