import React from "react";
import { Helmet } from "react-helmet";
import { Button, Img, Text, Input, Heading } from "../../components";

export default function TODOwithtaskOnePage() {

  function showButton(){
    // this.hover = true;
  }

  return (
    <>
      <Helmet>
        <title>Todo</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-row justify-center w-full pb-[228px] md:pb-5 bg-gray-900_01">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex flex-row justify-start w-full p-[15px] rounded-bl-lg rounded-br-lg border-deep_orange-900 border-2 border-solid bg-gray-900">
            <div className="flex flex-row justify-start w-[6%] mb-0.5 ml-8 sm:ml-5">
              <div className="flex flex-col items-center justify-start w-full">
                <Heading size="s" as="h1" className="!text-white-A700">
                  GYIZER
                </Heading>
                <Heading as="h2">TODO APP</Heading>
              </div>
            </div>
          </div>
          <div className="flex flex-row sm:flex-col justify-start w-[38%] md:w-full mt-[62px] gap-2 sm:gap-5">
            <div className="flex flex-col items-center justify-start w-[86%] sm:w-full gap-1.5">
              <div className="flex flex-row justify-center w-full">
                <Input shape="round" name="input" placeholder="Title..." className="w-full sm:w-full" />
              </div>
              <div className="flex flex-row justify-center w-full">
                <Input shape="round" name="inputone" placeholder="Input..." className="w-full sm:w-full" />
              </div>
            </div>
            <Button size="2xl" shape="round" className="w-[70px] border-orange-600 border-2 border-solid">
              <Img src="images/img_button_add.svg" />
            </Button>
          </div>
          <div className="flex flex-row justify-center w-full mt-[156px] px-14 py-[70px] md:p-5 border-deep_orange-900 border-2 border-solid bg-gray-900 max-w-[1306px] rounded-lg">
            <div className="w-[95%] gap-[45px] grid-cols-3 md:grid-cols-2 md:gap-5 sm:grid-cols-1 grid">
              <div className="flex flex-row justify-between items-start w-full md:h-auto p-2 border-deep_orange-900 border-2 border-solid bg-gray-900 rounded-lg">
                <div className="flex flex-col items-start justify-start mt-[7px] ml-[7px] gap-1">
                  <Text size="md" as="p">
                    Task Title...
                  </Text>
                  <Text as="p">Task body about this task...</Text>
                </div>
                <Button shape="square" className="w-[36px] mt-[7px] mr-[7px]">
                  <Img src="images/defaultNoData.png" />
                </Button>
              </div>
              <div className="flex flex-row justify-center items-start w-full md:h-auto p-2 border-deep_orange-900 border-2 border-solid bg-gray-900 rounded-lg" onMouseOver={showButton}>
                <div className="flex flex-col items-start justify-start w-[52%] mt-[7px] gap-1">
                  <Text size="md" as="p">
                    Task Title...
                  </Text>
                  <Text as="p">Task body about this task...</Text>
                </div> 
                <>
                  <Button
                  size="sm"
                  shape="round"
                  className="w-[32px] mt-[7px] ml-[47px] md:ml-5 border-deep_orange-900 border-2 border-solid !rounded-md"
                  >
                    <Img src="images/img_edit.svg" />
                  </Button>
                  <Button
                  size="sm"
                  shape="round"
                  className="w-[32px] mt-[7px] ml-[9px] border-deep_orange-900 border-2 border-solid !rounded-[5px]"
                  >
                    <Img src="images/img_button_dell.svg" />
                  </Button>
                </>
              </div>
              <div className="flex flex-row justify-between items-start w-full md:h-auto p-2 border-deep_orange-900 border-2 border-solid bg-gray-900 rounded-lg">
                <div className="flex flex-col items-start justify-start mt-[7px] ml-[7px] gap-1">
                  <Text size="md" as="p">
                    Task Title...
                  </Text>
                  <Text as="p">Task body about this task...</Text>
                </div>
                <div className="flex flex-col items-center justify-start h-[36px] w-[36px] mt-[7px] mr-[7px]">
                  {/* <Button
                    color="gray_900"
                    size="lg"
                    shape="round"
                    className="font-bold border-deep_orange-900 border border-solid min-w-[36px] !rounded-md sm:min-w-full"
                  >
                    i
                  </Button> */}
                </div>
              </div>
              {/* <div className="flex flex-row justify-between items-start w-full md:h-auto p-2 border-deep_orange-900 border-2 border-solid bg-gray-900 rounded-lg">
                <div className="flex flex-col items-start justify-start mt-[7px] ml-[7px] gap-1">
                  <Text size="md" as="p">
                    Task Title...
                  </Text>
                  <Text as="p">Task body about this task...</Text>
                </div>
                <Button shape="square" className="w-[36px] mt-[7px] mr-[7px]">
                  <Img src="images/defaultNoData.png" />
                </Button>
              </div>
              <div className="flex flex-row justify-between items-start w-full md:h-auto p-2 border-deep_orange-900 border-2 border-solid bg-gray-900 rounded-lg">
                <div className="flex flex-col items-start justify-start mt-[7px] ml-[7px] gap-1">
                  <Text size="md" as="p">
                    Task Title...
                  </Text>
                  <Text as="p">Task body about this task...</Text>
                </div>
                <Button shape="square" className="w-[36px] mt-[7px] mr-[7px]">
                  <Img src="images/defaultNoData.png" />
                </Button>
              </div>
              <div className="flex flex-row justify-between items-start w-full md:h-auto p-2 border-deep_orange-900 border-2 border-solid bg-gray-900 rounded-lg">
                <div className="flex flex-col items-start justify-start mt-[7px] ml-[7px] gap-1">
                  <Text size="md" as="p">
                    Task Title...
                  </Text>
                  <Text as="p">Task body about this task...</Text>
                </div>
                <Button shape="square" className="w-[36px] mt-[7px] mr-[7px]">
                  <Img src="images/defaultNoData.png" />
                </Button>
              </div>
              <div className="flex flex-row justify-between items-start w-full md:h-auto p-2 border-deep_orange-900 border-2 border-solid bg-gray-900 rounded-lg">
                <div className="flex flex-col items-start justify-start mt-[7px] ml-[7px] gap-1">
                  <Text size="md" as="p">
                    Task Title...
                  </Text>
                  <Text as="p">Task body about this task...</Text>
                </div>
                <Button shape="square" className="w-[36px] mt-[7px] mr-[7px]">
                  <Img src="images/defaultNoData.png" />
                </Button>
              </div>
              <div className="flex flex-row justify-between items-start w-full md:h-auto p-2 border-deep_orange-900 border-2 border-solid bg-gray-900 rounded-lg">
                <div className="flex flex-col items-start justify-start mt-[7px] ml-[7px] gap-1">
                  <Text size="md" as="p">
                    Task Title...
                  </Text>
                  <Text as="p">Task body about this task...</Text>
                </div>
                <Button shape="square" className="w-[36px] mt-[7px] mr-[7px]">
                  <Img src="images/defaultNoData.png" />
                </Button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
