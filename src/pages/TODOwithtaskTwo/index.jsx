import React from "react";
import { Helmet } from "react-helmet";
import { Text, Button, Img, Input, Heading } from "../../components";

export default function TODOwithtaskTwoPage() {
  return (
    <>
      <Helmet>
        <title>Todo</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-row justify-center w-full pb-[228px] md:pb-5 bg-gray-900_01">
        <div className="flex flex-col items-center justify-start w-full gap-[156px]">
          <div className="flex flex-col items-start justify-start w-full gap-[62px]">
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
            <div className="flex flex-row md:flex-col justify-start w-[38%] md:w-full ml-[348px] gap-2 md:gap-5 md:ml-5">
              <div className="flex flex-col items-center justify-start w-[86%] md:w-full gap-1.5">
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
          </div>
          <div className="flex flex-col items-center justify-center w-full gap-2.5 px-14 py-[183px] md:p-5 border-deep_orange-900 border-2 border-solid bg-gray-900 max-w-[1306px] rounded-lg">
            <div className="h-[3px] w-[6%] mt-1 bg-orange-600" />
            <Text size="lg" as="p" className="!text-white-A700 !font-inter text-center">
              No tasks
            </Text>
            <div className="h-[3px] w-[6%] bg-orange-600" />
          </div>
        </div>
      </div>
    </>
  );
}
