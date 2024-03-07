import React from "react";
import { Button, Img, Text} from "../../components";


export default function TodoItem({title, text, id, deleteTodo, editTodo}) {
    console.log(id);
    const showButton = (id) => {
        console.log(id);
        let btns = document.querySelectorAll(".visible")[id]
        // console.log(btns););
        btns.style.opacity = "1";
    }
    const hideButton = (id) => {
        let btns = document.querySelectorAll(".visible")[id]
        console.log(btns);
        btns.style.opacity = "0";
    }
    return ( 
        // <div className="w-[95%] gap-[45px] grid-cols-3 md:grid-cols-2 md:gap-5 sm:grid-cols-1 grid">
        //     <div className="flex flex-row justify-between items-start w-full md:h-auto p-2 border-deep_orange-900 border-2 border-solid bg-gray-900 rounded-lg">
        //     <div className="flex flex-col items-start justify-start mt-[7px] ml-[7px] gap-1">
        //         <Text size="md" as="p">
        //         {title}
        //         </Text>
        //         <Text as="p">{text}</Text>
        //     </div>
        //     {/* <Button shape="square" className="w-[36px] mt-[7px] mr-[7px]">
        //         <Img src="images/defaultNoData.png" />
        //     </Button> */}
        //     <Button
        //           size="sm"
        //           shape="round"
        //           className="w-[32px] mt-[7px] ml-[47px] md:ml-5 border-deep_orange-900 border-2 border-solid !rounded-md"
        //           >
        //             <Img src="images/img_edit.svg" />
        //           </Button>
        //           <Button
        //           size="sm"
        //           shape="round"
        //           className="w-[32px] mt-[7px] ml-[9px] border-deep_orange-900 border-2 border-solid !rounded-[5px]"
        //           >
        //             <Img src="images/img_button_dell.svg" />
        //     </Button>
        //     </div>
        //     {/* <div className="flex flex-row justify-center w-full mt-[156px] px-14 py-[70px] md:p-5 border-deep_orange-900 border-2 border-solid bg-gray-900 max-w-[1306px] rounded-lg">
        //     <div className="w-[95%] gap-[45px] grid-cols-3 md:grid-cols-2 md:gap-5 sm:grid-cols-1 grid">
        //       <div className="flex flex-row justify-between items-start w-full md:h-auto p-2 border-deep_orange-900 border-2 border-solid bg-gray-900 rounded-lg">
        //         <div className="flex flex-col items-start justify-start mt-[7px] ml-[7px] gap-1">
        //           <Text size="md" as="p">
        //             Task Title...
        //           </Text>
        //           <Text as="p">Task body about this task...</Text>
        //         </div>
        //         <Button shape="square" className="w-[36px] mt-[7px] mr-[7px]">
        //           <Img src="images/defaultNoData.png" />
        //         </Button>
        //       </div>
        //       <div className="flex flex-row justify-between items-start w-full md:h-auto p-2 border-deep_orange-900 border-2 border-solid bg-gray-900 rounded-lg">
        //         <div className="flex flex-col items-start justify-start mt-[7px] ml-[7px] gap-1">
        //           <Text size="md" as="p">
        //             Task Title...
        //           </Text>
        //           <Text as="p">Task body about this task...</Text>
        //         </div>
        //         <Button shape="square" className="w-[36px] mt-[7px] mr-[7px]">
        //           <Img src="images/defaultNoData.png" />
        //         </Button>
        //       </div>
        //       <div className="flex flex-row justify-between items-start w-full md:h-auto p-2 border-deep_orange-900 border-2 border-solid bg-gray-900 rounded-lg">
        //         <div className="flex flex-col items-start justify-start mt-[7px] ml-[7px] gap-1">
        //           <Text size="md" as="p">
        //             Task Title...
        //           </Text>
        //           <Text as="p">Task body about this task...</Text>
        //         </div>
        //         <Button shape="square" className="w-[36px] mt-[7px] mr-[7px]">
        //           <Img src="images/defaultNoData.png" />
        //         </Button>
        //       </div>
        //       <div className="flex flex-row justify-between items-start w-full md:h-auto p-2 border-deep_orange-900 border-2 border-solid bg-gray-900 rounded-lg">
        //         <div className="flex flex-col items-start justify-start mt-[7px] ml-[7px] gap-1">
        //           <Text size="md" as="p">
        //             Task Title...
        //           </Text>
        //           <Text as="p">Task body about this task...</Text>
        //         </div>
        //         <Button shape="square" className="w-[36px] mt-[7px] mr-[7px]">
        //           <Img src="images/defaultNoData.png" />
        //         </Button>
        //       </div>
        //       <div className="flex flex-row justify-between items-start w-full md:h-auto p-2 border-deep_orange-900 border-2 border-solid bg-gray-900 rounded-lg">
        //         <div className="flex flex-col items-start justify-start mt-[7px] ml-[7px] gap-1">
        //           <Text size="md" as="p">
        //             Task Title...
        //           </Text>
        //           <Text as="p">Task body about this task...</Text>
        //         </div>
        //         <Button shape="square" className="w-[36px] mt-[7px] mr-[7px]">
        //           <Img src="images/defaultNoData.png" />
        //         </Button>
        //       </div>
        //       <div className="flex flex-row justify-between items-start w-full md:h-auto p-2 border-deep_orange-900 border-2 border-solid bg-gray-900 rounded-lg">
        //         <div className="flex flex-col items-start justify-start mt-[7px] ml-[7px] gap-1">
        //           <Text size="md" as="p">
        //             Task Title...
        //           </Text>
        //           <Text as="p">Task body about this task...</Text>
        //         </div>
        //         <Button shape="square" className="w-[36px] mt-[7px] mr-[7px]">
        //           <Img src="images/defaultNoData.png" />
        //         </Button>
        //       </div>
        //       <div className="flex flex-row justify-between items-start w-full md:h-auto p-2 border-deep_orange-900 border-2 border-solid bg-gray-900 rounded-lg">
        //         <div className="flex flex-col items-start justify-start mt-[7px] ml-[7px] gap-1">
        //           <Text size="md" as="p">
        //             Task Title...
        //           </Text>
        //           <Text as="p">Task body about this task...</Text>
        //         </div>
        //         <Button shape="square" className="w-[36px] mt-[7px] mr-[7px]">
        //           <Img src="images/defaultNoData.png" />
        //         </Button>
        //       </div>
        //       <div className="flex flex-row justify-between items-start w-full md:h-auto p-2 border-deep_orange-900 border-2 border-solid bg-gray-900 rounded-lg">
        //         <div className="flex flex-col items-start justify-start mt-[7px] ml-[7px] gap-1">
        //           <Text size="md" as="p">
        //             Task Title...
        //           </Text>
        //           <Text as="p">Task body about this task...</Text>
        //         </div>
        //         <Button shape="square" className="w-[36px] mt-[7px] mr-[7px]">
        //           <Img src="images/defaultNoData.png" />
        //         </Button>
        //       </div>
        //     </div>
        //   </div> */}
        // </div>
        <div className="flex flex-row justify-between items-start w-full md:h-auto p-2 border-deep_orange-900 border-2 border-solid bg-gray-900 rounded-lg" onMouseEnter={() => showButton(id-1)} onMouseLeave={() => hideButton(id-1)}>
        <div className="flex flex-col items-start justify-start mt-[7px] ml-[7px] gap-1" >
            <Text size="md" as="p">
            {title}
            </Text>
            <Text as="p">{text}</Text>
        </div>
        <div class= "flex visible" style={{opacity: 0}}>           
        <Button
            size="sm"
            shape="round"
            className="w-[32px] mt-[7px] ml-[47px] md:ml-5 border-deep_orange-900 border-2 border-solid !rounded-md"
            onClick={() => editTodo(id)}
            >
            <Img src="images/img_edit.svg" />
        </Button>
        <Button
            size="sm"
            shape="round"
            className="w-[32px] mt-[7px] ml-[9px] border-deep_orange-900 border-2 border-solid !rounded-[5px]"
            onClick={() => deleteTodo(id)}
            >
            <Img src="images/img_button_dell.svg" />
        </Button>
            </div>
        </div>
    );
}