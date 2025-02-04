import Task from "@/components/Task";
import Tasks from "@/components/Tasks";
import { ThemeButton } from "@/components/ThemButton";
import { unstable_noStore } from "next/cache";
import React from "react";

unstable_noStore();

const getTasks = async () => {
  const res = await fetch("http://localhost:3000/api/task", {
    cache: "no-cache",
  });
  const data = await res.json();
  return data;
};
export default async function Completed() {
  const tasks = await getTasks();

  const completedTasks = tasks.filter((task: any) => !task.completed);

  return (
    <>
      <h1 className="text-xl font-semibold my-4 text-gray-700 ml-6 dark:text-gray-500">
        Do It Now!
      </h1>
      <div className="task_Container pb-20 grid pr-3 lg:grid-cols-3 gap-4 mt-3  grid-cols-1 h-[70vh] overflow-y-auto">
        {completedTasks?.map((item: any) => <Task key={item.id} item={item} />)}
      </div>
    </>
  );
}
