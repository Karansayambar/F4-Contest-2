import { Suspense } from "react";
import { Spin } from "antd";
const LoadingWraper = ({ Component }) => {
  return (
    <>
      <Suspense
        fallback={
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "300px",
            }}
          >
            <Spin size="medium" />
          </div>
        }
      >
        <Component />
      </Suspense>
    </>
  );
};

export default LoadingWraper;
