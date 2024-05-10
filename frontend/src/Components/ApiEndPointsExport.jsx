const ApiEndPointsExport = () => {
  const arr = Array.from({ length: 3 });
  const colors = ["#FF4949", "#EE8B60", "#39D2C0"]; // Array of colors
  return (
    <div>
      <div className=" min-h-[800px] w-[100%] overflow-y-auto">
        <div className=" w-[95%] min-h-[200px] shadow-custom sha rounded-xl  mt-8  overflow-y-auto mx-8">
          <h1 className="font-[600] text-[20px]  text-[#EB456A] mx-11 mt-5  ">
            Import requests
          </h1>
          <pre className="mx-11 font-[600] leading-[20.05px] text-[#57636C] text-sm">
            <code>
              {`
API_URL = "https://www.stack-inference.com/ru_deployed_flow?flow_id=65525Be252d1e4458d878corg=2617afc-7411-4598-b566"
headers = {
  'Authorization': "Bearer XXXXXXXXXXXXXXX",
  'Content-Type': 'application/json'
}
def query(payload):
  response = requests.post(API_URL, headers=headers, json=payload)
  return response.json()
output = query({
  "in-0": "How is AI transforming the ecommerce industry?",
  "user_id": "<USER or Conversation ID>"
})
          `}
            </code>
          </pre>
        </div>
        <div className="w-[85%] h-[80px] bg-[#31286A]  rounded-xl my-11 mx-8">
          <div className="flex gap-2 mx-4  ">
            {arr.map((circle, index) => {
              return (
                <div
                  className="h-4 w-4 rounded-full mt-4"
                  key={index}
                  style={{ backgroundColor: colors[index % colors.length] }}
                >
                  {circle}
                </div>
              );
            })}
          </div>
          <p className="text-white  mx-4  text-sm font-[500] mt-4 ">
            Click to test your API
          </p>
        </div>
        <div className="mx-8">
          <button className="flex items-center gap-2 bg-[#BF5670] text-white px-4 py-2 rounded-lg font-[600]">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-caret-right-fill text-white"
                viewBox="0 0 16 16"
              >
                <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
              </svg>
            </span>
            Test API
          </button>
        </div>
      </div>
    </div>
  );
};
export default ApiEndPointsExport;
