"use client";

import { useRouter } from "next/navigation";
import EditModel from "./EditModel";
import axios from "axios";
import { TrashIcon, Edit } from "lucide-react";
import Model from "./Model";
import TaskForm from "./TaskForm";
import { useState } from "react";
const Task = ({ item }: any) => {
  const router = useRouter();

  const handleUpdate = () => {
    router.push(`?id=${item.id}`);
    setShow(true);
  };

  const DeleteTask = async () => {
    try {
      await axios.delete(`/api/task/${item.id}`);
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };
  const updateComplete = async () => {
    const isCompleted = item.completed;
    try {
      await axios.patch(`/api/task/${item.id}`, { isCompleted });
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };

  const [show, setShow] = useState(false);

  return (
    <div className="p-6 rounded-2xl border flex flex-col h-fit min-h-52 justify-between border-zinc-400 dark:border-gray-800 text-gray-700 dark:text-gray-500 dark:bg-slate-900 bg-zinc-300">
      <h1 className="font-medium">{item.title}</h1>
      <p className="text-xs mt-3 truncate">{item.description}</p>
      <p className="text-[10px] text-slate-300 float-right  mt-3 w-fit">
        {item.date}
      </p>
      <div className="flex gap-4 mt-4 items-center justify-between">
        <button
          onClick={updateComplete}
          className={
            item.completed
              ? "bg-green-500 rounded-xl px-4 py-2 text-xs text-white"
              : "bg-red-500 rounded-xl px-4 py-2 text-xs text-white"
          }
        >
          {item.completed ? "completed" : "inCompleted"}
        </button>
        <div className="flex items-center">
          <button
            className="px-2 py-1 rounded-xl  text-xs  hover:text-slate-200"
            onClick={handleUpdate}
          >
            <Edit color="blue" />
          </button>
          <button
            onClick={DeleteTask}
            className="px-2 py-1  rounded-xl text-xs hover:text-slate-200"
          >
            <TrashIcon color="red" />
          </button>
        </div>
      </div>
      <Model show={show} setShow={setShow}>
        <TaskForm setShow={setShow} type="Update" task={item} />
      </Model>
    </div>
  );
};

export default Task;
