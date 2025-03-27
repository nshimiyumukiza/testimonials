

import { IoIosMenu } from "react-icons/io";
import { ImCross } from "react-icons/im";
import { useState } from "react";

const Text = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  // FUNCTION TO ADDNEW TASK
  const addTask = () =>{
    if(task.trim() ==="") return;
    setTasks(...tasks,task);
    setTask("");
  }

  // function to delete a task
  const deleteTask = (index) =>{
    setTasks(tasks.filter((_,i) => i !==index));

  }
  return (
    <div>
   <div className=" px-8 flex justify-between">
    <h1 className="text-lg font-semibold text-green-400">ERNESTE</h1>
    <div className=" gap-4 hidden sm:flex ">
      <a href="">home</a>
      <a href="">about</a>
      <a href="">service</a>
    </div>
    <button onClick={() =>setIsOpen(prev => !prev)} className="block sm:hidden">
      {isOpen ? <ImCross /> : <IoIosMenu /> }
    </button>
    </div>


    {isOpen &&(
       <div className=" space-y-4 flex flex-col sm:hidden">
       <a href="">home</a>
       <a href="">about</a>
       <a href="">service</a>
     </div>

    )}
      
      <ul class="flex space-x-6">
  <li class="group relative ">
    <a class="text-gray-800 hover:text-blue-600">Services</a>
    <div class="absolute hidden group-hover:block p-2 shadow-lg bg-black text-white">
      <a href="#" class="block px-4 py-2">Web Design</a>
      <a href="#" class="block px-4 py-2">SEO</a>
    </div>
  </li>
</ul>


    </div>
  )
}

export default Text



