import { useState } from 'react'
import Select from "react-select"
import { Users } from './constants'

const userStyles = {
    control: (base, state) => ({
      ...base,
      border: state.isFocused ? "1px solid #696cff" : base.border,
      boxShadow: "none",
    }),
    menu: (base) => ({
      ...base,
      backgroundColor: "#fff",
    }),
    option: (base, state) => ({
      ...base,
      backgroundColor: state.isSelected
        ? "#f0f0f0"
        : state.isFocused
        ? "color-mix(in srgb, #fff 84%, #696cff 16%)"
        : "#fff",
      color: state.isSelected ? "white" : "#697a8d",
    }),
    multiValue: (base) => ({
      ...base,
      backgroundColor: "#f0f0f0",
    }),
  };


export default function UserSelect() {
    const [selectedUsers, setSelectedUsers] = useState([]);
   
    return (
        <>
            <Select
                classNamePrefix="selectedUser"
                options={Users}
                isMulti
                value={selectedUsers}
                onChange={setSelectedUsers}
                placeholder="검색 후 추가"
                styles={userStyles}  // styles prop으로 커스터마이즈
            />
        </>
    );    
}
