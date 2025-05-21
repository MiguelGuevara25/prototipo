import React from "react";

const OtherBody = () => {
  return (
    <div id="root">
      <div className="w-screen h-screen flex bg-gray-50">
        <div>
          <div>
            <div className="flex flex-col h-screen overflow-hidden">
              <div className="flex flex-1 flex-col overflow-hidden">
                <div className="flex flex-1 overflow-hidden">
                  <div className="flex-1 flex flex-col overflow-hidden h-full">
                    <div className="flex-1 overflow-auto relative">
                      <div>
                        <div className="flex min-w-max">
                          <div className="flex-1 min-w-0 relative">
                            <div>
                              <div className="absolute top-0 left-0 w-full h-full"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherBody;
