import Task from "@/components/Task";
import Tasks from "@/components/Tasks";
import { ThemeButton } from "@/components/ThemButton";
import React from "react";

const getTasks = async () => {
  const res = await fetch("http://localhost:3000/api/task", {
    cache: "no-cache",
  });
  const data = await res.json();
  return data;
};
export default async function Completed() {
  const tasks = await getTasks();

  const completedTasks = tasks.filter((task: any) => task.completed);
  console.log(completedTasks);

  return (
    <>
      <h1 className="text-xl font-semibold text-gray-700 my-4 ml-6 dark:text-gray-500">
        Completed Tasks
      </h1>
      <div className="task_Container pb-20 grid pr-3 lg:grid-cols-3 gap-4 mt-3  grid-cols-1 h-[70vh] overflow-y-auto">
        {completedTasks?.map((item: any) => <Task key={item.id} item={item} />)}
      </div>
    </>
  );
}
