import React, { useState } from "react";
import data from "../data";
import { MdContentCopy } from "react-icons/md";
import { FaRegCheckCircle } from "react-icons/fa";
const Dashboard = () => {
  const [selected, setSelected] = useState("");
  const [search, setSearch] = useState("");
  const handleSelect = (uuid) => {
    setSelected(uuid);
    setTimeout(() => {
      setSelected("");
    }, 1500);
    const text = `🤵🏻‍♂️❤️👰🏻‍♀️យើងខ្ញុំសូមគោរពអញ្ជើញ៖

លោក លោកស្រី អ្នកនាង កញ្ញា និងប្រិយមិត្តចូលរួមជាភ្ញៀវកិត្តិយសក្នុងពិធីរៀបអាពាហ៍ពិពាហ៍របស់យើងខ្ញុំទាំងពីរដែលនឹងប្រារព្ធឡើង នៅថ្ងៃអាទិត្យ ទី១៦ ខែមីនា ឆ្នាំ២០២៥ វេលាម៉ោង ១១:០០ ថ្ងៃត្រង់ ស្ថិតនៅភោជនីយដ្ឋាន យៀត និមល (អាងទឹកត្រពាំងថ្ម) ភូមិត្រពាំងថ្មខាងជើង ឃុំប៉ោយចារ ស្រុកភ្នំស្រុក ខេត្តបន្ទាយមានជ័យ ដោយមេត្រីភាព។ 

❤️វត្តមានរបស់ភ្ញៀវកិត្តិយស គឺពិតជាសំខាន់ និងធ្វើអោយថ្ងៃរៀបមង្គលការរបស់យើងខ្ញុំទាំងពីរកាន់តែមានន័យ មិនអាចបំភ្លេចបាន។ សូមអរគុណ🙏🏽

🙏🏽យើងខ្ញុំសូមការយកយល់អធ្យាស្រ័យពីសំណាក់ភ្ញៀវកិត្តិយសទាំងអស់ដែលយើងខ្ញុំមិនបានគោរពអញ្ជើញដោយផ្ទាល់។

👉🏼សូមចូលទៅកាន់ Link ខាងក្រោមដើម្បីបើកលិខិតអញ្ជើញ ( Digital Wedding Invitation)៖ 

[${window.location.origin + "/?uuid=" + uuid}]
`;
    navigator.clipboard.writeText(text);
  };
  return (
    <div className="h-full bg-[white] overflow-auto">
      <div className="w-[95%] bg-white sticky top-[0px] mx-auto py-[10px]">
        <input
          value={search}
          placeholder="Enter guest name"
          onChange={(e) => setSearch(e.target.value)}
          className="w-full valid:border-black focus:border-black rounded-md px-[10px] border h-[50px] outline-none"
          type="text"
          required
        />
      </div>
      <ul className="flex w-[95%] mt-[30px] mx-auto flex-col gap-[10px]">
        {(search
          ? data.filter((d) =>
              d.name.toLowerCase().includes(search.toLowerCase())
            )
          : data
        ).map((d, index) => (
          <li
            key={d.name}
            className="flex hover:bg-slate-50 shadow-sm py-[10px] px-[10px] justify-between"
          >
            <span>{d.name}</span>
            <span onClick={() => handleSelect(d.uuid)} className=" text-[18px]">
              {selected === d.uuid ? (
                <FaRegCheckCircle className="text-green-500" />
              ) : (
                <MdContentCopy />
              )}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
