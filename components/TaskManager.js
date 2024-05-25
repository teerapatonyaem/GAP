import React, { useState } from "react";
import Modal1 from "./Modal1";
import FertilizerModal from "./FertilizerModal";
import { saveAllTasks } from "../components/SaveAllTask";

const TaskManager = () => {
  const [generalTask, setGeneralTask] = useState({
    job: "",
    quantity: "",
    cost: "",
    costDetails: "",
    additional: ""
  });

  const [fertilizerTask, setFertilizerTask] = useState({
    ferjob: "",
    ferformula: "",
    ferrate: "",
    ferquantity: "",
    fercost: "",
    feradditional: ""
  });

  const handleSaveAll = async () => {
    try {
      await saveAllTasks(generalTask, fertilizerTask);
    } catch (error) {
      console.log("Failed to save tasks:", error);
    }
  };

  return (
    <>
      {generalTask && (
        <Modal1
          generalTask={generalTask}
          setGeneralTask={setGeneralTask}
          onSave={handleSaveAll}
        />
      )}
      {fertilizerTask && (
        <FertilizerModal
          fertilizerTask={fertilizerTask}
          setFertilizerTask={setFertilizerTask}
          onSave={handleSaveAll}
        />
      )}
    </>
  );
};

export default TaskManager;
