import React from "react";
import {useDispatch} from "react-redux";
import {TrashIcon, CheckCircleIcon, MinusCircleIcon} from "@heroicons/react/solid";

import {updateTodo} from "../store/todoSlice";


export const ListItem = ({data,onDelete}) => {
    const { todo, completed } = data;
    const dispatch = useDispatch();

    const checkTodo = () => {
        let checkedTodo = {
            ...data,
            completed: !data.completed,
        }
        dispatch(updateTodo(checkedTodo))
    }
    return (
        <div className="flex flex-row justify-between items-center bg-white shadow-lg p-4 rounded-lg mb-4">
           <div className="flex flex-row items-center overflow-hidden ">
               {completed
                   ? <CheckCircleIcon onClick={() => checkTodo()} height={20} width={20} fill="green"/>
                   : <MinusCircleIcon onClick={() => checkTodo()}height={20} width={20} fill="gray" />
               }
               <p className="ml-2 font-medium">{todo}</p>
           </div>
            <div className="flex flex-row">

                <div onClick={onDelete} className="cursor-pointer h-8 w-8 rounded-md hover:bg-gray-100 items-center flex justify-center">
                    <TrashIcon height={20} width={20} fill="#EF4444"/>
                </div>
            </div>
        </div>
    )
}