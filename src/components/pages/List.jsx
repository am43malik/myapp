import React, { useEffect, useState } from "react";
import { GrView } from "react-icons/gr";
import { AiFillEdit } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import axios from "axios";
import { Link } from "react-router-dom";

const List = () => {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    
    getUser();
  }, []);
  async function getUser() {
    try {
      const students = await axios.get("http://localhost:3000/students");
      // console.log(students.data);
      setStudents(students.data);
    } catch (error) {
      console.error("ddfs");
    }
  }
  async function deleteuser(id) {
    const studentab = await axios.delete(`http://localhost:3000/students/${id}`)
    console.log(studentab)
    alert('delete')
    getUser()
  }
  return (
    <div>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full">
                <thead className="bg-white border-b">
                  <tr>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Index
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Action
                    </th>
                  </tr>
                </thead>

                {students.length > 0
                  ? students.map((item, i) => {
                      return (
                        <tbody key={i}>
                          <tr className="bg-gray-100 border-b">
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              {i + 1}
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              {item.name}
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              {item.email}
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                             
                              <Link to={`/view/${item.id}`}>
                              
                                <h1 className="p-1">
                                  <GrView />
                                </h1>
                              </Link>

                              <Link to={`/edit/${item.id}`}>
                                <h1 className="p-1">
                                  <AiFillEdit />
                                </h1>
                              </Link>

                              <Link>
                               
                                <h1 className="p-1">
                                  <AiFillDelete onClick={()=>{deleteuser(item.id)}}/>
                                </h1>
                              </Link>
                            </td>
                          </tr>
                        </tbody>
                      );
                    })
                  : null}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
